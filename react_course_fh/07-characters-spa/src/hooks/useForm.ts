import React, { useState } from 'react'

type FormField = Record<string, string>

export const useForm = (formFields: FormField = {}) => {
  type OnChangeFunctionType = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void

  const [formState, setformState] = useState(formFields)

  const onInputChange: OnChangeFunctionType = ({ target }) => {
    const { name, value } = target
    setformState({
      ...formState,
      [name]: value,
    })
  }

  const onResetForm = () => {
    setformState(formFields)
  }

  return {
    formState,
    onInputChange,
    onResetForm,
  }
}
