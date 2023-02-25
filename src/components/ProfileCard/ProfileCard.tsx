import styles from './ProfileCard.module.css'

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
    <div className={styles.container}>
      <div className={styles.cardTop}>
        <div className={styles.topLeft}>
          <Link to={`/profiles/${profile.id}`}>{profile.name}</Link>
          <p>{profile.User?.admin ? 'Administrator' : 'Lab Member'}</p>
        </div>
        <img 
          src={profile.photo ? profile.photo : defaultProfile} 
          alt={`${profile.name}'s avatar`} 
        />
      </div>
      <div className={styles.cardBottom}>
        {user?.admin && 
          <div className={styles.buttonContainer}>
            <button onClick={() => props.handleUpdateAuthorization(profile)}>
                Unauthorize
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