import React from 'react'
import { Character } from '../data/characters'

import './card.styles.css'
import { Link } from 'react-router-dom'

type CharacterCardProps = {
  character: Character
  animeLogo: string
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  animeLogo,
}) => {
  const characterImgUrl = `/assets/${character.id}.jpg`
  const component = (
    <>
      <div className="character">
        <div className="main">
          <img
            className="characterImage"
            src={characterImgUrl}
            alt="character"
          />
          <h2 className="mt-2">{character.name} </h2>
          <p className="first-appereance">First Appereance:</p>{' '}
          {character.first_appearance}
          <Link to={`/character/${character.id}`}>More...</Link>
          <hr className="mt-3" />
          <div className="anime">
            <div className="wrapper">
              <img src={animeLogo} alt="anime" />
            </div>
            <p>
              <ins>Anime: </ins> {character.anime}
            </p>
          </div>
        </div>
      </div>
    </>
  )
  return component
}
