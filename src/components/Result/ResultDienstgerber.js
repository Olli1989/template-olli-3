import React, { useContext } from 'react'
import ResultContext from '../../context/ResultContext'
import './result.css'

function ResultDienstgerber() {
  const {resultData} = useContext(ResultContext)

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
            <td>Sozialversicherung</td>
            <td>{resultData.dienstgeber.sozialversicherung[0]}</td>
            <td>{resultData.dienstgeber.sozialversicherung[1]}</td>
            <td>{resultData.dienstgeber.sozialversicherung[2]}</td>
            <td>{resultData.dienstgeber.sozialversicherung[3]}</td>
          </tr>
          <tr>
            <td>DB</td>
            <td>{resultData.dienstgeber.db[0]}</td>
            <td>{resultData.dienstgeber.db[1]}</td>
            <td>{resultData.dienstgeber.db[2]}</td>
            <td>{resultData.dienstgeber.db[3]}</td>
          </tr>
          <tr>
            <td>DZ</td>
            <td>{resultData.dienstgeber.dz[0]}</td>
            <td>{resultData.dienstgeber.dz[1]}</td>
            <td>{resultData.dienstgeber.dz[2]}</td>
            <td>{resultData.dienstgeber.dz[3]}</td>
          </tr>
          <tr>
            <td>Kommunalsteuer</td>
            <td>{resultData.dienstgeber.kommunalsteuer[0]}</td>
            <td>{resultData.dienstgeber.kommunalsteuer[1]}</td>
            <td>{resultData.dienstgeber.kommunalsteuer[2]}</td>
            <td>{resultData.dienstgeber.kommunalsteuer[3]}</td>
          </tr>
          <tr>
            <td>BMVK</td>
            <td>{resultData.dienstgeber.bmvk[0]}</td>
            <td>{resultData.dienstgeber.bmvk[1]}</td>
            <td>{resultData.dienstgeber.bmvk[2]}</td>
            <td>{resultData.dienstgeber.bmvk[3]}</td>
          </tr>
          <tr>
            <td>reine Personalkosten</td>
            <td>{resultData.dienstgeber.personalkosten[0]}</td>
            <td>{resultData.dienstgeber.personalkosten[1]}</td>
            <td>{resultData.dienstgeber.personalkosten[2]}</td>
            <td>{resultData.dienstgeber.personalkosten[3]}</td>
          </tr>
          <tr>
            <td>Nettolohn / Anwesenheitsstunde</td>
            <td>{resultData.dienstgeber.nettolohn[0]}</td>
          </tr>
          <tr>
            <td>Kosten / Anwesenheitsstunde</td>
            <td>{resultData.dienstgeber.kosten[0]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ResultDienstgerber