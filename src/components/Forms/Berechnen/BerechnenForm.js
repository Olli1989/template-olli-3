import React, { useContext } from 'react'
import BrutoNettoContext from '../../../context/BruttoNettoContext'
import './berechnenForm.css'

function BerechnenForm() {
  const {formData, setFormData} = useContext(BrutoNettoContext)

  const handleFormChange = (e, change) => {
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setFormData(prevState => {
      return {...prevState, [change]: value}
    })
  }


  return (
    <div>
      <form className="bf_wrapper">
        <label>
          Jahr
          <select value={formData.year} onChange={(e)=>handleFormChange(e, "year")}>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </label>
        <hr />

        <label>
          Art der Berechnung
          <select value={formData.calculationType} onChange={(e)=>handleFormChange(e, "calculationType")}>
            <option value="1">{"Brutto >> Netto"}</option>
            <option value="2">{"Netto << Brutto"}</option>
          </select>
        </label>
        <hr />

        <label>
          Einkommen
          <input 
            type="text" 
            value={formData.income}
            onChange={(e)=>handleFormChange(e, "income")}
          />
        </label>
        

        <hr />
        <label>
          Berechnen für
          <select value={formData.calculationFor} onChange={(e)=>handleFormChange(e, "calculationFor")}>
            <option value="1">Angestellter</option>
            <option value="2">Arbeiter</option>
            <option value="3">Pensionist</option>
          </select>
        </label>

      </form>
    </div>
  )
}

export default BerechnenForm