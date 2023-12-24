import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext)

  const loginComponent = (
    <>
      <div className="text-center">
        <h1> Login Page</h1>
      </div>
      <hr />

      <pre data-testid="pre-tag">{JSON.stringify(user, null, 3)}</pre>

      <button
        className="btn btn-success mt-2"
        onClick={() =>
          setUser({
            id: 123,
            name: 'Roberto',
            email: 'robert.vargs@mail.com',
          })
        }
      >
        Set User
      </button>
    </>
  )

  return loginComponent
}
