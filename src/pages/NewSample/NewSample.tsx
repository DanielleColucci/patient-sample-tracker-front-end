import { useState } from "react"
import { SampleFormData } from "../../types/forms"

interface NewSampleProps {
  handleAddSample: (sampleData: SampleFormData) => void;
}

const NewSample = (props: NewSampleProps): JSX.Element => {
  const [form, setForm] = useState({
    MRN: '',
    sampleNumber: '',
    date: '',
    cellLine: 'NA',
    PDXModel: 'NA',
  })

  const handleChange = (evt: React.FormEvent) => {
    setForm({...form, [evt.currentTarget.name]: evt.currentTarget.value})
  }

  return (
    <main>
      <h1>New Sample</h1>
      <form>
        <label htmlFor="MRN-input">MRN:</label>
        <input
          required
          type="text" 
          name="MRN"
          id="MRN-input"
          value={form.MRN}
          placeholder="MRN number"
          onChange={handleChange}
        />
        <label htmlFor="sample-number-input">Sample Number:</label>
        <input
          required
          type="text" 
          name="sampleNumber"
          id="sample-number-input"
          value={form.sampleNumber}
          placeholder="Sample number"
          onChange={handleChange}
        />
        <label htmlFor="date-input">Date:</label>
        <input
          required
          type="text" 
          name="date"
          id="date-input"
          value={form.date}
          placeholder="YYYY-MM-DD"
          onChange={handleChange}
        />
        <label htmlFor="cell-line-select">Cell Line Status:</label>
        <select 
          required
          name="cellLine" 
          id="cell-line-select"
          value={form.cellLine}
          onChange={handleChange}
        >
          <option value="NA">NA</option>
          <option value="In Process">In Process</option>
          <option value="Finished">Finished</option>
          <option value="Failed">Failed</option>
        </select>
        <label htmlFor="PDX-model-select">PDX Model Status:</label>
        <select 
          required
          name="PDXModel" 
          id="PDX-model-select"
          value={form.PDXModel}
          onChange={handleChange}
        >
          <option value="NA">NA</option>
          <option value="In Process">In Process</option>
          <option value="Finished">Finished</option>
          <option value="Failed">Failed</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default NewSample