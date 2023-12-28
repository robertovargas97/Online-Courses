import { characters, jujutsu, dragonBall, Character } from '../data/characters'

export const getCharactersByAnime = (anime: string) => {
  const isValidAnime = [jujutsu, dragonBall].includes(anime)

  if (!isValidAnime) {
    throw new Error(`${anime} is not a valid option`)
  }

  const charactersByAnime: Character[] = characters.filter(
    (character) => character.anime === anime,
  )

  return charactersByAnime
}
