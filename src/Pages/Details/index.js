import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import GetAll from '../../Network/GetAll'
import { useParams } from 'react-router-dom'
import Slider from '../../Components/Slider'
import ShareButtons from '../../Components/ShareButtons'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Breadcrumbs from '../../Components/Breadcrumbs'
import slugify from 'react-slugify'

function Details() {
  const { status, data } = useQuery("event", GetAll)
  const { name } = useParams();

  const [value, setValue] = useState("")
  const [item1, setItem1] = useState()

  useEffect(() => {
    setItem1(
      data?.find(event => slugify(event.name) === name)
    )
  }, [data, name])

  return (
    <>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && item1 && (
        <Container className="mt-5">
          <Row className="column-gap-5 justify-content-center">
            <Col xs={12} className="mt-5 pt-5">
              <Breadcrumbs eventName={item1.name} />
            </Col>
            <Col xs={12} md={3}>{/*Picture*/}
              <Slider pictures={item1.images} />
            </Col>

            {/* Right Column */}
            <Col xs={11} md={8} className="mt-5">

              {/* Explanation Section */}
              <Row className="p-4 p-lg-5 bg-white rounded-5 shadow mb-5">
                <Col xs={12}>
                  <h2>{item1.name}</h2>
                </Col>
                <Col xs={12}>
                  <i className="bi bi-tag-fill text-warning me-3" style={{ fontSize: "1.5rem" }} />
                  <p className="d-inline-block text-secondary text-capitalize" style={{ fontSize: "1.2rem" }}>
                    {item1.eventType}
                  </p>
                </Col>
                <Col xs={12} className="rounded-4 p-4 mb-5" style={{ backgroundColor: "#f1f1f1" }}>
                  <Row>
                    <Col xs={12}>
                      <h5>Event Description</h5>
                    </Col>
                    <Col xs={12}>
                      {item1.description}
                    </Col>
                  </Row>
                </Col>
                <Col xs={12}>
                  <Row>
                    <Col xs={12} lg={8}>
                      {item1.price ? (
                        //If there is at least one price value, show clickable TicketsButton. 
                        //Else, show unclickable FreeButton.
                        <Button variant="outline-warning" size="lg" onClick={() => setValue("tickets")}>
                          Tickets
                        </Button>
                      ) : (
                        <Button variant="outline-warning" size="lg" >
                          Free
                        </Button>
                      )}
                      {/*If there are no performers, don't show PerformersButton */}
                      {item1.performers &&
                        <Button variant="outline-warning" size="lg" onClick={() => setValue("performers")}>
                          Performers
                        </Button>
                      }
                      <Button variant="outline-warning" size="lg" onClick={() => setValue("rules")}>
                        Rules
                      </Button>
                    </Col>
                    <Col xs={12} lg={4} className="text-lg-end mt-4 mt-lg-0">
                      <Button variant="danger" size="lg">
                        Add Favorities
                        <i className="bi bi-heart-fill text-white ms-1 ms-lg-3" />
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>{/* Explanation Section END*/}

              {/*Buy A Ticket Section*/}
              {value === "tickets" &&
                <Row className="p-4 p-lg-5 bg-white rounded-5 shadow mb-5">
                  <Col xs={12} className="mb-4">
                    <Row className="align-items-center justify-content-between">
                      <Col xs={6}>
                        <h3>Buy a Ticket</h3>
                      </Col>
                      <Col xs={6} className="text-end">
                        <h6>Choose a date</h6>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} className="border border-1 border-secondary rounded-5 text-black ps-4 pt-3 pb-0 pe-0 overflow-hidden">
                    <Row>
                      <Col xs={8}>
                        <Row>
                          <Col xs={12} className="text-dark-emphasis">
                            <h5>{item1.startDate}</h5>
                          </Col>
                          <Col xs={12} className="text-dark-emphasis mb-4">
                            <h6>{`${item1.city} - ${item1.location}`}</h6>
                          </Col>
                          <Col xs={12} className="text-warning">
                            <i className="bi bi-easel2-fill me-4" style={{ fontSize: "1.5rem" }} />
                            <p className="d-inline-block">Choose your seat</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={4} className="text-end">
                        <Row className='h-100'>
                          <Col xs={12}>
                            <p className="text-secondary my-0 me-4">Starts from</p>
                            <p style={{ fontSize: "30px" }} className="me-4 my-0">
                              {Math.min(...Object.values(item1.price))} $
                            </p>
                          </Col>
                          <Col xs={12}>
                            <Button variant="warning" className="h-100 px-4 px-lg-5 py-0 text-uppercase" style={{ borderTopLeftRadius: "30px" }} >
                              <i className="bi bi-basket2-fill me-lg-1 me-xl-4" style={{ fontSize: "1.5rem" }}></i>
                              Buy
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              }{/*Buy A Ticket Section END*/}

              {value === "performers" &&
                <Row className="p-4 px-lg-5 pt-lg-5 bg-white rounded-5 shadow mb-5">
                  <Col xs={12} className="mb-4">
                    <h3>Performers</h3>
                    <ul>
                      {item1.performers?.map((item, key) => <li key={key}>{item}</li>)}
                    </ul>
                  </Col>
                </Row>
              }

              {value === "rules" &&
                <Row className="p-4 p-lg-5 bg-white rounded-5 shadow mb-5">
                  <Col xs={12} className="mb-4">
                    <h3>Rules</h3>
                    <ul>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed ultrices nibh.</li>
                      <li>Donec a tempor purus, eget pharetra enim.</li>
                      <li>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</li>
                      <li>Quisque ornare purus eget ultrices vestibulum.</li>
                      <li>Cras condimentum blandit nisi at rutrum.</li>
                      <li>Praesent fermentum lacus at mauris sollicitudin convallis.</li>
                    </ul>
                  </Col>
                </Row>
              }



              {/* Google Map Section */}
              <Row className="p-4 p-lg-5 bg-white rounded-5 shadow mb-5 gap-4 text-center text-capitalize">
                <Col xs={12}>
                  <h3>{`${item1.city} - ${item1.location}`}</h3>
                </Col>
                <Col xs={12}>
                  <iframe
                    title='map1'
                    src={item1.mapUrl}
                    height="400"
                    className="w-100 rounded-5"
                    loading="lazy">
                  </iframe>
                </Col>
              </Row>

              {/* Share Button Section */}
              <Row className="p-4 pe-md-5 p-lg-5 bg-white rounded-5 shadow mb-5 gap-4">
                <Col xs={12} className="text-md-center text-capitalize">
                  <h3>share this page on social media</h3>
                </Col>
                <Col xs={12}>
                  <ShareButtons eventName={item1.name} eventType={item1.eventType} eventDescription={item1.description} />
                </Col>
              </Row>

            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}

export default Details