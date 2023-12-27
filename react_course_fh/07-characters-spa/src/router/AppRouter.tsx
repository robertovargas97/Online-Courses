import { Route, Routes } from 'react-router-dom'

import { CharactersRoutes } from '../characters/routes/CharactersRoutes'
import { Login } from '../auth/pages'

export const AppRouter = () => {
  const component = (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<CharactersRoutes />} />
    </Routes>
  )

  return component
}
