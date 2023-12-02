import React from 'react'
import Validation from './Validation'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function FormSignup() {
  return (
    <>
      <div className="bg-dark mt-5 p-5 w-100">
        <Container className="pt-5 pb-2">
          <h3 className="text-warning" style={{ fontWeight: "300" }}>Events Turkey Sign Up</h3>
          <p className="text-secondary mb-5 pb-3 pb-lg mb-lg-0" style={{ fontSize: "1.2rem" }}>Welcome, you can quickly become a member.</p>
        </Container>
      </div>

      <Container>
        <Row className="mb-5 pb-5 justify-content-around flex-lg-row-reverse">
          <Col xs={11} md={12} lg={6}>{/*Second(Right) Yellow Box */}
            <Row className="p-4 p-md-5 mb-5 p-lg-2 pb-lg-4 p-xl-5 bg-warning gap-4 rounded-5" style={{ marginTop: "-100px" }}>
              <Col xs={12}>
                <Row className="justify-content-center">
                  <Col xs={6}>
                    <i class="bi bi-person-fill" style={{ fontSize: "3rem" }}></i>
                    <h1 style={{ display: "inline-block", marginLeft: "10px" }}>Signup</h1>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <input
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                  className="w-100 py-3 ps-4 rounded-5"
                //onChange={formik.handleChange}
                //value={formik.values.firstName}
                />
              </Col>
              <Col xs={12}>
                <input
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                  className="w-100 py-3 ps-4 rounded-5"
                //onChange={formik.handleChange}
                //value={formik.values.lastName}
                />
              </Col>
              <Col xs={12}>
                <input
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  className="w-100 py-3 ps-4 rounded-5"
                //onChange={formik.handleChange}
                //value={formik.values.email}
                />
              </Col>
              <Col xs={12}>
                <input
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  className="w-100 py-3 ps-4 rounded-5"
                //onChange={formik.handleChange}
                //value={formik.values.email}
                />
              </Col>
              <Col xs={12}>
                <Row className="align-items-center">
                  <Col xs={1}>
                    <input
                      id="checkbox1"
                      name="checkbox1"
                      type="checkbox"
                      style={{ transform: "scale(2)" }}
                    //onChange={formik.handleChange}
                    //value={formik.values.email}
                    />
                  </Col>
                  <Col xs={11}>
                    <label for="checkbox1">Ön Bilgilendirme Koşullarını ve Mesafeli Satış Sözleşmesini Okudum.</label>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Row className="align-items-center">
                  <Col xs={1}>
                    <input
                      id="checkbox2"
                      name="checkbox2"
                      type="checkbox"
                      style={{ transform: "scale(2)" }}
                    //onChange={formik.handleChange}
                    //value={formik.values.email}
                    />
                  </Col>
                  <Col xs={11}>
                    <label for="checkbox2">Bubilet.com.tr bültenlerine abone olmak istiyorum.</label>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Button type="submit" variant="dark" className="w-100 py-3 rounded-5">Submit</Button>
              </Col>
            </Row>
          </Col>
          <Col xs={11} md={12} lg={6} className="pe-lg-5">{/*First(Left) Yellow Box */}
            <Row className="p-4 p-sm-5 px-lg-3 py-lg-4 px-xl-5 py-xl-5 bg-warning rounded-bottom-5">
              <Col xs={12} className="border-bottom border-dark mb-4 pb-3">
                <Row className="align-items-center">
                  <Col xs={3}>
                    <i class="bi bi-award" style={{ fontSize: "5rem" }}></i>
                  </Col>
                  <Col xs={8}>
                    <h2>Quality Service</h2>
                    <p>We work for your satisfaction without causing any inconvenience.</p>
                  </Col>
                </Row>

              </Col>
              <Col xs={12} className="border-bottom border-dark mb-4 pb-3">
                <Row>
                  <Col xs={3}>
                    <i class="bi bi-cash-coin" style={{ fontSize: "5rem" }}></i>
                  </Col>
                  <Col xs={8}>
                    <h2>The Most Reasonable Price</h2>
                    <p>We guarantee you the best price among websites.</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} className="border-bottom border-dark mb-4 pb-3">
                <Row>
                  <Col xs={3}>
                    <i class="bi bi-ticket-perforated" style={{ fontSize: "5rem" }}></i>
                  </Col>
                  <Col xs={9}>
                    <h2>The Easiest Way To Buy Tickets</h2>
                    <p>Receive your tickets both via SMS and e-mail, without having to print them.</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Row>
                  <Col xs={9}>
                    <p>If you have an account you can sign in.</p>
                  </Col>
                  <Col xs={3}>
                    <Button variant="dark" className="w-100 rounded-5">Sign In</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FormSignup