import React, { useState } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { useTheme } from 'styled-components'

import AppleSvg from '../../assets/apple.svg'
import GoogleSvg from '../../assets/google.svg'
import LogoSvg from '../../assets/logo.svg'
import { useAuth } from '../../hooks/auth'

import { SignInSocialButton } from '../../components/SignInSocialButton'

import * as S from './styles'
import { is } from 'date-fns/locale'

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false)

  const { signInWithGoogle, signInWithApple } = useAuth()
  const theme = useTheme()

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true)
      return await signInWithGoogle()
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível fazer o login Tente novamente')
      setIsLoading(false)
    }
  }

  async function handleSignInWithApple() {
    try {
      setIsLoading(true)
      return await signInWithApple()
    } catch (error) {
      console.log(error)
      Alert.alert(
        'Não foi possível fazer o login Pela conta Apple, tente pelo Google'
      )
      setIsLoading(false)
    }
  }

  return (
    <S.Container>
      <S.Header>
        <S.TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />

          <S.Title>
            Controle suas
            {'\n'} finanças de forma {'\n'} muito mais simples
          </S.Title>
        </S.TitleWrapper>

        <S.SignInTitle>
          Faça seu login com {'\n'}uma das contas abaixo
        </S.SignInTitle>
      </S.Header>

      <S.Footer>
        <S.FooterWrapper>
          <SignInSocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />
          <SignInSocialButton
            title="Entrar com Apple"
            svg={AppleSvg}
            onPress={handleSignInWithApple}
          />
        </S.FooterWrapper>

        {isLoading && (
          <ActivityIndicator
            color={theme.colors.shape}
            style={{ marginTop: 18 }}
          />
        )}
      </S.Footer>
    </S.Container>
  )
}
