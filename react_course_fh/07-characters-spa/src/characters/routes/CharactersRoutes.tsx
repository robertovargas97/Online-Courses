import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../common/components/Navbar'
import { DragonBall, Character, JujutsuKaisen, Search } from '../pages'

export const CharactersRoutes = () => {
  const component = (
    <>
      <Navbar />

      <div className="container mt-3">
        <Routes>
          <Route path="/dragon-ball" element={<DragonBall />} />
          <Route path="/jujutsu" element={<JujutsuKaisen />} />

          <Route path="/search" element={<Search />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/" element={<Navigate to="dragon-ball" />} />
        </Routes>
      </div>
    </>
  )

  return component
}
