// assets
import testTube from '../../assets/test-tube.png'

// styles
import styles from './NavBar.module.css'

// npm modules
import { NavLink, Link } from 'react-router-dom'

// types
import { User } from '../../types/models'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props
  
  return (
    <nav className={styles.nav}>
      {user ?
        <>
          <div className={styles.navLeft}>
            <Link to='/'>
              <img className={styles.icon} src={testTube} alt="test tube icon" />
            </Link>
            <NavLink to="/samples">Samples</NavLink>
            <NavLink to="/samples/new">Add Sample</NavLink>
            <NavLink to="/profiles">Lab Members</NavLink>
          </div>
          <div className={styles.navRight}>
            {user.admin && <NavLink to="/requests">Requests</NavLink>}
            <NavLink to="" onClick={handleLogout}>Sign Out</NavLink>
          </div>
        </>
      :
        <>
          <div className={styles.navLeft}>
          <Link to='/'>
              <img className={styles.icon} src={testTube} alt="test tube icon" />
            </Link>
          </div>
          <div className={styles.navRight}>
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </div>
        </>
      }
    </nav>
  )
}

export default NavBar
