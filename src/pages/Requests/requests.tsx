import { Profile } from "../../types/models"

interface RequestsProps {
  unauthorizedProfs: Profile[];
  authorizedProfs: Profile[];
  handleUpdateAuthorization: (profile: Profile) => void;
}

const Requests = (props: RequestsProps): JSX.Element => {
  const { unauthorizedProfs, authorizedProfs } = props

  return (
    <main>
      <h1>Requests</h1>
      {unauthorizedProfs.map((p: Profile) => (
        <>
          <p>{p.name} is unauthorized</p>
          <button onClick={() => props.handleUpdateAuthorization(p)}>
            authorize
          </button>
        </>
      ))}
      <h1>Lab Members</h1>
      {authorizedProfs.map((p: Profile) => (
        <>
          <p>{p.name} is authorized</p>
          <button onClick={() => props.handleUpdateAuthorization(p)}>
            unauthorize
          </button>
        </>
      ))}
    </main>
  )
}

export default Requests