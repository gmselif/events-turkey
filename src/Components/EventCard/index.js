import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function EventCard({ item }) {
  return (
    <Col md={4} className="p-5">
      <Link to="/" className="text-decoration-none">
        <Card className="h-100 rounded-1 overflow-hidden">
          <Card.Img variant="top" src={item.images[0]} style={{ height: "300px" }} />
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
            <Button variant="danger" className="w-100 rounded-pill">{item.price} $</Button>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  )
}

export default EventCard