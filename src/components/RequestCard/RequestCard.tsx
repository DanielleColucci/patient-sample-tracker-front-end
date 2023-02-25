import styles from './RequestCard.module.css'

import { Link } from 'react-router-dom';

// assets
import defaultProfile from '../../assets/defaultProfile.jpeg'

// types
import { Profile, User } from "../../types/models"

interface RequestCardProps {
  profile: Profile;
  handleUpdateAuthorization: (profile: Profile) => void;
  handleUpdateAdmin: (profile: Profile) => void;
  user: User | null;
}

const RequestCard = (props: RequestCardProps): JSX.Element => {
  const { profile, user } = props
  return (
    <div className={styles.container}>
      {profile.User?.authorized ?
        <>
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
          {user?.admin &&
            <div className={styles.cardButton}>
              <div className={styles.buttonContainer}>
                <button onClick={() => props.handleUpdateAuthorization(profile)}>
                  Unauthorize
                </button>
                <button onClick={() => props.handleUpdateAdmin(profile)}>
                  {profile.User?.admin ? 'Remove Admin' : 'Grant Admin Status'}
                </button>
              </div>
            </div>
          }
        </>
        :
        <>
          <div className={styles.cardTop}>
            <div className={styles.topLeft}>
              <p className={styles.name}>{profile.name}</p>  
            </div>
            <img 
              src={profile.photo ? profile.photo : defaultProfile} 
              alt={`${profile.name}'s avatar`} 
            />
          </div>
          {user?.admin && 
            <div className={styles.cardButton}>
              <div className={styles.buttonContainer}>  
                <button onClick={() => props.handleUpdateAuthorization(profile)}>
                  Authorize
                </button>
              </div>
            </div>
          }
        </>
      }
    </div>
  )
}

export default RequestCard