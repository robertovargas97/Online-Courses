import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const HomePage = () => {
  const { user } = useContext(UserContext)

  const homeComponent = (
    <div className="text-center">
      <h1> Home Page</h1>
      <hr />
      <small data-testid="user-context"> {user?.name}</small>
    </div>
  )

  return homeComponent
}
