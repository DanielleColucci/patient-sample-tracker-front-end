import styles from './SampleDetails.module.css'

import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

// services
import * as sampleService from '../../services/sampleService'

// types 
import { Sample, User } from "../../types/models"

interface SampleDetailsProps {
  user: User | null;
  handleDeleteSample: (id: number) => void;
}

const SampleDetails = (props: SampleDetailsProps): JSX.Element => {
  const { id } = useParams()
  const [sample, setSample] = useState<Sample | null>(null)
  const { user } = props

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
    <main className={styles.main}>
      <Link to='/samples'>
        <button className={styles.backButton}>Go Back</button>
      </Link>
      <div className={styles.mainContent}>
      {sample ? 
        <section className={styles.container}> 
          <h1>{sample.sampleNumber}</h1>
          <div className={styles.detailsContainer}>
            <div className={styles.detailSection}>
              <div>Owner:</div>
              <div>{sample.Profile?.name}</div>
            </div>
            <div className={styles.detailSection}>
              <div>MRN:</div>
              <div>{sample.MRN}</div>
            </div>
            <div className={styles.detailSection}>
              <div>Date:</div>
              <div>{sample.date}</div>
            </div>
            <div className={styles.detailSection}>
              <div>Cell Line Status:</div>
              <div>{sample.cellLine}</div>
            </div>
            <div className={styles.detailSection}>
              <div>PDX Model Status:</div>
              <div>{sample.PDXModel}</div>
            </div>
          </div>
          {(user?.admin || sample.Profile?.userId === user?.id) && 
            <div className={styles.buttonsContainer}>
              <Link to={`/samples/${id}/edit`} state={sample}>
                <button className={styles.editButton}>Edit</button>
              </Link>
              <button 
                className={styles.deleteButton}
                onClick={() => props.handleDeleteSample(sample.id)}
              >
                DELETE
              </button>
            </div> 
          }
        </section>
        :
        <h3>Loading...</h3>
      }
      </div>
    </main>
  )
}

export default SampleDetails