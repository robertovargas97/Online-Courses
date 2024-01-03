import { characters, Character } from '../data/characters'

export const getCharacterById = (characterId: string) => {
  const character: Character | undefined = characters.find(
    (character) => character.id === characterId,
  )

  return character
}
