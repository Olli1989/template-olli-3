import React, { useContext } from 'react'
import BrutoNettoContext from '../../../context/BruttoNettoContext'
import './zusatzangabenForm.css'

function ZusatzangabenForm() {
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
          Sachbezug
          <input 
            type="text" 
            value={formData.sachbezug}
            onChange={(e)=>handleFormChange(e, "sachbezug")}
          />
        </label>
        <hr />

        <label>
          Abfertigung Neu berücksichtigen
          <input
            type="checkbox" 
            checked={formData.abfertigungNeu}
            onChange={(e)=>handleFormChange(e, "abfertigungNeu")}/>
        </label>
        <hr />

        <label>
          LSt.-Freibetrag
          <input 
            type="text" 
            value={formData.freibetrag}
            onChange={(e)=>handleFormChange(e, "freibetrag")}
          />
        </label>
        <hr />

        <label>
          Dienstort
          <select value={formData.dienstort} onChange={(e)=>handleFormChange(e, "dienstort")}>
            <option value="1">Oberösterreich</option>
            <option value="2">Niederösterreich</option>
            <option value="3">Wien</option>
            <option value="4">Salzburg</option>
          </select>
        </label>
        <hr />

        <label>
          Pendlerpauschale
          <select value={formData.pendlerpauschale} onChange={(e)=>handleFormChange(e, "pendlerpauschale")}>
            <option value="1">keine</option>
            <option value="2">klein</option>
            <option value="3">groß</option>
          </select>
        </label>
        <hr />

        <label>
          Entfernung vom Arbeisplatz
          <input 
            type="text" 
            value={formData.entfernung}
            onChange={(e)=>handleFormChange(e, "entfernung")}
          />
        </label>

      </form>
    </div>
  )
}

export default ZusatzangabenForm