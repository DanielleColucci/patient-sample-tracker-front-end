// components
import ProfileCard from '../../components/ProfileCard/ProfileCard';

// types
import { Profile } from '../../types/models'

interface ProfilesProps {
  profiles: Profile[];
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { profiles } = props
  const authorizedProfs = profiles.filter((p: Profile) => {
    return p.User?.authorized
  })
  if(!authorizedProfs.length) return <p>No profiles yet</p>

  return (
    <>
      <h1>Lab Members</h1>
      {authorizedProfs.map((profile: Profile) =>
        <ProfileCard key={profile.id} profile={profile}/>
      )}
    </>
  )
}

export default Profiles
