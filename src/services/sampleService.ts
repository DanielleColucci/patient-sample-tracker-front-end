// services 
import * as tokenService from './tokenService'

// types
import { Sample } from '../types/models'
import { SampleFormData } from '../types/forms'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/samples`

const index = async (): Promise<Sample[]> => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Sample[]
  } catch (error) {
    throw error
  }
}

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

const update = async(sampleData: SampleFormData): Promise<Sample> => {
  try {
    const res = await fetch(`${BASE_URL}/${sampleData.id}`, {
      method: 'PUT',
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

const show = async (id: number): Promise<Sample> => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return await res.json() as Sample
  } catch (error) {
    throw error
  }
}

const deleteSample = async (id: number): Promise<Sample> => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE', 
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return await res.json() as Sample
  } catch (error) {
    throw error
  }
}

export {
  create,
  update,
  index,
  show,
  deleteSample as delete,
}