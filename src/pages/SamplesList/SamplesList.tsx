// types 
import { Sample } from '../../types/models';

// components
import SampleCard from '../../components/SampleCard/SampleCard';

interface SamplesListProps {
  samples: Sample[];
}

const SamplesList = (props: SamplesListProps): JSX.Element => {
  return (
    <main>
      <h1>Samples</h1>
      {props.samples.map(s => (
        <SampleCard key={s.id} sample={s}/>
      ))}
    </main>
  )
}

export default SamplesList
