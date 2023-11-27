import React from 'react'
import GetAll from '../../Network/GetAll'
import { useQuery } from "react-query";
import EventCardWrapper from '../../Components/EventCardWrapper';
import Slider from "../../Components/Slider"
import NavigationButtons from "../../Components/NavigationButtons"

function Home() {
  const { status, data } = useQuery("events", GetAll)

  return (
    <div>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <>
          <Slider/>
          <NavigationButtons />
          <EventCardWrapper key="wrapper" items={data} />
        </>
      )}
    </div>
  )
}

export default Home