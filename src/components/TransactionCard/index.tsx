import React from 'react'
import { Footer } from '../HighlightCard/styles'

import * as S from './styles'

export function TransactionCard() {
  return (
    <S.Container>
      <S.Title>Desenvolvimento de site</S.Title>
      <S.Amount>R$ 1.000,00</S.Amount>

      <S.Footer>
        <S.Category>
          <S.Icon name="dollar-sign" />
          <S.CategoryName>Vendas</S.CategoryName>
        </S.Category>
        <S.Date>10/10/10</S.Date>
      </S.Footer>
    </S.Container>
  )
}
