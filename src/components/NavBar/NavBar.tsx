// npm modules
import { NavLink } from 'react-router-dom'

// types
import { User } from '../../types/models'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props
  
  return (
    <nav>
      {user ?
        <>
          <NavLink to="/samples">Samples</NavLink>
          <NavLink to="/samples">Add Sample</NavLink>
          <NavLink to="/profiles">Profiles</NavLink>
          {user.admin && <NavLink to="/requests">Requests</NavLink>}
          <NavLink to="/change-password">Change Password</NavLink>
          <NavLink to="" onClick={handleLogout}>Sign Out</NavLink>
        </>
      :
        <>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </>
      }
    </nav>
  )
}

export default NavBar
