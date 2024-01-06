import React, { ReactNode, useContext } from 'react'
import { AuthContext } from '../auth/context'
import { Navigate } from 'react-router-dom'

type PublicRoutePropType = {
  children: ReactNode
}

export const PublicRoute: React.FC<PublicRoutePropType> = ({ children }) => {
  const { logged } = useContext(AuthContext)

  return !logged ? children : <Navigate to="/dragon-ball" />
}
