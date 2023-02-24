import { Profile, User } from "../../types/models"

interface RequestsProps {
  profiles: Profile[];
  handleUpdateAuthorization: (profile: Profile) => void;
  handleUpdateAdmin: (profile: Profile) => void;
  user: User | null;
}

const Requests = (props: RequestsProps): JSX.Element => {
  const { profiles, user } = props
  const unauthorizedProfs = profiles.filter((p: Profile) => {
    return !p.User?.authorized
  })
  const authorizedProfs = profiles.filter((p: Profile) => {
    return p.User?.authorized
  })

  return (
    <main>
      <h1>Requests</h1>
      {unauthorizedProfs.map((p: Profile) => (
        <>
          <p>{p.name} is unauthorized</p>
          {user?.admin && 
            <button onClick={() => props.handleUpdateAuthorization(p)}>
              authorize
            </button>
          }
        </>
      ))}
      <h1>Lab Members</h1>
      {authorizedProfs.map((p: Profile) => (
        <>
          <p>{p.name} is authorized</p>
          {user?.admin &&
            <>
              <button onClick={() => props.handleUpdateAuthorization(p)}>
                unauthorize
              </button>
              <button onClick={() => props.handleUpdateAdmin(p)}>
                {p.User?.admin ? 'Remove Admin' : 'Grant Admin Status'}
              </button>
            </>
          }
        </>
      ))}
    </main>
  )
}

export default Requests