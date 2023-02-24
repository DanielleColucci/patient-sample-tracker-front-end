import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

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
    <main>
      {sample ? 
        <section> 
          <h1>{sample.sampleNumber}</h1>
          <div>
            <div>
              <div>Owner:</div>
              <div>{sample.Profile?.name}</div>
            </div>
            <div>
              <div>MRN:</div>
              <div>{sample.MRN}</div>
            </div>
            <div>
              <div>Date:</div>
              <div>{sample.date}</div>
            </div>
            <div>
              <div>Cell Line Status:</div>
              <div>{sample.cellLine}</div>
            </div>
            <div>
              <div>PDX Model Status:</div>
              <div>{sample.PDXModel}</div>
            </div>
          </div>
          {}
        </section>
        :
        <h3>Loading...</h3>
      }
      <Link to='/samples'>Go Back</Link>
    </main>
  )
}

export default SampleDetails