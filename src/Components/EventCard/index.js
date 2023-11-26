import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function EventCard({ item }) {
  var placeholder = "https://source.unsplash.com/150x150/?event1_1"
  return (
    <Col sm={12} md={6} lg={4} className="p-5 p-sm-5 py-md-3 px-md-4 px-lg-3 px-xl-4 p-xxl-5">
      <Link to="/" className="text-decoration-none">
        <Card className="h-100 rounded-1 overflow-hidden">
          <Card.Img 
            variant="top" 
            style={{ height: "270px" }}
            src={item.images[0]? item.images[0] : placeholder}  
          />
          <Card.Body>
            <Card.Title className="text-truncate">{item.name}</Card.Title>
            <Card.Text className="text-truncate">
              {item.description}
            </Card.Text>
            <Card.Text className="text-truncate text-secondary">
              <b>Location:</b> {item.location}
            </Card.Text>
            <Card.Text className="text-truncate text-secondary">
              <b>Date: </b>{item.startDate} - {item.endDate}
            </Card.Text>
            <Button variant="warning" className="w-100 rounded-pill">{item.price} $</Button>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  )
}

export default EventCard