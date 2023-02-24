import { useParams } from "react-router"
import { useState, useEffect } from 'react'

// services
import * as profileService from '../../services/profileService'

// types
import { User, Profile } from "../../types/models"


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
    <h1>Profile Details</h1>
  )
}

export default ProfileDetails