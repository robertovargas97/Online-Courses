import { renderHook } from '@testing-library/react'
import { useCounter } from '../../src/hooks'

describe('useCounter Cutom Hook Test Suit', () => {
  it('should return default values', () => {
    const { result } = renderHook(() => useCounter())
    const { counter, decrement, increment, reset } = result.current
    expect(counter).toBe(10)
    expect(decrement).toEqual(expect.any(Function))
    expect(increment).toEqual(expect.any(Function))
    expect(reset).toEqual(expect.any(Function))
  })

  it('should return counter == 100', () => {
    const { result } = renderHook(() => useCounter(100))
    const { counter } = result.current
    expect(counter).toBe(100)
  })
})
