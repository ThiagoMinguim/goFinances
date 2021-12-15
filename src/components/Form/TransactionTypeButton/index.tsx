import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

interface Props extends TouchableOpacityProps {
  isActive: boolean
  type: 'up' | 'down'
  title: string
}

export function TransactionTypeButton({
  title,
  type,
  isActive,
  ...rest
}: Props) {
  return (
    <S.Container isActive={isActive} type={type} {...rest}>
      <S.Icon name={icons[type]} type={type} />
      <S.Title>asd</S.Title>
    </S.Container>
  )
}
