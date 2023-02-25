import styles from './SampleCard.module.css'

import { Link } from "react-router-dom";

// types
import { Sample } from "../../types/models"

interface SampleCardProps {
  sample: Sample;
}

const SampleCard = (props: SampleCardProps): JSX.Element => {
  const { sample } = props

  return (
    <div className={styles.container}>
      <h2 className={styles.number}>{sample.sampleNumber}</h2>
      <h4 className={styles.date}>{sample.date}</h4>
      <div className={styles.cardFooter}>
        <h4 className={styles.name}>{sample.Profile?.name}</h4>
        <Link to={`/samples/${sample.id}`}>
          <button className={styles.button}>
            Details
          </button>
        </Link>
      </div>
    </div>
  )
}

export default SampleCard