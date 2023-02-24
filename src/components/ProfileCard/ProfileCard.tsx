import { Link } from 'react-router-dom'

// assets
import defaultProfile from '../../assets/defaultProfile.jpeg'

// types
import { Profile } from "../../types/models"

interface ProfileCardProps {
  profile: Profile
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { profile } = props  
  
  return (
    <div>
      <div>
        <Link to={`/profiles/${profile.id}`}>{profile.name}</Link>
        {profile.User?.admin && 
          <p>Admin</p>
        }
      </div>
      <img 
        src={profile.photo ? profile.photo : defaultProfile} 
        alt={`${profile.name}'s avatar`} 
        style={{width: '80px'}}/>
    </div>
  )
}

export default ProfileCard