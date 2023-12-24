import { act, renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks'

describe('useForm Hook Test Suit', () => {
  const initialForm = { name: 'Roberto', email: 'roberto@mail.com' }

  test('should return the default info', () => {
    const { result } = renderHook(() => useForm(initialForm))
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    })
  })

  test('should chanhe the value of the name', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const { onInputChange } = result.current
    const expectedName = 'Change'

    const mockEvent = {
      target: { name: 'name', value: expectedName },
    }

    act(() => {
      onInputChange(mockEvent as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.formState.name).toBe(expectedName)
  })

  test('should chanhe the value of the name', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const { onInputChange, onResetForm } = result.current
    const expectedName = 'Change'

    const mockEvent = {
      target: { name: 'name', value: expectedName },
    }

    act(() => {
      onInputChange(mockEvent as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.formState.name).toBe(expectedName)

    act(() => {
      onResetForm()
    })

    expect(result.current.formState.name).toBe(initialForm.name)
  })
})
