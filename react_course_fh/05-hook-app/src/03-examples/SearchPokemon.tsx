import React from 'react'

interface SearchPokemonPropsType {
  pokemonId: string
  onInputChange: React.ChangeEventHandler<HTMLInputElement> | undefined
  searchPokemon: () => void
}

export const SearchPokemon: React.FC<SearchPokemonPropsType> = ({
  pokemonId,
  onInputChange,
  searchPokemon,
}): JSX.Element => {
  const component = (
    <div className="row ">
      <div className="col-sm-4 offset-sm-4">
        <label htmlFor="pokemonId">Search Pokemon</label>
        <input
          type="number"
          className="form-control"
          id="pokemonId"
          value={pokemonId}
          name="pokemonId"
          onChange={onInputChange}
        />

        <button className="btn btn-md btn-success mt-2" onClick={searchPokemon}>
          Search
        </button>
      </div>
    </div>
  )

  return component
}
