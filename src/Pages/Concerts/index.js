import React from 'react'
import { useQuery } from "react-query";
import GetConcerts from '../../Network/GetConcerts'
import Slider from "../../Components/Slider"
import NavigationButtons from "../../Components/NavigationButtons"

function Concerts() {
  const { status, data } = useQuery("events", GetConcerts)
  
  return (
    <div>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <>
          <Slider pictures/>
          <NavigationButtons />
          <ul>
            {
              data.map(item => { return <li key={item.id}>{item.name}</li> })
            }
          </ul>
        </>
      )}
    </div>
  )
}

export default Concerts