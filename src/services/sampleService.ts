// services 
import * as tokenService from './tokenService'

// types
import { Sample } from '../types/models'
import { SampleFormData } from '../types/forms'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/samples`

const create = async(sampleData: SampleFormData): Promise<Sample> => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sampleData)
    })
    return await res.json() as Sample
  } catch (error) {
    throw error
  }
}

export {
  create,
}