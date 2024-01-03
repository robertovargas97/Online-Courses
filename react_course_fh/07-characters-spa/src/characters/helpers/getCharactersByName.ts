import { characters, Character } from '../data/characters'

export const getCharactersByName = (name: string) => {
  let charactersByName: Character[] = []
  name = name.toLowerCase().trim()

  if (name.length > 0) {
    charactersByName = characters.filter((character) =>
      character.name.toLowerCase().trim().includes(name),
    )
  }

  return charactersByName
}
