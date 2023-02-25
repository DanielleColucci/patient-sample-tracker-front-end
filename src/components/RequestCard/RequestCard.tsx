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
    <div>
      {profile.User?.authorized ?
        <>
          <p>{profile.name} is authorized</p>
          {user?.admin &&
            <>
              <button onClick={() => props.handleUpdateAuthorization(profile)}>
                unauthorize
              </button>
              <button onClick={() => props.handleUpdateAdmin(profile)}>
                {profile.User?.admin ? 'Remove Admin' : 'Grant Admin Status'}
              </button>
            </>
          }
        </>
        :
        <>
          <p>{profile.name} is unauthorized</p>
          {user?.admin && 
            <button onClick={() => props.handleUpdateAuthorization(profile)}>
              authorize
            </button>
          }
        </>
      }
    </div>
  )
}

export default RequestCard