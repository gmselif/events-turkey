import React, { useEffect, useContext } from 'react'
import { useQuery } from 'react-query'
import GetAll from '../../Network/GetAll'
import Slider from '../../Components/Slider'
import NavigationButtons from '../../Components/NavigationButtons'
import EventCardWrapper from '../../Components/EventCardWrapper'
import { Context } from '../../Context'
import 'moment-timezone'
import moment from 'moment'

function PastEvents() {
  const { status, data } = useQuery("events", GetAll)
  const { filteredData, setFilteredData } = useContext(Context);

  //Returns true if the event has expired.
  useEffect(() => {
    setFilteredData(data?.filter(event =>
      moment(event.startDate).diff(moment().format("YYYY-MM-DD"), 'days') <= 0
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

export default PastEvents