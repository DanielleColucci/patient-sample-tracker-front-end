import { Link } from "react-router-dom";

// styles
import styles from './NavBar.module.css'

// components 
import NavLinksList from "./NavLinksList";

// assets
import testTube from '../../assets/test-tube.png'

// types
import { User } from "../../types/models"

interface SmallScreenNavProps {
  user: User | null;
  isOpen: Boolean;
  handleLogout: () => void;
  handleOpen: () => void;
}

const SmallScreenNav = (props: SmallScreenNavProps): JSX.Element=> {
  const { user, handleLogout, isOpen } = props
  return (
    <div className={styles.navContainer}>
      <Link to='/'>
        <img src={testTube} alt="test tube icon" className={styles.icon}/>
      </Link>
      <div>
        <button 
          onClick={props.handleOpen}
          className={styles.dropdownButton}
        >
          {props.isOpen ? 'x' : '≡'}
        </button>
      </div>
      <div className={styles.dropdown}>
        {props.isOpen && 
          <NavLinksList 
            user={user} 
            isOpen={isOpen}
            handleLogout={handleLogout}
          />
        }
      </div>
    </div>
  )
}

export default SmallScreenNav