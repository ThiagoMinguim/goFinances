import React, { useState } from 'react'
import { Modal } from 'react-native'

import { Button } from '../../components/Form/Button'
import { Input } from '../../components/Form/Input'
import { CategorySelectButton } from '../../components/Form/CategorySelectButton'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'

import { CategorySelect } from '../CategorySelect'

import * as S from './styles'

export function Register() {
  const [TransactionType, setTransactionType] = useState('')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  })

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false)
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title> Cadastro </S.Title>
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

          <CategorySelectButton
            onPress={handleOpenSelectCategoryModal}
            title="Categoria"
          />
        </S.Fields>

        <Button title="Enviar" />

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>
      </S.Form>
    </S.Container>
  )
}
