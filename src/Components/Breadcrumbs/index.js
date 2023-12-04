import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from "react-router-dom";

function Breadcrumbs({ eventName }) {
  return (
    <Breadcrumb>
      <Link to="/" className="breadcrumb-item">
        <i className="bi bi-house-door-fill text-warning" style={{ fontSize: "1.2rem" }} />
      </Link>
      <Link to="/" className="text-warning breadcrumb-item">
        Etkinlikler
      </Link>
      <div className="breadcrumb-item active">
        {eventName}
      </div>
    </Breadcrumb>
  )
}

export default Breadcrumbs