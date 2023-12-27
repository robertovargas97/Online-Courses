import { Link, NavLink } from 'react-router-dom'
import { NavBarArgs } from './types'

export const Navbar = () => {
  const handleActivePage = (args: NavBarArgs): string => {
    return `nav-link ${args.isActive ? 'active' : ''}`
  }

  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary rounded-1">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Asociaciones
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="navbar-nav">
            <NavLink
              className={(args) => {
                return handleActivePage(args)
              }}
              to="/dragon-ball"
            >
              Dragon Ball
            </NavLink>

            <NavLink
              className={(args) => {
                return handleActivePage(args)
              }}
              to="/jujutsu"
            >
              Jujustsu Kaisen
            </NavLink>

            <NavLink
              className={(args) => {
                return handleActivePage(args)
              }}
              to="/search"
            >
              Search
            </NavLink>
          </div>
        </div>
        <div className="navbar-collapsed-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-info"> Roberto</span>
            <button className="nav-item nav-link btn">Logout</button>
          </ul>
        </div>
      </div>
    </nav>
  )
}
