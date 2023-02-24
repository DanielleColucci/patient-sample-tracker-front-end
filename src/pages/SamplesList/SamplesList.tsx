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
      <h1>This is a sample list</h1>
    </main>
  )
}

export default SamplesList
