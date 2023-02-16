import React from 'react'
import { useState } from 'react'
import './bruttoNetto.css'
import { BrutoNettoProvider } from '../../context/BruttoNettoContext'
import { ResultProvider } from '../../context/ResultContext'
import ReusableContainer from '../../components/ReusableContainer'

import BerechnenForm from '../../components/Forms/Berechnen/BerechnenForm'
import ZusatzangabenForm from '../../components/Forms/Zusatzangaben/ZusazangabenForm'
import ArbeiszeitForm from '../../components/Forms/Arbeitszeit/ArbeitszeitForm'
import AbsetzbetraegeForm from '../../components/Forms/Absetzbetraege/AbsetzbetraegeForm'
import ResultDienstnehmer from '../../components/Result/ResultDienstnehmer'
import ResultDienstgerber from '../../components/Result/ResultDienstgerber'
import ResultDienstgeberkostenDiagramm from '../../components/Result/ResultDienstgeberkostenDiagramm'
import ResultJahresbruttoDiagramm from '../../components/Result/ResultJahresbruttoDiagramm'

function BruttoNetto() {
  const [berechnenOpen, setBerechnenOpen] = useState(true)
  const [zusatzangabeOpen, setZusatzangabeOpen] = useState(false)
  const [absetzbetraegeOpen, setAbsetzbetraegeOpen] = useState(false)
  const [arbeitszeitOpen, setArbeitszeitOpen] = useState(false)
  const [dienstnehmerOpen, setDienstnehmerOpen] = useState(false)
  const [dienstgeberOpen, setDienstgeberOpen] = useState(false)
  const [jahresbruttoOpen, setJahresbruttoOpen] = useState(false)
  const [dienstgeberkostenOpen, setDienstgeberkostenOpen] = useState(false)

  return (
    <BrutoNettoProvider>
      <ResultProvider>
        <div className="bn_wrapper">
          <div className="header">
            <h2>Brutto-Netto-Rechner</h2>
            <div>
              <ul className="header_nav">
                <li>Eingabe</li>
                <li>Ergebnis</li>
                <li>PDF</li>
                <li>Drucken</li>
              </ul>
            </div>
          </div>
          <div className="body_calculator">
            <div className="input_data">
              <ReusableContainer 
                text="Berechnen"
                open={berechnenOpen}
                setOpen={setBerechnenOpen}
              >
                {berechnenOpen && <BerechnenForm />}
              </ReusableContainer>
            
              <ReusableContainer 
                text="Zusatzangaben"
                open={zusatzangabeOpen}
                setOpen={setZusatzangabeOpen}
              >
                {zusatzangabeOpen && <ZusatzangabenForm />}
              </ReusableContainer>

              <ReusableContainer 
                text="Absetzbeträge"
                open={absetzbetraegeOpen}
                setOpen={setAbsetzbetraegeOpen}
              >
                {absetzbetraegeOpen && <AbsetzbetraegeForm />}
              </ReusableContainer>

              <ReusableContainer 
                text="Arbeitszeit"
                open={arbeitszeitOpen}
                setOpen={setArbeitszeitOpen}
              >
                {arbeitszeitOpen && <ArbeiszeitForm />}
              </ReusableContainer>
            </div>
            <div className="reulst_data">
              <ReusableContainer 
                text="Dienstnehmer"
                open={dienstnehmerOpen}
                setOpen={setDienstnehmerOpen}
              >
                {dienstnehmerOpen && <ResultDienstnehmer />}
              </ReusableContainer>

              <ReusableContainer 
                text="Dienstgeber"
                open={dienstgeberOpen}
                setOpen={setDienstgeberOpen}
              >
                {dienstgeberOpen && <ResultDienstgerber />}
              </ReusableContainer>

              <ReusableContainer 
                text="Wie setzt sich das Jahresbrutto zusammen?"
                open={jahresbruttoOpen}
                setOpen={setJahresbruttoOpen}
              >
                {jahresbruttoOpen && <ResultJahresbruttoDiagramm />}
              </ReusableContainer>

              <ReusableContainer 
                text="Wie setzen sich die jährlichen Dienstgeberkosten zusammen?"
                open={dienstgeberkostenOpen}
                setOpen={setDienstgeberkostenOpen}
              >
                {dienstgeberkostenOpen && <ResultDienstgeberkostenDiagramm />}
              </ReusableContainer>


            </div>
          </div>
        </div>
      </ResultProvider>
    </BrutoNettoProvider>
  )
}

export default BruttoNetto