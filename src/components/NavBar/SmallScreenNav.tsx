import { Link } from "react-router-dom";

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
  return (
    <div>
      <Link to='/'>
        <img src={testTube} alt="test tube icon" />
      </Link>
      <div>
        <button onClick={props.handleOpen}>
          {props.isOpen ? 'x' : '≡'}
        </button>
      </div>
      <div>
        {props.isOpen && <NavLinksList user={props.user} handleLogout={props.handleLogout}/>}
      </div>
    </div>
  )
}

export default SmallScreenNav