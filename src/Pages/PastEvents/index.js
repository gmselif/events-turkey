import React from 'react'
import { useQuery } from "react-query"
import GetAll from '../../Network/GetAll'
import Slider from "../../Components/Slider"
import NavigationButtons from "../../Components/NavigationButtons"

function PastEvents() {
  const { status, data } = useQuery("events", GetAll)

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
          <ul>
            {
              data.filter(item =>
                isPast(item.startDate)).map(item => {
                  return <li key={item.id}>{item.name}</li>
                })
            }
          </ul>
        </>
      )}
    </div>
  )
}

export default PastEvents