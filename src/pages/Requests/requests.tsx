import { Profile } from "../../types/models"

interface RequestsProps {
  unauthorizedProfs: Profile[];
  authorizedProfs: Profile[];
}

const Requests = (props: RequestsProps): JSX.Element => {
  const { unauthorizedProfs, authorizedProfs } = props
  return (
    <main>
      <h1>Requests</h1>
      {unauthorizedProfs.map((p: Profile) => (
        <p>{p.name} is unauthorized</p>
      ))}
      <h1>Lab Members</h1>
      {authorizedProfs.map((p: Profile) => (
        <p>{p.name} is authorized</p>
      ))}
    </main>
  )
}

export default Requests