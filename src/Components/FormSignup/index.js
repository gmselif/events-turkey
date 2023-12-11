import React from 'react'
import Validation from './Validation'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage } from 'formik'

function FormSignup() {
  return (
    <>
      <div className="bg-dark mt-5 p-5 w-100 position-relative z-2">
        <Container className="pt-5 pb-2">
          <h3 className="text-warning" style={{ fontWeight: "300" }}>Events Turkey Sign Up</h3>
          <p className="text-secondary mb-5 pb-3 pb-lg mb-lg-0" style={{ fontSize: "1.2rem" }}>Welcome, you can quickly become a member.</p>
        </Container>
      </div>

      <Container>
        <Row className="mb-5 pb-5 justify-content-around flex-lg-row-reverse">
          {/*First(Right) Yellow Box */}
          <Col xs={11} md={12} lg={6} className="z-3">
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                checkbox1: '',
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
                        <h1 style={{ display: "inline-block", marginLeft: "10px" }}>Sign Up</h1>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12}>
                    <Field
                      name="firstName"
                      placeholder="First Name"
                      type="text"
                      className="w-100 py-3 ps-4 rounded-5"
                    />
                    <ErrorMessage name="firstName">
                      {msg =>
                        <div className="bg-danger text-light rounded-5 ps-3 py-2 mt-2">
                          {msg}
                        </div>
                      }
                    </ErrorMessage>
                  </Col>
                  <Col xs={12}>
                    <Field
                      name="lastName"
                      placeholder="Last Name"
                      type="text"
                      className="w-100 py-3 ps-4 rounded-5"
                    />
                    <ErrorMessage name="lastName">
                      {msg =>
                        <div className="bg-danger text-light rounded-5 ps-3 py-2 mt-2">
                          {msg}
                        </div>
                      }
                    </ErrorMessage>
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
                        <Field
                          name="checkbox1"
                          type="checkbox"
                          style={{ transform: "scale(2)" }}
                        />
                      </Col>
                      <Col xs={11}>
                        <label htmlFor="checkbox1">Ön Bilgilendirme Koşullarını ve Mesafeli Satış Sözleşmesini Okudum.</label>
                        <ErrorMessage name="checkbox1">
                          {msg =>
                            <div className="bg-danger text-light rounded-5 ps-3 py-2 mt-2">
                              {msg}
                            </div>
                          }
                        </ErrorMessage>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12}>
                    <Row className="align-items-center">
                      <Col xs={1}>
                        <input
                          name="checkbox2"
                          type="checkbox"
                          style={{ transform: "scale(2)" }}
                        />
                      </Col>
                      <Col xs={11}>
                        <label htmlFor="checkbox2">Bubilet.com.tr bültenlerine abone olmak istiyorum.</label>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12}>
                    <Button type="submit" variant="dark" className="w-100 py-3 rounded-5">Sign Up</Button>
                  </Col>
                </Row>
              </Form>
            </Formik>
          </Col>
          {/*Second(Left) Yellow Box */}
          <Col xs={11} md={12} lg={6} className="pe-lg-5 z-1" style={{marginTop:"-30px"}}>
            <Row className="p-4 p-sm-5 px-lg-3 px-xl-5 bg-warning rounded-5">
              <Col xs={12} className="border-bottom border-dark mb-4 pb-3">
                <Row className="align-items-center">
                  <Col xs={4} sm={3}>
                    <i className="bi bi-award" style={{ fontSize: "5rem" }}></i>
                  </Col>
                  <Col xs={8}>
                    <h2>Quality Service</h2>
                    <p>We work for your satisfaction without causing any inconvenience.</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} className="border-bottom border-dark mb-4 pb-3">
                <Row>
                  <Col xs={4} sm={3}>
                    <i className="bi bi-cash-coin" style={{ fontSize: "5rem" }}></i>
                  </Col>
                  <Col xs={8}>
                    <h2>The Most Reasonable Price</h2>
                    <p>We guarantee you the best price among websites.</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} className="border-bottom border-dark mb-4 pb-3">
                <Row>
                  <Col xs={4} sm={3}>
                    <i className="bi bi-ticket-perforated" style={{ fontSize: "5rem" }}></i>
                  </Col>
                  <Col xs={8} sm={9}>
                    <h2>The Easiest Way To Buy Tickets</h2>
                    <p>Receive your tickets both via SMS and e-mail, without having to print them.</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Row className="align-items-center">
                  <Col xs={7} md={9}>
                    <p>If you have an account you can sign in.</p>
                  </Col>
                  <Col xs={5} md={3}>
                    <Link to="/Signin">
                      <Button variant="dark" className="w-100 rounded-5">Sign In</Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container >
    </>
  )
}

export default FormSignup