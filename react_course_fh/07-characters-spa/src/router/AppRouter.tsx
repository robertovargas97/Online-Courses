import { Navigate, Route, Routes } from 'react-router-dom'

import { DragonBall, JujutsuKaisen } from '../characters/pages'
import { Login } from '../auth/pages'
import { Navbar } from '../common'

export const AppRouter = () => {
  const component = (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dragon-ball" element={<DragonBall />} />
        <Route path="/jujutsu" element={<JujutsuKaisen />} />

        <Route path="/" element={<Navigate to="dragon-ball" />} />
      </Routes>
    </>
  )

  return component
}
