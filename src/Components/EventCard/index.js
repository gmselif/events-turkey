import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function EventCard({ item, data, setFilteredData }) {
  var placeholder = "https://source.unsplash.com/150x150/?event1_1"

  const handleClick = () => {
    setFilteredData(data.filter(event => event.location.toLowerCase() === item.location.toLowerCase()))
  }
  


  return (
    <Col sm={12} md={6} lg={4} className="p-5 p-sm-5 py-md-3 px-md-4 px-lg-3 px-xl-4 p-xxl-5">
      <Card className="h-100 rounded-1 overflow-hidden">
        <Link to={`/${item.id}`} className="text-decoration-none">
          <Card.Img
            variant="top"
            className="px-5 py-3"
            style={{ height: "270px" }}
            src={item.images[0] ? item.images[0] : placeholder}
          />
        </Link>
        <Card.Body>
          <Card.Title className="text-truncate">{item.name}</Card.Title>
          <Card.Text className="text-truncate">
            {item.description}
          </Card.Text>
          <Card.Text className="text-truncate text-secondary">
            <b>City:</b> {item.city}
          </Card.Text>
          <Link to="/" onClick={handleClick} className="text-decoration-none">
            <Card.Text className="text-truncate text-secondary">
              <b>Location:</b> {item.location}
            </Card.Text>
          </Link>

          <Card.Text className="text-truncate text-secondary">
            <b>Date: </b>{item.startDate} - {item.endDate}
          </Card.Text>
          <Button variant="warning" className="w-100 rounded-pill">{item.price ? `${item.price} $` : "Free"}</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default EventCard