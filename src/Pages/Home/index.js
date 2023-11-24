import React from 'react'
import GetAll from '../../Network/GetAll'
import { useQuery } from "react-query";

function Home() {
  const {status, data} = useQuery("events", GetAll)

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

export default Home