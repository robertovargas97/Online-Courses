import React, { useMemo } from 'react'
import { getCharactersByAnime } from '../helpers'
import { CharacterCard } from './CharacterCard'

type CharactersListPropts = {
  anime: string
  logoUrl: string
}

export const CharactersList: React.FC<CharactersListPropts> = ({
  anime,
  logoUrl,
}) => {
  const characters = useMemo(() => getCharactersByAnime(anime), [anime])

  const component = (
    <div className="row rows-cols-1 row-cols-md-3 g-3 d-flex justify-content-center">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          animeLogo={logoUrl}
        />
      ))}
    </div>
  )

  return component
}
