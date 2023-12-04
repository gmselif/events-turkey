import React, { createContext, useState } from 'react';
import { useQuery } from "react-query"
import GetAll from '../Network/GetAll'

export const Context = createContext();

export function ContextProvider ({children}) {
  const { status, data } = useQuery("events", GetAll)

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
