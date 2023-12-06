import React from 'react'
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap'
import contactUs from '../../assets/Pictures/contactUs.png'

function ContactUs() {

  return (
    <Container fluid="xs" style={{ marginTop: "10vh" }} className="mb-5 mb-sm-0">
      <Row className="justify-content-center justify-content-lg-end">
        <Col xs={12} lg={4} className="p-lg-5 me-lg-5 overflow-hidden" style={{ height: "100%", maxHeight: "80vh" }}>
          <Image src={contactUs} className="w-100" />
        </Col>
        <Col xs={12} lg={7} className="mb-5 px-5 px-lg-0 mb-lg-0">
          <Row className='h-100'>
            <Col xs={12} style={{ height: "20%" }} className="mb-5 mb-sm-0">
              <p className="text-capitalize" style={{ fontSize: "90px" }}>contact us</p>
            </Col>
            <Col xs={12} style={{ height: "80%" }}>
              <Row className="border border-5 border-black h-100 ms-lg-5 p-5">
                <Col xs={12} lg={6}>
                  <Col xs={12}>
                    <label htmlFor="email" className="d-block" style={{ fontSize: "25px" }}>Full Name</label>

                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      className="w-100 ps-4 border-start-0 border-end-0 border-top-0 mb-5"
                      style={{ backgroundColor: "#f1f1f1", borderBottom: "4px solid black" }}
                    //onChange={formik.handleChange}
                    //value={formik.values.firstName}
                    />
                  </Col>
                  <Col xs={12}>
                    <label htmlFor="email" className="d-block" style={{ fontSize: "25px" }}>E - mail</label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-100 ps-4 border-start-0 border-end-0 border-top-0 mb-5"
                      style={{ backgroundColor: "#f1f1f1", borderBottom: "4px solid black" }}                  //onChange={formik.handleChange}
                    //value={formik.values.email}
                    />
                  </Col>
                  <Col xs={12}>
                    <label htmlFor="message" className="d-block" style={{ fontSize: "25px" }}>Message</label>

                    <input
                      id="message"
                      name="message"
                      type="text"
                      className="w-100 ps-4 border-start-0 border-end-0 border-top-0 mb-5"
                      style={{ backgroundColor: "#f1f1f1", borderBottom: "4px solid black" }}
                    //onChange={formik.handleChange}
                    //value={formik.values.firstName}
                    />
                  </Col>
                  <Col>
                    <Button type="submit" variant="warning" className="w-100 py-3 rounded-5 mb-5 mb-lg-0">Contact Us</Button>
                  </Col>
                </Col>
                <Col xs={12} lg={6}>
                  <Row className="h-100 justify-content-center">
                    <Col xs={12} lg={6} className="mx-5 text-center text-lg-start">
                      <h1>Contact</h1>
                      <p>info.tr@gmail.com</p>
                    </Col>

                    <Col xs={12} lg={6} className="mx-5 text-center text-lg-start">
                      <h1>Based In</h1>
                      <p>New York, United States</p>
                    </Col>

                    <Col xs={12} lg={6} className="text-center text-lg-start">
                      <Row className="h-100 align-content-center">
                        <Col xs={3}>
                          <a href="https://facebook.com/">
                            <i className="bi bi-facebook text-black me-2" style={{ fontSize: "2rem" }} />
                          </a>
                        </Col>
                        <Col xs={3}>
                          <a href="https://www.linkedin.com/in/elif-gumus/">
                            <i className="bi bi-linkedin text-black me-2" style={{ fontSize: "2rem" }} />
                          </a>
                        </Col>
                        <Col xs={3}>
                          <a href="https://twitter.com/">
                            <i className="bi bi-twitter-x text-black me-2" style={{ fontSize: "2rem" }} />
                          </a>
                        </Col>
                        <Col xs={3}>
                          <a href="https://www.instagram.com/">
                            <i className="bi bi-instagram text-black me-2" style={{ fontSize: "2rem" }} />
                          </a>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>)
}

export default ContactUs