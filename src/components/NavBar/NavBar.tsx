// assets
import testTube from '../../assets/test-tube.png'

// styles
import styles from './NavBar.module.css'

// npm modules
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

// components 
import NavLinksList from './NavLinksList'

// types
import { User } from '../../types/models'

interface NavBarProps {
  width: number;
  user: User | null;
  isOpen: Boolean;
  handleLogout: () => void;
  handlePageChange: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout, isOpen } = props
  useEffect(() => {
    props.handlePageChange()
  }, [])

  return (
    <div className={styles.navContainer}>
      <Link to='/'>
        <img src={testTube} alt="test tube icon" className={styles.icon}/>
      </Link>
      <NavLinksList user={user} handleLogout={handleLogout} isOpen={isOpen}/>
    </div>
  )
}

export default NavBar
