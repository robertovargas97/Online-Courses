import { useCounter, useFetch, useForm } from '../hooks'
import { PokemonCard, SearchPokemon } from '.'
import 'whatwg-fetch'

export const MultipleCustomHook = () => {
  const { counter, increment, decrement, setCounter } = useCounter(1)
  const url = `https://pokeapi.co/api/v2/pokemon/${counter}`
  const { data, isLoading, error } = useFetch(url)

  const name = data?.name || ''
  const defaultColorUrl = data?.sprites?.front_default || ''
  const shinyColorUrl = data?.sprites?.front_shiny || ''

  const { formState, onInputChange, onResetForm } = useForm({ pokemonId: '' })
  const { pokemonId } = formState

  const searchPokemon = () => {
    const inputValue = parseInt(pokemonId)
    if (inputValue && inputValue > 0) {
      onResetForm()
      setCounter(inputValue)
    }
  }

  const component = (
    <div className="text-center">
      <h1> Pokemon</h1>
      <hr />
      <br />

      {isLoading ? (
        <div className="alert alert-info text center">Loading Data...</div>
      ) : (
        <>
          <SearchPokemon
            pokemonId={pokemonId}
            onInputChange={onInputChange}
            searchPokemon={searchPokemon}
          />

          {error ? (
            <div className="alert alert-danger text center mt-2">{error}</div>
          ) : (
            <PokemonCard
              defaultColorUrl={defaultColorUrl}
              shinyColorUrl={shinyColorUrl}
              name={name}
              isLoading={isLoading}
              increment={increment}
              decrement={decrement}
            />
          )}
        </>
      )}
    </div>
  )

  return component
}
