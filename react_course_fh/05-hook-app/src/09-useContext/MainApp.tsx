import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import { NavBar } from './NavBar'

export const MainApp = () => {
  const mainComponent = (
    <>
      <NavBar />
      <div className="text-center mt-4">
        <h1> Main App</h1>

        <hr />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="about" element={<AboutPage />} />
          {/* <Route path="/*" element={<LoginPage />} /> */}

          <Route path="/*" element={<Navigate to="/about" />} />
        </Routes>
      </div>
    </>
  )

  return mainComponent
}
