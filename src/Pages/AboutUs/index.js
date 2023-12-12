import React from 'react'
import aboutus from '../../assets/aboutus.png'
import profilePicture from '../../assets/profilePicture.png'
import { Container, Row, Col, Image } from 'react-bootstrap'

function AboutUs() {
  return (
    <Container fluid="xs" className="mt-5 pt-4">
      <Row className="overflow-hidden mb-5" style={{maxHeight: "50vh"}}>
        <Col>
          <Image src={aboutus} className="w-100" />
        </Col>
      </Row>
      <Row className="mb-5 ms-2 mt-md-5 justify-content-center align-items-center">
        <Col xs={6} sm={5} md={4} lg={3} xl={2}>
          <Image src={profilePicture} roundedCircle className="w-100"/>
        </Col>
        <Col xs={6} sm={5} md={4} lg={3} className="ps-md-5">
          <h1>ELİF GÜMÜŞ</h1>
          <h4>Frontend Developer</h4>
          <p></p>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUs