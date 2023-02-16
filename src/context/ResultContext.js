import { createContext, useState } from 'react';

const ResultContext = createContext(null)

export const ResultProvider = ({children}) => {
  const initialState = {
    dienstnehmer:{
      netto:[500,501,502,503],
      brutto: [400,401,402,403],
      sozialversicherung: [600,601,602,603],
      lohnsteuer: [700,701,702,703]
    },
    dienstgeber:{
      sozialversicherung:[5,5.1,5.3,500],
      db:[6,6.1,6.3,600],
      dz:[7,7.1,7.3,700],
      kommunalsteuer:[8,8.1,8.3,800],
      bmvk:[9,9.1,9.3,900],
      personalkosten:[10,10.1,10.3,1000],
      nettolohn: [3.91],
      kosten: [4.25]
    }
  }
  const [resultData, setResultData] = useState(initialState);

  return (
    <ResultContext.Provider value={{resultData , setResultData}}>
      {children}
    </ResultContext.Provider>
  );
}

export default ResultContext;