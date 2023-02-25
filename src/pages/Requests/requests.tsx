// components 
import RequestCard from "../../components/RequestCard/RequestCard";

// types
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
      <div>
        <h1>Requests</h1>
        {unauthorizedProfs.length ?
          <div>
          {unauthorizedProfs.map((p: Profile) => (
            <RequestCard 
              key={p.id}
              profile={p}
              handleUpdateAuthorization={props.handleUpdateAuthorization}
              handleUpdateAdmin={props.handleUpdateAdmin}
              user={user}
            />
          ))}
          </div>
          :
          <p>No pending requests</p>
        }
      </div>
      <div>
        <h1>Lab Members</h1>
        {authorizedProfs.length ? 
        <div>
          {authorizedProfs.map((p: Profile) => (
            <RequestCard 
              key={p.id}
              profile={p}
              handleUpdateAuthorization={props.handleUpdateAuthorization}
              handleUpdateAdmin={props.handleUpdateAdmin}
              user={user}
            />
          ))}
          </div>
          :
          <p>No authorized users</p>
        }
      </div>
    </main>
  )
}

export default Requests