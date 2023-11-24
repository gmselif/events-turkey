import React from 'react'
import { useQuery } from "react-query";
import GetConcerts from '../../Network/GetConcerts'

function Concerts() {
  const {status, data} = useQuery("events", GetConcerts)

  return (
    <div>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <ul>
          {
            data.map(item => {return <li key={item.id}>{item.name}</li>})
          }
        </ul>
      )}
    </div>
  )
}

export default Concerts