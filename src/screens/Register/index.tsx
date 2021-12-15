import React, { useState } from 'react'

import { Button } from '../../components/Form/Button'
import { Input } from '../../components/Form/Input'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'
import * as S from './styles'

export function Register() {
  const [TransactionType, setTransactionType] = useState('')

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title> Cadasto </S.Title>
      </S.Header>

      <S.Form>
        <S.Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <S.TransactionsTypes>
            <TransactionTypeButton
              type="up"
              title="income"
              onPress={() => handleTransactionsTypeSelect('up')}
              isActive={TransactionType === 'up'}
            />
            <TransactionTypeButton
              type="down"
              title="outcome"
              onPress={() => handleTransactionsTypeSelect('down')}
              isActive={TransactionType === 'down'}
            />
          </S.TransactionsTypes>
        </S.Fields>

        <Button title="Enviar" />
      </S.Form>
    </S.Container>
  )
}
