import React, { ReactNode, useContext } from 'react'
import { AuthContext } from '../auth/context'
import { Navigate, useLocation } from 'react-router-dom'

type PrivateRoutePropType = {
  children: ReactNode
}

export const PrivateRoute: React.FC<PrivateRoutePropType> = ({ children }) => {
  const { logged } = useContext(AuthContext)
  const { pathname, search } = useLocation()

  const lastPath = pathname + search

  localStorage.setItem('lastPath', lastPath)

  return logged ? children : <Navigate to="/login" />
}
