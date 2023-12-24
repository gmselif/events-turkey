import React from 'react'
import Validation from './validation'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage } from 'formik'

function Signin() {
  return (
    <>
      <div className="bg-dark mt-5 p-5 w-100 position-relative z-2">
        <Container className="pt-5 pb-2">
          <h3 className="text-warning" style={{ fontWeight: "300" }}>Events Turkey Sign In</h3>
          <p className="text-secondary mb-5 pb-3 pb-lg mb-lg-0" style={{ fontSize: "1.2rem" }}>Welcome, you can log in to your account.</p>
        </Container>
      </div>

      <Container>
        <Row className="mb-5 pb-5 justify-content-around flex-lg-row-reverse">
          {/*First(Right) Yellow Box */}
          <Col xs={11} md={12} lg={6} className="z-3">
            <Formik
              initialValues={{
                email: '',
                password: ''
              }}
              validationSchema={Validation}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400)
              }}
            >
              <Form>
                <Row className="p-4 p-md-5 mb-5 p-lg-2 pb-lg-4 p-xl-5 bg-warning gap-4 rounded-5" style={{ marginTop: "-100px" }}>
                  <Col xs={12}>
                    <Row className="justify-content-center">
                      <Col xs={6} className="text-center">
                        <i className="bi bi-person-fill" style={{ fontSize: "3rem" }}></i>
                        <h1 style={{ display: "inline-block", marginLeft: "10px" }}>Sign In</h1>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12}>
                    <Field
                      name="email"
                      placeholder="Email"
                      type="email"
                      className="w-100 py-3 ps-4 rounded-5"
                    />
                    <ErrorMessage name="email">
                      {msg =>
                        <div className="bg-danger text-light rounded-5 ps-3 py-2 mt-2">
                          {msg}
                        </div>
                      }
                    </ErrorMessage>
                  </Col>
                  <Col xs={12}>
                    <Field
                      name="password"
                      placeholder="Password"
                      type="password"
                      className="w-100 py-3 ps-4 rounded-5"
                      autoComplete="on"
                    />
                    <ErrorMessage name="password">
                      {msg =>
                        <div className="bg-danger text-light rounded-5 ps-3 py-2 mt-2">
                          {msg}
                        </div>
                      }
                    </ErrorMessage>
                  </Col>
                  <Col xs={12}>
                    <Row className="align-items-center">
                      <Col xs={1}>
                        <input
                          name="checkbox1"
                          type="checkbox"
                          style={{ transform: "scale(2)" }}
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
              </Form>
            </Formik>
          </Col>
          {/*Second(Left) Yellow Box */}
          <Col xs={11} md={12} lg={6} className="pe-lg-5 z-1" style={{ marginTop: "-30px" }}>
            <Row className="px-4 py-5 px-lg-3 px-xl-5 bg-warning rounded-5">
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
      </Container >
    </>
  )
}

export default Signin