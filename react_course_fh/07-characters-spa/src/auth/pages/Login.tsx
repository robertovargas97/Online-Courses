import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Login = () => {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') ?? '/dragon-ball'
    login('Roberto Vargas')
    navigate(lastPath, {
      replace: true,
    })
  }

  const component = (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-success" onClick={onLogin}>
        Login
      </button>
    </div>
  )
  return component
}
