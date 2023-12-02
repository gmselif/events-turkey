import React from 'react'
import Validation from './Validation'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function FormSignin() {
  return (
    <Container fluid="lg" className="my-5 py-5">
      <Row className="my-5 pt-5 text-center">
        <Col xs={12}>
          <i class="bi bi-person-fill" style={{ fontSize: "3rem" }}></i>
          <h1 style={{ display: "inline-block", marginLeft: "10px" }}>Signin</h1>
        </Col>
        <Col>

        </Col>
        <Col>

        </Col>
      </Row>
    </Container>
  )
}

export default FormSignin