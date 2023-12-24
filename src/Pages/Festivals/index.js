import React, { useEffect, useContext } from 'react'
import Slider from '../../components/slider'
import NavigationButtons from '../../components/navigationButtons'
import EventCardWrapper from '../../components/eventCardWrapper'
import { Context } from '../../context'
import moment from 'moment'

function Festivals() {
  const { status, data, filteredData, setFilteredData } = useContext(Context);

  useEffect(() => {
    setFilteredData(data?.filter(event =>
      moment(event.startDate).diff(moment().format("YYYY-MM-DD"), 'days') > 0
      && event.eventType.toLowerCase() === "festival"
    ))
  }, [data])
  
  return (
    <div>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <>
          <Slider />
          <NavigationButtons />
          {filteredData && <EventCardWrapper />}
        </>
      )}
    </div>
  )
}

export default Festivals