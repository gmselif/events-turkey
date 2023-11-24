import React from 'react'
import { Link } from "react-router-dom";

function Buttons() {
  return (
    <div>
      <Link to="/Concerts"><button>Concerts</button></Link>
      <Link to="/Theaters"><button>Theaters</button></Link>
      <Link to="/Festivals"><button>Festivals</button></Link>
      <Link to="/Standups"><button>Standups</button></Link>
    </div>
  )
}

export default Buttons