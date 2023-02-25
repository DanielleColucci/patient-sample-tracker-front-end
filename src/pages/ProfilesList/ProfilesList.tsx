import styles from './ProfilesList.module.css'

// components
import ProfileCard from '../../components/ProfileCard/ProfileCard';

// types
import { Profile, User } from '../../types/models'

interface ProfilesProps {
  profiles: Profile[];
  user: User | null;
  handleUpdateAuthorization: (profile: Profile) => void;
  handleUpdateAdmin: (profile: Profile) => void;
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { profiles } = props
  const authorizedProfs = profiles.filter((p: Profile) => {
    return p.User?.authorized
  })

  if(!authorizedProfs.length) return <p>No profiles yet</p>

  return (
    <main className={styles.main}>
      <h1>Lab Members</h1>
      <div className={styles.container}>
        {authorizedProfs.map((profile: Profile) =>
          <ProfileCard 
            key={profile.id} 
            profile={profile} 
            user={props.user}
            handleUpdateAuthorization={props.handleUpdateAuthorization}
            handleUpdateAdmin={props.handleUpdateAdmin}
          />
        )}
      </div>
    </main>
  )
}

export default Profiles
