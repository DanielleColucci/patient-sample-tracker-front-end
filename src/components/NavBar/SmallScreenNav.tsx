import { Link } from "react-router-dom";

// components 


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
        {props.isOpen && <h1>Links list</h1>}
      </div>
    </div>
  )
}

export default SmallScreenNav