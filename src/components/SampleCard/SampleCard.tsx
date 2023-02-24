// types
import { Sample } from "../../types/models"

interface SampleCardProps {
  sample: Sample;
}

const SampleCard = (props: SampleCardProps): JSX.Element => {
  return (
    <h1>This is a sample card</h1>
  )
}

export default SampleCard