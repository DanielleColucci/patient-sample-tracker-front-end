// types
import { Sample } from "../../types/models"

interface SampleCardProps {
  sample: Sample;
}

const SampleCard = (props: SampleCardProps): JSX.Element => {
  const { sample } = props

  return (
    <div>
      <h2>{sample.sampleNumber}</h2>
      <h4>{sample.date}</h4>
      <h4>{sample.Profile?.name}</h4>
    </div>
  )
}

export default SampleCard