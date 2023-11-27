import React from 'react'
import { Link } from "react-router-dom";

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function NavigationButtons() {
  return (
    <Container className="py-5">
      <Row className="justify-content-between">
        <Col xs={2}>
          <Link to="/Concerts">
              <Button variant="warning" size="lg">
                Concerts
              </Button>
          </Link>
        </Col>
        <Col xs={3} className="text-center">
          <Link to="/Theaters">
              <Button variant="warning" size="lg">
                Theaters
              </Button>
          </Link>
        </Col>
        <Col xs={3} className="text-center">
          <Link to="/Festivals">
              <Button variant="warning" size="lg">
                Festivals
              </Button>
          </Link>
        </Col>
        <Col xs={2} className="text-end">
          <Link to="/Standups">
              <Button variant="warning" size="lg">
                Standups
              </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default NavigationButtons