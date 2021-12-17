import React from 'react'
import { Control, Controller } from 'react-hook-form'
import { TextInputProps } from 'react-native'
import { CategoryName } from '../../TransactionCard/styles'
import { Input } from '../Input'
import * as S from './styles'

interface Props extends TextInputProps {
  control: Control
  name: string
}

export function InputForm({ control, name, ...rest }: Props) {
  return (
    <S.Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChange={onChange} value={value} {...rest} />
        )}
        name={CategoryName}
      />
    </S.Container>
  )const data = {
    name,
    amount,
    TransactionType,
    category: category.key
  }
}
