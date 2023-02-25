// styles
import styles from './SamplesList.module.css'

// types 
import { Sample } from '../../types/models';

// components
import SampleCard from '../../components/SampleCard/SampleCard';

interface SamplesListProps {
  samples: Sample[];
}

const SamplesList = (props: SamplesListProps): JSX.Element => {
  return (
    <main className={styles.main}>
      <h1>Samples</h1>
      {props.samples.length ? 
        <div className={styles.container}>
          {props.samples.map(s => (
            <SampleCard key={s.id} sample={s}/>
          ))}
        </div>
        :
        <p>No samples added</p>
      }
    </main>
  )
}

export default SamplesList
