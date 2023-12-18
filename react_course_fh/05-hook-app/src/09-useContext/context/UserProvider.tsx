import { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState()

  return (
    // <UserContext.Provider value={{ hola: 'Mundo', user }}>
    <UserContext.Provider value={{ hola: 'Mundo', user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
