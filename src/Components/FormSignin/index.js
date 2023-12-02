import React from 'react'
import Validation from './Validation'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function FormSignin() {
  return (
    <>
      <div className="bg-dark mt-5 p-5 w-100">
        <Container className="pt-5 pb-2">
          <h3 className="text-warning" style={{ fontWeight: "300" }}>Events Turkey Sign In</h3>
          <p className="text-secondary mb-5 pb-3 pb-lg mb-lg-0" style={{ fontSize: "1.2rem" }}>Welcome, you can log in to your account.</p>
        </Container>
      </div>

      <Container>
        <Row className="mb-5 pb-5 justify-content-around flex-lg-row-reverse">
          <Col xs={11} md={12} lg={6}>{/*Second(Right) Yellow Box */}
            <Row className="p-4 p-md-5 mb-5 p-lg-2 pb-lg-4 p-xl-5 bg-warning gap-4 rounded-5" style={{ marginTop: "-100px" }}>
              <Col xs={12}>
                <Row className="justify-content-center">
                  <Col xs={6}>
                    <i className="bi bi-person-fill" style={{ fontSize: "3rem" }}></i>
                    <h1 style={{ display: "inline-block", marginLeft: "10px" }}>Sign In</h1>
                  </Col>
                </Row>
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
                    <label htmlFor="checkbox1">Remember Me!</label>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Button type="submit" variant="dark" className="w-100 py-3 rounded-5">Sign In</Button>
              </Col>
            </Row>
          </Col>
          <Col xs={11} md={12} lg={6} className="pe-lg-5">{/*First(Left) Yellow Box */}
            <Row className="px-4 py-5 px-lg-3 py-lg-4 px-xl-5 py-xl-5 bg-warning rounded-bottom-5">
              <Col xs={12} className="border-bottom border-dark mb-4 pb-3 text-center">
                <h4>Don't have an Events Turkey account?</h4>
                <Link to="/Signup" className="text-light text-decoration-none">
                  <h4>
                    Create by clicking here!
                  </h4>
                </Link>
              </Col>
              <Col xs={12} className="border-bottom border-dark mb-4 pb-3 text-center">
                <h3>Don't miss the fun, discounted tickets are waiting for you.</h3>
              </Col>
              <Col xs={12}>
                <Link to="/Signup">
                  <Button variant="dark" className="w-100 py-3 rounded-5">Sign Up Now</Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FormSignin