import { Link, NavLink } from 'react-router-dom'
import { NavBarArgs } from './types'

export const Navbar = () => {
  const handleActivePage = (args: NavBarArgs): string => {
    return `nav-link ${args.isActive ? 'active' : ''}`
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
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
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className='nav-item nav-link text-info'> Roberto</span>
          <button className='nav-item nav-link btn'>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}
