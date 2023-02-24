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
    <main>
      <Link to='/profiles'>Go back</Link>
      {profile ? 
        <div>
          <section>
            <h1>{profile.name}</h1>
            <img 
              src={profile.photo ? profile.photo : defaultProfile} 
              alt={`${profile.name}'s avatar`} 
              style={{width: '120px'}}
            />
          </section>
          <section>
            <h2>Samples</h2>
            {profile.samples.length ? 
              <div>
                {profile.samples.map(sample => (
                  <SampleCard key={sample.id} sample={sample}/>
                ))}
              </div>
              :
              <p>This user has not yet added any samples</p>
            }
          </section>
        </div>
        :
        <h3>Loading...</h3>
      }
    </main>
  )
}

export default ProfileDetails