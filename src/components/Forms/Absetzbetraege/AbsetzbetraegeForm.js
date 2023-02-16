import React, { useContext } from 'react'
import BrutoNettoContext from '../../../context/BruttoNettoContext'

function AbsetzbetraegeForm() {
  const {formData, setFormData} = useContext(BrutoNettoContext)

  const handleFormChange = (e, change) => {
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setFormData(prevState => {
      return {...prevState, [change]: value}
    })
  }

  console.log(formData)


  return (
    <div>
      <form className="bf_wrapper">
        <label>
          Anzahl der Kinder
          <input 
            type="text" 
            value={formData.kinder}
            onChange={(e)=>handleFormChange(e, "kinder")}
          />
        </label>
        <hr />

        <label>
          Anzahl der Kinder bis 17 Jahre
          <input 
            type="text" 
            value={formData.kinder}
            onChange={(e)=>handleFormChange(e, "kinder")}
          />
        </label>
        
        <label>
          geteilt 50%
          <input
            type="checkbox" 
            checked={formData.kinderbis17}
            onChange={(e)=>handleFormChange(e, "kinderbis17")}/>
        </label>

        <label>
          Anzahl der Kinder ab 18 Jahre
          <input 
            type="text" 
            value={formData.kinderab18}
            onChange={(e)=>handleFormChange(e, "kinderab18")}
          />
        </label>
        
        <label>
          geteilt 50%
          <input
            type="checkbox" 
            checked={formData.kinderab18geteilt}
            onChange={(e)=>handleFormChange(e, "kinderab18geteilt")}/>
        </label>

      </form>
    </div>
  )
}

export default AbsetzbetraegeForm