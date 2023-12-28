export const dragonBall = 'Dragon Ball'
export const jujutsu = 'Jujutsu Kaisen'

export type Character = {
  id: string
  name: string
  anime: string
  power: string
  first_appearance: string
}

export const characters: Character[] = [
  {
    id: 'db-broly',
    name: 'Broly',
    anime: dragonBall,
    power: 'Eraser Cannon',
    first_appearance: 'Dragon Ball Z II',
  },
  {
    id: 'db-buu',
    name: 'Buu',
    anime: dragonBall,
    power: 'Calamity Blaster',
    first_appearance: 'Dragon Ball Z: Majin Buu Saga',
  },
  {
    id: 'db-cell',
    name: 'Cell',
    anime: dragonBall,
    power: 'Absortion',
    first_appearance: 'Dragon Ball Z: Cell Saga',
  },
  {
    id: 'db-frieza',
    name: 'Frieza',
    anime: dragonBall,
    power: 'Death Wave',
    first_appearance: 'Dragon Ball Z: Frieza Saga',
  },
  {
    id: 'db-gogeta',
    name: 'Gogeta',
    anime: dragonBall,
    power: 'Big Bang Attack',
    first_appearance: 'DBZ movie Fusion Reborn',
  },
  {
    id: 'db-gohan',
    name: 'Gohan',
    anime: dragonBall,
    power: 'Masenko',
    first_appearance: 'Dragon Ball Z chapter #196',
  },
  {
    id: 'jujutsu-gojo',
    name: 'Satoru Gojo',
    anime: jujutsu,
    power: 'Infinity ',
    first_appearance: 'Jujutsu Kaisen 0 #1',
  },
  {
    id: 'db-goku',
    name: 'Goku',
    anime: dragonBall,
    power: 'Kamehameha',
    first_appearance: 'The first Dragon Ball chapter',
  },
  {
    id: 'db-piccolo',
    name: 'Piccolo',
    anime: dragonBall,
    power: 'Masenko Beam',
    first_appearance: 'Dragon Ball chapter #161',
  },
  {
    id: 'db-trunks',
    name: 'Trunks',
    anime: dragonBall,
    power: 'Burning Attack',
    first_appearance: 'Dragon Ball chapter #331',
  },
  {
    id: 'db-vegeta',
    name: 'Vegeta',
    anime: dragonBall,
    power: 'Bing Bang Attack',
    first_appearance: 'Dragon Ball chapter #204',
  },
  {
    id: 'jujutsu-hanami',
    name: 'Hanami',
    anime: jujutsu,
    power: 'Roots',
    first_appearance: 'Jujutsu Kaisen chapter #5',
  },
  {
    id: 'jujutsu-itadori',
    name: 'Itadori',
    anime: jujutsu,
    power: 'Black Flash',
    first_appearance: 'Jujutsu Kaisen #1',
  },
  {
    id: 'jujutsu-jogo',
    name: 'Jogo',
    anime: jujutsu,
    power: 'Maximum: Meteor',
    first_appearance: 'Jujutsu Kaisen chapter #5',
  },
  {
    id: 'jujutsu-mahito',
    name: 'Mahito',
    anime: jujutsu,
    power: 'Idle Transfiguration',
    first_appearance: 'Jujutsu Kaisen chapter #9',
  },
  {
    id: 'jujutsu-megumi',
    name: 'Megumi',
    anime: jujutsu,
    power: 'Ten Shadows Technique',
    first_appearance: 'Jujutsu Kaisen #1',
  },
  {
    id: 'jujutsu-nanami',
    name: 'Nanami',
    anime: jujutsu,
    power: 'Overtime',
    first_appearance: 'Jujutsu Kaisen chapter #9',
  },
  {
    id: 'jujutsu-sukuna',
    name: 'Sukuna',
    anime: jujutsu,
    power: 'Dismantle',
    first_appearance: 'Jujutsu Kaisen #1',
  },
  {
    id: 'jujutsu-todo',
    name: 'Todo',
    anime: jujutsu,
    power: 'Boogie Woogie',
    first_appearance: 'Jujutsu Kaisen chapter #8',
  },
]
