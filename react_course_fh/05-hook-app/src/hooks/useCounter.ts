import { useState } from 'react'

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue)

  const increment = (value: number = 1) => {
    if (value) {
      setCounter((current) => current + value)
    }
  }

  const decrement = (value: number = 1, minValue: number = 0) => {
    if (counter === minValue) return

    setCounter((current) => current - value)
  }

  const reset = () => {
    setCounter(initialValue)
  }

  return {
    counter,
    increment,
    decrement,
    reset,
    setCounter,
  }
}
