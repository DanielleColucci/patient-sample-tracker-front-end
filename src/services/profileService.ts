// services
import * as tokenService from './tokenService'

// types
import { Profile } from '../types/models'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/profiles`

async function getAllProfiles(): Promise<Profile[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Profile[]
  } catch (error) {
    throw error
  }
}

async function show (id: number): Promise<Profile> {
  try {
    const res = await fetch(`${BASE_URL}/${id}`,  {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Profile
  } catch (error) {
    throw error
  }
}

async function addPhoto(
  photoData: FormData, 
  profileId: number
): Promise<string> {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoData
    })
    return await res.json() as string
  } catch (error) {
    throw error
  }
}

async function updateAuthorization(profile: Profile): Promise<Profile> {
  try {
    const res = await fetch(`${BASE_URL}/${profile.userId}/authorize`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return await res.json() as Profile
  } catch (error) {
    throw error
  }
}

async function updateAdmin(profile: Profile): Promise<Profile> {
  try {
    const res = await fetch(`${BASE_URL}/${profile.userId}/admin`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return await res.json() as Profile
  } catch (error) {
    throw error
  }
}

export { 
  getAllProfiles, 
  addPhoto, 
  updateAuthorization, 
  updateAdmin, 
  show 
}
