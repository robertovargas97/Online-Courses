import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getCharacterById } from '../helpers'
import { useMemo } from 'react'

export const Character = () => {
  const { id } = useParams()
  const character = useMemo(() => getCharacterById(id!), [id])
  const navigate = useNavigate()

  const onGoBack = () => {
    navigate(-1)
  }

  if (!character) {
    return <Navigate to="/dragon-ball" />
  }

  const characterImgUrl = `/assets/${id}.jpg`

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img
          src={characterImgUrl}
          alt={character.name}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3> {character.name}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b> Anime: </b> {character.anime}
          </li>
          <li className="list-group-item">
            <b> First Appereance: </b> {character.first_appearance}
          </li>
          <li className="list-group-item">
            <b>Power: </b> {character.power}
          </li>
        </ul>
        <button className="btn btn-success mt-4" onClick={onGoBack}>
          Go back
        </button>
      </div>
    </div>
  )
}
