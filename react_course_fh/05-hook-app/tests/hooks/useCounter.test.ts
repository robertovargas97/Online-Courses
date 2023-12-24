import { renderHook } from '@testing-library/react'
import { useCounter } from '../../src/hooks'
import { act } from 'react-dom/test-utils'

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

  it('should increment the counter', () => {
    const { result } = renderHook(() => useCounter())
    const { increment } = result.current

    act(() => {
      increment()
      increment(2)
    })

    expect(result.current.counter).toBe(13)
  })

  it('should decrement the counter', () => {
    const { result } = renderHook(() => useCounter())
    const { decrement } = result.current

    act(() => {
      decrement()
      decrement(2)
    })

    expect(result.current.counter).toBe(7)
  })

  it('should reset the counter', () => {
    const { result } = renderHook(() => useCounter())
    const { decrement, increment, reset } = result.current

    act(() => {
      increment()
      decrement(2)
      reset()
    })

    expect(result.current.counter).toBe(10) 
  })
})
