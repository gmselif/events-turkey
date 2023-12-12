import React, { createContext, useState } from 'react';
import { useQuery } from 'react-query'
import GetAll from '../Network/GetAll'

export const Context = createContext();

export function ContextProvider ({children}) {
  const { status, data } = useQuery("events", GetAll)
  const [filteredData, setFilteredData] = useState()
  const [favorites, setFavorites] = useState([])
  const [showFavButton, setShowFavButton] = useState(true)

  const values = {
    filteredData, 
    setFilteredData,
    status,
    data,
    favorites, 
    setFavorites,
    showFavButton, 
    setShowFavButton
  }

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}
