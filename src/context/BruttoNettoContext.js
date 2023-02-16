import { createContext, useState } from 'react';

const BrutoNettoContext = createContext(null)

export const BrutoNettoProvider = ({children}) => {
  const initialState = {
    year: '2023',
    calculationType: "1",
    income: '',
    calculationFor: "1",
    sachbezug: "",
    abfertigungNeu: true,
    freibetrag: "",
    dienstort: "1",
    pendlerpauschale: "1",
    entfernung: "",
    kinder: "",
    kinderbis17: "",
    kinderbis17geteilt: false,
    kinderab18: "",
    kinderab18geteilt: false,
    wochenstunden: "40",
    arbeitstage:"",
    urlaub:"5",
    sonstigeAbwesenheit:""
  }
  const [formData, setFormData] = useState(initialState);

  return (
    <BrutoNettoContext.Provider value={{formData , setFormData}}>
      {children}
    </BrutoNettoContext.Provider>
  );
}

export default BrutoNettoContext;