import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'

import * as S from './styles'

export function Dashboard() {
  return (
    <S.Container>
      <S.Header>
        <S.UserWrapper>
          <S.UserInfo>
            <S.Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/77082563?v=4'
              }}
            />
            <S.User>
              <S.Usergreeting>Olá,</S.Usergreeting>
              <S.UserName>Chazy</S.UserName>
            </S.User>
          </S.UserInfo>
          <S.Icon name="power" />
        </S.UserWrapper>
      </S.Header>

      <S.HighlightCards>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </S.HighlightCards>
    </S.Container>
  )
}
