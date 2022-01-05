import React, { useState } from 'react'
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'

import { useForm } from 'react-hook-form'
import {
  useNavigation,
  NavigationProp,
  ParamListBase
} from '@react-navigation/native'

import { Button } from '../../components/Form/Button'
import { CategorySelectButton } from '../../components/Form/CategorySelectButton'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'

import { CategorySelect } from '../CategorySelect'

import * as S from './styles'
import { InputForm } from '../../components/Form/InputForm'
import { useAuth } from '../../hooks/auth'

interface FormData {
  name: string
  amount: string
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  amount: Yup.number()
    .typeError('informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('O valor é obrigatório')
})

export function Register() {
  const [transactionType, setTransactionType] = useState('')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)

  const { user } = useAuth()

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  })

  const { navigate }: NavigationProp<ParamListBase> = useNavigation()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  function handleTransactionsTypeSelect(type: 'positive' | 'negative') {
    setTransactionType(type)
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false)
  }

  async function handleRegister(form: FormData) {
    if (!transactionType) return Alert.alert('Selecione o tipo da transação')

    if (category.key === 'category')
      return Alert.alert('Selecione uma categoria')

    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      type: transactionType,
      category: category.key,
      date: new Date()
    }

    try {
      const dataKey = `@gofinances:transactions_user:${user.id}`
      const data = await AsyncStorage.getItem(dataKey)
      const currentData = data ? JSON.parse(data) : []

      const dataFormatted = [...currentData, newTransaction]

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted))

      reset()
      navigate('Listagem')
      setTransactionType('')
      setCategory({ key: 'category', name: 'Categoria' })
    } catch (error) {
      console.log(error)
      Alert.alert('Erro ao cadastrar transação')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.Header>
          <S.Title> Cadastro </S.Title>
        </S.Header>
        <S.Form>
          <S.Fields>
            <InputForm
              control={control}
              name="name"
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              control={control}
              name="amount"
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />

            <S.TransactionsTypes>
              <TransactionTypeButton
                type="up"
                title="Entrada"
                onPress={() => handleTransactionsTypeSelect('positive')}
                isActive={transactionType === 'positive'}
              />
              <TransactionTypeButton
                type="down"
                title="Saída"
                onPress={() => handleTransactionsTypeSelect('negative')}
                isActive={transactionType === 'negative'}
              />
            </S.TransactionsTypes>

            <CategorySelectButton
              onPress={handleOpenSelectCategoryModal}
              title={category.name}
            />
          </S.Fields>
          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />

          <Modal visible={categoryModalOpen} statusBarTranslucent>
            <CategorySelect
              category={category}
              setCategory={setCategory}
              closeSelectCategory={handleCloseSelectCategoryModal}
            />
          </Modal>
        </S.Form>
      </S.Container>
    </TouchableWithoutFeedback>
  )
}
