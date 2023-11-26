import React from 'react'
import GetAll from '../../Network/GetAll'
import { useQuery } from "react-query";
import EventCardWrapper from '../../Components/EventCardWrapper';

function Home() {
  const { status, data } = useQuery("events", GetAll)

  return (
    <div>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <EventCardWrapper key="wrapper" items={data}></EventCardWrapper>
      )}
    </div>
  )
}

export default Home