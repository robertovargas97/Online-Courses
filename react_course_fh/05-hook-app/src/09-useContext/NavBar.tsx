import { Link, NavLink } from 'react-router-dom'
import { NavBarArgs } from './useContext.types'

export const NavBar = () => {
  const handleActivePage = (args: NavBarArgs): string => {
    return `nav-link ${args.isActive ? 'active' : ''}`
  }

  const NavBarComponent = (
    <>
      <nav
        className="navbar navbar-expand-sm bg-body-tertiary rounded-3"
        data-bs-theme="light"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            useContext
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavLink
                className={(args) => {
                  return handleActivePage(args)
                }}
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className={(args) => {
                  return handleActivePage(args)
                }}
                to="/login"
              >
                Login
              </NavLink>

              <NavLink
                className={(args) => {
                  return handleActivePage(args)
                }}
                to="/about"
              >
                About
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )

  return NavBarComponent
}
