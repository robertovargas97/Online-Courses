import React from 'react'

interface ShowIncrementPropTypes {
  increment: (range: number) => void
}

export const ShowIncrement: React.FC<ShowIncrementPropTypes> = React.memo(
  ({ increment }) => {
    const component = (
      <button className="btn btn-success" onClick={() => increment(5)}>
        Increment
      </button>
    )

    return component
  },
)
