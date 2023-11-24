import React from 'react'
import { useQuery } from "react-query";
import GetStandups from '../../Network/GetStandups'

function Standups() {
  const {status, data} = useQuery("events", GetStandups)

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

export default Standups