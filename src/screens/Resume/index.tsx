import React from 'react'
import { HistoryCard } from '../../components/HistoryCard'

import * as S from './styles'

export function Resume() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Resumo por categoria</S.Title>
      </S.Header>

      <HistoryCard title="Compras" amount="R$ 1.000,00" color="#00BFFF" />
    </S.Container>
  )
}
