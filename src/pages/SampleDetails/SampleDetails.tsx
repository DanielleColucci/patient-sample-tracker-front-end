import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

// services
import * as sampleService from '../../services/sampleService'

// types 
import { Sample } from "../../types/models"

const SampleDetails = (): JSX.Element => {
  const { id } = useParams()
  const [sample, setSample] = useState<Sample | null>(null)

  useEffect((): void => {
    const fetchSample = async (): Promise<void> => {
      try {
        if (id) {
          const sampleData = await sampleService.show(parseInt(id))
          setSample(sampleData)
        } else {
          return
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchSample()
  }, [id])

  return (
    <h1>sample details page!</h1>
  )
}

export default SampleDetails