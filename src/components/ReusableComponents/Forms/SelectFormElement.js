import React from 'react'

function SelectFormElement({name, valueOption }) {
  return (
    <label>
      Jahr
      <select value={formData.year} onChange={(e)=>handleFormChange(e, "year")}>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </label>
  )
}

export default SelectFormElement