import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

  const onLogin = () => {
    navigate('/dragon-ball', {
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
