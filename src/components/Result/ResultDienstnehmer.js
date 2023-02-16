import React, { useContext } from 'react'
import ResultContext from '../../context/ResultContext'
import './result.css'

function ResultDienstnehmer() {

  const {resultData} = useContext(ResultContext)
  console.log(resultData)
  return (
    <div className="result_table">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Monat</th>
            <th>13. Bezug</th>
            <th>14.Bezug</th>
            <th>Jahr</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Netto</td>
            <td>{resultData.dienstnehmer.netto[0]}</td>
            <td>{resultData.dienstnehmer.netto[1]}</td>
            <td>{resultData.dienstnehmer.netto[2]}</td>
            <td>{resultData.dienstnehmer.netto[3]}</td>
          </tr>
          <tr>
            <td>Brutto</td>
            <td>{resultData.dienstnehmer.brutto[0]}</td>
            <td>{resultData.dienstnehmer.brutto[1]}</td>
            <td>{resultData.dienstnehmer.brutto[2]}</td>
            <td>{resultData.dienstnehmer.brutto[3]}</td>
          </tr>
          <tr>
            <td>Sozialversicherung</td>
            <td>{resultData.dienstnehmer.sozialversicherung[0]}</td>
            <td>{resultData.dienstnehmer.sozialversicherung[1]}</td>
            <td>{resultData.dienstnehmer.sozialversicherung[2]}</td>
            <td>{resultData.dienstnehmer.sozialversicherung[3]}</td>
          </tr>
          <tr>
            <td>Lohnsteuer</td>
            <td>{resultData.dienstnehmer.lohnsteuer[0]}</td>
            <td>{resultData.dienstnehmer.lohnsteuer[1]}</td>
            <td>{resultData.dienstnehmer.lohnsteuer[2]}</td>
            <td>{resultData.dienstnehmer.lohnsteuer[3]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ResultDienstnehmer