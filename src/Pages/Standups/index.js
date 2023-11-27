import React from 'react'
import { useQuery } from "react-query"
import GetStandups from '../../Network/GetStandups'
import Slider from "../../Components/Slider"
import NavigationButtons from "../../Components/NavigationButtons"
import EventCardWrapper from '../../Components/EventCardWrapper';

function Standups() {
  const { status, data } = useQuery("events", GetStandups)

  return (
    <div>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <>
          <Slider />
          <NavigationButtons />
          <EventCardWrapper items={data}/>
        </>
      )}
    </div>
  )
}

export default Standups