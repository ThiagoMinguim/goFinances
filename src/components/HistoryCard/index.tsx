import React from 'react'

import * as S from './styles'

interface Props {
  color: string
  title: string
  amount: string
}

export function HistoryCard({ color, title, amount }: Props) {
  return (
    <S.Container color={color}>
      <S.Title>{title}</S.Title>
      <S.Amount>{amount}</S.Amount>
    </S.Container>
  )
}
