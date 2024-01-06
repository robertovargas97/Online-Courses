import { Route, Routes } from 'react-router-dom'

import { CharactersRoutes } from '../characters/routes/CharactersRoutes'
import { Login } from '../auth/pages'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  const component = (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/*"
        element={
          <PrivateRoute>
            <CharactersRoutes />
          </PrivateRoute>
        }
      />
    </Routes>
  )

  return component
}
