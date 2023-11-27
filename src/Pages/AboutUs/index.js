import React from 'react'
import aboutUs from '../../assets/Pictures/aboutUs.png'
import profilePicture from '../../assets/Pictures/profilePicture.png'
import { Container, Row, Col, Image } from 'react-bootstrap'

function AboutUs() {
  return (
    <Container fluid="xs" style={{ marginTop: "10vh" }}>
      <Row>
        <Col style={{height: "40vh", overflow:"hidden"}}>
          <Image src={aboutUs} style={{ width:"100%" }} />
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