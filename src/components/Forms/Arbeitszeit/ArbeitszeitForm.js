import React, { useContext } from 'react'
import BrutoNettoContext from '../../../context/BruttoNettoContext'

function ArbeitszeitForm() {
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
          Wochenstunden
          <input 
            type="text" 
            value={formData.wochenstunden}
            onChange={(e)=>handleFormChange(e, "wochenstunden")}
          />
        </label>
        <hr />

        <label>
          Arbeitstage / Monat (nur Teilzeit)
          <input 
            type="text" 
            value={formData.arbeitstage}
            onChange={(e)=>handleFormChange(e, "arbeitstage")}
          />
        </label>
        <hr />

        <label>
          Urlaub
          <input 
            type="text" 
            value={formData.urlaub}
            onChange={(e)=>handleFormChange(e, "urlaub")}
          />
        </label>
        <hr />

        <label>
          sonstige Abwesenheit
          <input 
            type="text" 
            value={formData.sonstigeAbwesenheit}
            onChange={(e)=>handleFormChange(e, "sonstigeAbwesenheit")}
          />
        </label>
        

      </form>
    </div>
  )
}

export default ArbeitszeitForm