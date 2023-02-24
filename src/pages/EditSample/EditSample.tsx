// types 
import { Sample } from "../../types/models"

const EditSample = (): JSX.Element => {

  return (
    <main>
      <h1>New Sample</h1>
      <form>
        <label htmlFor="MRN-input">MRN:</label>
        <input
          required
          type="number" 
          name="MRN"
          id="MRN-input"
          placeholder="MRN number"
          autoComplete="off"
        />
        <label htmlFor="sample-number-input">Sample Number:</label>
        <input
          required
          type="text" 
          name="sampleNumber"
          id="sample-number-input"
          placeholder="Sample number"
          autoComplete="off"
        />
        <label htmlFor="date-input">Date:</label>
        <input
          required
          type="text" 
          name="date"
          id="date-input"
          placeholder="YYYY-MM-DD"
          autoComplete="off"
        />
        <label htmlFor="cell-line-select">Cell Line Status:</label>
        <select 
          required
          name="cellLine" 
          id="cell-line-select"
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

export default EditSample