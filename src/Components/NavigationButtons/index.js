import React from 'react'
import { Link } from "react-router-dom";

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function NavigationButtons() {
  return (
    <Container fluid="xs" className="py-5">
      <Row >
        <Col className="text-center">
          <Link to="/Concerts">
              <Button variant="dark" size="lg">
                Concerts
              </Button>
          </Link>
        </Col>
        <Col className="text-center">
          <Link to="/Theaters">
              <Button variant="dark" size="lg">
                Theaters
              </Button>
          </Link>
        </Col>
        <Col className="text-center">
          <Link to="/Festivals">
              <Button variant="dark" size="lg">
                Festivals
              </Button>
          </Link>
        </Col>
        <Col className="text-center">
          <Link to="/Standups">
              <Button variant="dark" size="lg">
                Standups
              </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default NavigationButtons