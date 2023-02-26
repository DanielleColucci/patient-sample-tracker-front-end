import { Link } from 'react-router-dom';

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
      <h1 className={styles.welcome}>Welcome</h1>
      {user ?
        user.authorized ? 
          <div className={styles.buttonContainer}>
            <Link to='/samples'>View Samples</Link>
            <Link to='/samples/new'>Add A Sample</Link>
            <Link to='/profiles'>View Lab Members</Link>
          </div>
          : 
          <h2>You need authorization access to continue.</h2>
        :
        <>
          <h2>Please <a className={styles.link} href="/login">log in</a> to continue.</h2>
          <h3>Don't have an account? <a className={styles.link} href="/signup">Sign up</a> to request access.
          </h3>
        </>
      }
    </main>
  )
}

export default Landing
