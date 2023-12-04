import React, { createContext, useState } from 'react';

export const Context = createContext();

export function ContextProvider ({children}) {
  const [filteredData, setFilteredData] = useState()

  const values = {
    filteredData, 
    setFilteredData
  }

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}
