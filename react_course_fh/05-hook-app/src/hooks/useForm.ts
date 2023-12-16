import { useState } from 'react'

type FormField = Record<string, string>

export const useForm = (formFields: FormField = {}) => {
  type OnChangeFunctionType = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void

  const [formState, setFormSate] = useState(formFields)

  const onInputChange: OnChangeFunctionType = ({ target }) => {
    const { name, value } = target
    setFormSate({
      ...formState,
      [name]: value,
    })
  }

  const onResetForm = () => {
    setFormSate(formFields)
  }

  return {
    formState,
    onInputChange,
    onResetForm,
  }
}
