import styles from './NavBar.module.css'
import { NavLink } from "react-router-dom"

// types
import { User } from '../../types/models'

interface NavLinksListProps {
  user: User | null;
  handleLogout: () => void;
}

const NavLinksList = (props: NavLinksListProps): JSX.Element => {
  const { user } = props
  return (
    <nav className={styles.nav}>
      {user ?
        <>
          <div className={styles.navLeft}>
            {user.authorized &&
              <>
                <NavLink to="/samples">Samples</NavLink>
                <NavLink to="/samples/new">Add Sample</NavLink>
                <NavLink to="/profiles">Lab Members</NavLink>
              </>
            }
          </div>
          <div className={styles.navRight}>
            {user.admin && <NavLink to="/requests">Requests</NavLink>}
            <NavLink to="" onClick={props.handleLogout}>Sign Out</NavLink>
          </div>
        </>
      :
        <>
          <div className={styles.navLeft}>
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

export default NavLinksList