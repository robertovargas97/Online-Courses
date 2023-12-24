import React, { useLayoutEffect, useRef, useState } from 'react'

interface PokemonCardPropsType {
  defaultColorUrl: string
  shinyColorUrl: string
  name: string
  isLoading: boolean
  increment: (value?: number) => void
  decrement: (value?: number, minValue?: number) => void
}

export const PokemonCard: React.FC<PokemonCardPropsType> = ({
  defaultColorUrl,
  shinyColorUrl,
  name,
  isLoading,
  increment,
  decrement,
}) => {
  const pokemonNameRef = useRef<HTMLHeadingElement>(null)
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    let width = 0
    let height = 0
    const pokemonRef = pokemonNameRef.current
    const rect = pokemonRef ? pokemonRef.getBoundingClientRect() : null
    if (rect) {
      ;({ width, height } = rect)
    }
    setBoxSize({
      width: parseFloat(width.toFixed(3)),
      height: parseFloat(height.toFixed(3)),
    })
  }, [name])

  const [displayShiny, setDisplayShiny] = useState(true)

  const [cardPictureUrl, setCardPictureUrl] = useState(defaultColorUrl)

  const showShiny = () => {
    setCardPictureUrl(shinyColorUrl)
    setDisplayShiny(false)
  }

  const showNormal = () => {
    setCardPictureUrl(defaultColorUrl)
    setDisplayShiny(true)
  }

  const component = (
    <>
      <div className="card col-sm-2 offset-sm-5 mt-4">
        <img data-testid="gif" src={cardPictureUrl} />
        <h3
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
          data-testid="pokemon-name"
          ref={pokemonNameRef}
        >
          {name}
        </h3>
      </div>
      <br />

      <button
        className="btn btn-md btn-success"
        onClick={() => decrement(1, 1)}
        disabled={isLoading}
      >
        {'< '}
        Previous
      </button>

      {!!shinyColorUrl && displayShiny && (
        <button className="btn btn-md  btn-secondary" onClick={showShiny}>
          Show Shiny
        </button>
      )}

      {!displayShiny && (
        <button className="btn btn-md  btn-secondary" onClick={showNormal}>
          Show Normal
        </button>
      )}

      <button
        className="btn btn-md btn-success"
        onClick={() => increment()}
        disabled={isLoading}
        aria-label="nextButton"
      >
        Next{' >'}
      </button>

      <br />
      <div className="mt-3">
        <code>{JSON.stringify(boxSize)}</code>
      </div>
    </>
  )
  return component
}
