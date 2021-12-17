import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Modal } from 'react-native'

import { Button } from '../../components/Form/Button'
import { Input } from '../../components/Form/Input'
import { CategorySelectButton } from '../../components/Form/CategorySelectButton'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'

import { CategorySelect } from '../CategorySelect'

import * as S from './styles'
import { InputForm } from '../../components/Form/InputForm'

interface FormData {
  name: string
  amount: string
}

export function Register() {
  const [TransactionType, setTransactionType] = useState('')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  })

  const { control, handleSubmit } = useForm()

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false)
  }

  function handleRegister(form: FormData) {
    const data = {
      name: form.name,
      amount: form.amount,
      TransactionType,
      category: category.key
    }
    console.log(data)
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title> Cadastro </S.Title>
      </S.Header>
      <S.Form>
        <S.Fields>
          <InputForm control={control} name="name" placeholder="Nome" />
          <InputForm control={control} name="amount" placeholder="Preço" />

          <S.TransactionsTypes>
            <TransactionTypeButton
              type="up"
              title="Entrada"
              onPress={() => handleTransactionsTypeSelect('up')}
              isActive={TransactionType === 'up'}
            />
            <TransactionTypeButton
              type="down"
              title="Saída"
              onPress={() => handleTransactionsTypeSelect('down')}
              isActive={TransactionType === 'down'}
            />
          </S.TransactionsTypes>

          <CategorySelectButton
            onPress={handleOpenSelectCategoryModal}
            title={category.name}
          />
        </S.Fields>
        <Button title="Enviar" onPress={() => handleSubmit(handleRegister)} />
        <Modal visible={categoryModalOpen} statusBarTranslucent>
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
