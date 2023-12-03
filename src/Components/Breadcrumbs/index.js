import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from "react-router-dom";

function Breadcrumbs({ eventName }) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/">
          <i class="bi bi-house-door-fill text-warning" style={{fontSize:"1.2rem"}}/>
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to="/" className="text-warning">
          Etkinlikler
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        {eventName}
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Breadcrumbs