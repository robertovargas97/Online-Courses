import { useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small'

export const Memorize = () => {
  const { counter, increment } = useCounter(1)

  const [show, setShow] = useState(true)

  const component = (
    <div className="text-center">
      <h1>
        Counter : <Small counter={counter} />
      </h1>

      <button onClick={() => increment()} className="btn btn-success">
        + 1
      </button>

      <button
        className="btn btn-outline-success"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  )

  return component
}
