import React, { useEffect, useContext } from 'react'
import EventCardWrapper from '../../components/eventCardWrapper'
import NavigationButtons from '../../components/navigationButtons'
import Slider from '../../components/slider'
import SearchBar from '../../components/searchBar'
import FilterBar from '../../components/filterBar'
import { Context } from '../../context'
import 'moment-timezone'
import moment from 'moment'

function Home() {
  const { filteredData, setFilteredData, status, data } = useContext(Context);

  //Don't show the past events.
  useEffect(() => { 
    setFilteredData(data?.filter(event => 
      moment(event.startDate).diff(moment().format("YYYY-MM-DD"), 'days') > 0
    )) 
  }, [data])

  return (
    <>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <>
          <Slider />
          <NavigationButtons />
          <SearchBar />
          <FilterBar />
          {filteredData && <EventCardWrapper />}
        </>
      )}
    </>
  )
}

export default Home