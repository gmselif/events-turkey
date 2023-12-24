import React, { useEffect, useContext } from 'react'
import Slider from '../../Components/Slider'
import NavigationButtons from '../../Components/NavigationButtons'
import EventCardWrapper from '../../Components/EventCardWrapper'
import { Context } from '../../Context'
import moment from 'moment'

function Standups() {
  const { status, data, filteredData, setFilteredData } = useContext(Context);

  useEffect(() => {
    setFilteredData(data?.filter(event =>
      moment(event.startDate).diff(moment().format("YYYY-MM-DD"), 'days') > 0
      && event.eventType.toLowerCase() === "standup"
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

export default Standups