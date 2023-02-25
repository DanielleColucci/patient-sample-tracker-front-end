import styles from './ProfileDetails.module.css'

import { useParams } from "react-router"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

// assets
import defaultProfile from '../../assets/defaultProfile.jpeg'

// services
import * as profileService from '../../services/profileService'

// types
import { User, Profile } from "../../types/models"
import SampleCard from "../../components/SampleCard/SampleCard"


interface ProfileDetailsProps {
  user: User | null;
}

const ProfileDetails = (props: ProfileDetailsProps): JSX.Element => {
  const { id } = useParams()
  const [profile, setProfile] = useState<Profile | null>(null)
  const { user } = props

  useEffect((): void => {
    const fetchProfile = async (): Promise<void> => {
      try {
        if (id) {
          const profileData = await profileService.show(parseInt(id))
          setProfile(profileData)
        } else {
          return
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchProfile()
  }, [id])
  
  return (
    <main className={styles.main}>
      <div className={styles.backContainer}>
        <Link to='/profiles'>
          <button className={styles.backButton}>
            Go Back
          </button>
        </Link>
      </div>
      <div className={styles.mainContent}>
        {profile ? 
          <>
            <section className={styles.headerContent}>
              <h1 className={styles.name}>{profile.name}</h1>
              <img 
                src={profile.photo ? profile.photo : defaultProfile} 
                alt={`${profile.name}'s avatar`} 
              />
            </section>
            <section className={styles.sampleContent}>
              <h2>Samples</h2>
              {profile.samples.length ? 
                <div className={styles.samplesContainer}>
                  {profile.samples.map(sample => (
                    <SampleCard key={sample.id} sample={sample}/>
                  ))}
                </div>
                :
                <p>This user has not yet added any samples</p>
              }
            </section>
          </>
          :
          <h3>Loading...</h3>
        }
      </div>
    </main>
  )
}

export default ProfileDetails