// stylesheets
import styles from './Landing.module.css'

// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  return (
    <main className={styles.container}>
      <h1>Welcome</h1>
      {!user && 
        <>
          <h2>Please log in to continue.</h2>
          <h3>Don't have an account? <a href="/signup">Sign up</a> to request access.
          </h3>
        </>
      }
    </main>
  )
}

export default Landing
