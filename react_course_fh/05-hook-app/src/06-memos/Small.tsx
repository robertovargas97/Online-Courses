import React from 'react'

interface SmallPropTypes {
  counter: number
}

export const Small: React.FC<SmallPropTypes> = React.memo(({ counter }) => {
  console.log('Dibujando de nuevo :(')
  return <small> {counter}</small>
})
