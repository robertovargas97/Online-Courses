import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { CharacterCard } from '../components/CharacterCard'

import { getCharactersByName } from '../helpers'
import { jujutsu } from '../data/characters'
import { dragonBallLogoUrl, jujutsuLogoUrl } from '.'

export type OnSubmitFunctionType = (
  event: React.FormEvent<HTMLFormElement>,
) => void

export const Search = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const query = location.search ? location.search.split('=')[1] : ''

  const charactersByName = getCharactersByName(query)

  const showSearch = query?.length !== 0
  const showError = query?.length !== 0 && charactersByName.length === 0

  const { formState, onInputChange } = useForm({ searchText: query })
  const { searchText } = formState

  const handleOnSearch: OnSubmitFunctionType = (event) => {
    event.preventDefault()
    console.log('TEEEES')
    navigate(`?query=${searchText}`)
  }

  return (
    <>
      <h1> Search</h1>
      <hr />
      <div className="row">
        <div className="col-4">
          <form data-testid="search-form" onSubmit={handleOnSearch}>
            <input
              type="text"
              placeholder="Search a character"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={onInputChange}
              value={searchText}
            />
            <button className="btn btn-success mt-2">Search</button>
          </form>
        </div>

        <div className="col-8">
          {/* {query === '' ? (
            <div className="alert alert-info">Search a Hero</div>
          ) : (
            charactersByName.length === 0 && (
              <div className="alert alert-danger">
                No results for <b> {query}</b>
              </div>
            )
          )} */}

          <div
            data-testid="search-alert"
            className="alert alert-info animate__animated animate__fadeIn"
            style={{ display: showSearch ? 'none' : '' }}
          >
            Search a Hero
          </div>

          <div
            data-testid="error-alert"
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: !showError ? 'none' : '' }}
          >
            No results for <b> {query}</b>
          </div>

          {charactersByName.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              animeLogo={
                character.anime === jujutsu ? jujutsuLogoUrl : dragonBallLogoUrl
              }
            />
          ))}
        </div>
      </div>
    </>
  )
}
