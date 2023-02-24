// types
import { Profile } from "../../types/models"

interface ProfileCardProps {
  profile: Profile
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  return (
    <h1>This is a profile card</h1>
  )
}

export default ProfileCard