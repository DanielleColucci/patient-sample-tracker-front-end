import { Link } from 'react-router-dom'

// assets
import defaultProfile from '../../assets/defaultProfile.jpeg'

// types
import { Profile, User } from "../../types/models"

interface ProfileCardProps {
  profile: Profile;
  user: User | null;
  handleUpdateAuthorization: (profile: Profile) => void;
  handleUpdateAdmin: (profile: Profile) => void;
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { profile, user } = props  
  
  return (
    <div>
      <div>
        <Link to={`/profiles/${profile.id}`}>{profile.name}</Link>
        {profile.User?.admin && 
          <p>Admin</p>
        }
      </div>
      <div>
        <img 
          src={profile.photo ? profile.photo : defaultProfile} 
          alt={`${profile.name}'s avatar`} 
          style={{width: '80px'}}/>
        {user?.admin && 
          <div>
            <button onClick={() => props.handleUpdateAuthorization(profile)}>
                unauthorize
              </button>
              <button onClick={() => props.handleUpdateAdmin(profile)}>
                {profile.User?.admin ? 'Remove Admin' : 'Grant Admin Status'}
              </button>
          </div>
        }
      </div>
    </div>
  )
}

export default ProfileCard