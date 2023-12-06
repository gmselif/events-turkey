import React, { useContext } from 'react'
import Slider from '../../Components/Slider'
import NavigationButtons from '../../Components/NavigationButtons'
import EventCardWrapper from '../../Components/EventCardWrapper'
import { Context } from '../../Context'

function Concerts() {
  const { status } = useContext(Context);

  return (
    <div>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <>
          <Slider />
          <NavigationButtons />
          <EventCardWrapper />
        </>
      )}
    </div>
  )
}

export default Concerts