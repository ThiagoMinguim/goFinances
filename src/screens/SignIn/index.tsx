import React from 'react'
import { Alert } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import AppleSvg from '../../assets/apple.svg'
import GoogleSvg from '../../assets/google.svg'
import LogoSvg from '../../assets/logo.svg'
import { useAuth } from '../../hooks/auth'

import { SignInSocialButton } from '../../components/SignInSocialButton'

import * as S from './styles'

export function SignIn() {
  const { signInWithGoogle } = useAuth()

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle()
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível fazer o login Tente novamente')
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
          <SignInSocialButton title="Entrar com Apple" svg={AppleSvg} />
        </S.FooterWrapper>
      </S.Footer>
    </S.Container>
  )
}
