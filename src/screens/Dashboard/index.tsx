import React from 'react'
import { FlatList } from 'react-native'
import { HighlightCard } from '../../components/HighlightCard'
import {
  TransactionCard,
  TransactionCardProps
} from '../../components/TransactionCard'

export interface DataListProps extends TransactionCardProps {
  id: string
}

import * as S from './styles'

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'RS 12.000.00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date: '13/04/2020'
    },
    {
      id: '2',
      type: 'negative',
      title: 'hambuerger',
      amount: 'RS 12.000.00',
      category: {
        name: 'alimentação',
        icon: 'coffee'
      },
      date: '13/04/2020'
    },
    {
      id: '3',
      type: 'negative',
      title: 'alugel de apartamento',
      amount: 'RS 1.200.00',
      category: {
        name: 'Casa',
        icon: 'shopping-bag'
      },
      date: '13/04/2020'
    }
  ]

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
          <S.LogoutButton onPress={() => {}}>
            <S.Icon name="power" />
          </S.LogoutButton>
        </S.UserWrapper>
      </S.Header>

      <S.HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Ultima entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Ultima saída dia 03 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </S.HighlightCards>

      <S.Transactions>
        <S.Title> Listagem </S.Title>

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </S.Transactions>
    </S.Container>
  )
}
