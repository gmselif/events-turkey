import React from 'react'
import { useQuery } from "react-query"
import GetAll from '../../Network/GetAll'
import Slider from "../../Components/Slider"
import NavigationButtons from "../../Components/NavigationButtons"
import EventCardWrapper from '../../Components/EventCardWrapper';

function PastEvents() {
  const { status, data } = useQuery("events", GetAll)

  //Returns true if the event has expired.
  const isPast = (date) => {
    const today = new Date();
    const eventDate = new Date(date);
    return (eventDate.getTime() - today.getTime()) < 0 ? true : false
  }

  return (
    <div>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <>
          <Slider />
          <NavigationButtons />
            {
              <EventCardWrapper key={"wrapper"} items={data.filter(item => isPast(item.startDate))} />
            }
        </>
      )}
    </div>
  )
}

export default PastEvents