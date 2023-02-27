// assets
import testTube from '../../assets/test-tube.png'

// styles
import styles from './NavBar.module.css'

// npm modules
import { NavLink, Link } from 'react-router-dom'

// components 
import NavLinksList from './NavLinksList'

// types
import { User } from '../../types/models'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props
  
  return (
    <div>
      <Link to='/'>
        <img src={testTube} alt="test tube icon" />
      </Link>
      <NavLinksList user={user} handleLogout={handleLogout} />
    </div>
  )
}

export default NavBar
