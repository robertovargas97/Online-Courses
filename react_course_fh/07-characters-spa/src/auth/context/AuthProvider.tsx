import React, { ReactNode, useMemo, useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducerActionType, authReducer } from './AuthReducer'
import { types } from '../types/types'

// Define the props for AuthProvider
type AuthProviderProps = {
  children: ReactNode
}

const init = () => {
  const user = localStorage.getItem('user') ?? ''
  return {
    logged: !!user,
    user: user,
  }
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, dispatchAuthState] = useReducer(authReducer, {}, init)

  const login = (name = '') => {
    const action: AuthReducerActionType = {
      payload: name,
      type: types.login,
    }
    localStorage.setItem('user', name)
    dispatchAuthState(action)
  }

  const logout = () => {
    const action: AuthReducerActionType = {
      type: types.logout,
    }
    localStorage.removeItem('user')
    dispatchAuthState(action)
  }

  // Use useMemo to memorize the context value
  const contextValue = useMemo(() => {
    return { ...authState, login, logout }
  }, [authState])

  const component = (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )

  return component
}
