import React, { useState } from 'react'
import { useQuery } from "react-query";
import GetById from '../../Network/GetById'
import { useParams } from 'react-router-dom'
import Slider from '../../Components/Slider'
import ShareButtons from '../../Components/ShareButtons';
import { Container, Row, Col, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import Breadcrumbs from '../../Components/Breadcrumbs'

function Details() {
  const { id } = useParams();
  const { status, data } = useQuery("event", () => GetById(id))

  const googleMap = [
    {
      city: "İstanbul",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.3210584263!2d28.682532381814802!3d41.00537021655295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zAnkaraxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1701098851434!5m2!1str!2str"
    },
    {
      city: "Ankara",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.30043014634!2d32.597955231661956!3d39.9035232982699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara!5e0!3m2!1str!2str!4v1701154423390!5m2!1str!2str"
    },
    {
      city: "İzmir",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200065.48497012627!2d26.91490723497402!3d38.41782866459973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a762cacd%3A0x628cbba1a59ce8fe!2zxLB6bWly!5e0!3m2!1str!2str!4v1701154497450!5m2!1str!2str"
    },
  ]


  const [fixed, setFixed] = useState(true)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled <= 400) {
      setFixed(true)
    } else if (scrolled > 400) {
      setFixed(false)
    }
  };
  window.addEventListener('scroll', toggleVisible);

  const [value, setValue] = useState("")


  return (
    <>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <Container className="mt-5">
          <Row className="column-gap-5">
            <Col xs={12} className="mt-5 pt-5">
              <Breadcrumbs eventName={data[0].name} />
            </Col>
            <Col xs={3}>{/*Picture*/}
              {fixed ? (
                <Row className='bg-black w-100'>
                  <Col xs={3} className="top-5 position-fixed">
                    <Slider pictures={data[0].images} />
                  </Col>
                </Row>
              ) : (
                <Row className="align-items-baseline">
                  <Col xs={3} className="top-5" >
                    <Slider pictures={data[0].images} />
                  </Col>
                </Row>
              )
              }
            </Col>

            {/* Right Column */}
            <Col xs={8} className="mt-5">
              {/* First Row */}
              <Row className="p-lg-5 bg-white rounded-5 shadow mb-5">
                <Col xs={12}>
                  <h2>{data[0].name}</h2>
                </Col>
                <Col xs={12}>
                  <i className="bi bi-tag-fill text-warning me-3" style={{ fontSize: "1.5rem" }} />
                  <p className="d-inline-block text-secondary text-capitalize" style={{ fontSize: "1.2rem" }}>
                    {data[0].eventType}
                  </p>
                </Col>
                <Col xs={12} className="rounded-4 p-4 mb-5" style={{ backgroundColor: "#f1f1f1" }}>
                  <Row>
                    <Col xs={12}>
                      <h5>Event Description</h5>
                    </Col>
                    <Col xs={12}>
                      {data[0].description}
                    </Col>
                  </Row>
                </Col>
                {/*<Col xs={12} className="mb-5">
                  <button style={{ border: "none", borderRightStyle: "solid", fontSize: "20px" }} className="text-warning bg-white fw-bold ps-0 pe-5">Tickets</button>
                  <button style={{ border: "none", borderRightStyle: "solid", fontSize: "20px" }} className="text-warning bg-white fw-bold px-5">Performers</button>
                  <button style={{ border: "none", borderRightStyle: "solid", fontSize: "20px" }} className="text-warning bg-white fw-bold px-5">Rules</button>
                </Col>*/}
                <Col xs={12}>
                  <Row>
                    <Col xs={8}>
                      <Button variant="outline-warning" size="lg" onClick={() => setValue("tickets")}>
                        Tickets
                      </Button>
                      <Button variant="outline-warning" size="lg" onClick={() => setValue("performers")}>
                        Performers
                      </Button>
                      <Button variant="outline-warning" size="lg" onClick={() => setValue("rules")}>
                        Rules
                      </Button>
                    </Col>
                    <Col xs={4}>
                      <Button variant="danger" size="lg">
                        Add Favorities
                        <i className="bi bi-heart-fill text-white ms-3" />
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>

              {/* Second Row*/}
              {value == "tickets" && data[0].price &&
                <Row className="p-lg-5 bg-white rounded-5 shadow mb-5">
                  <Col xs={12} className="mb-4">
                    <Row className="align-items-center justify-content-between">
                      <Col xs={9}>
                        <h3>Buy a Ticket</h3>
                      </Col>
                      <Col xs={3} className="text-end">
                        <h6>Choose a date</h6>
                      </Col>
                    </Row>
                  </Col>

                  {/*Buy A Ticket Section*/}
                  <Col xs={12} className="border border-1 border-secondary rounded-5 text-black ps-4 pt-3 pb-0 pe-0 overflow-hidden">
                    <Row>
                      <Col xs={8}>
                        <Row>
                          <Col xs={12} className="text-dark-emphasis">
                            <h5>{data[0].startDate}</h5>
                          </Col>
                          <Col xs={12} className="text-dark-emphasis mb-4">
                            <h6>{`${data[0].city} - ${data[0].location}`}</h6>
                          </Col>
                          <Col xs={12} className="text-warning">
                            <i class="bi bi-easel2-fill me-4" style={{ fontSize: "1.5rem" }} />
                            <p className="d-inline-block">Choose your seat</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={4} className="text-end">
                        <Row className='h-100'>
                          <Col xs={12}>
                            <p style={{ fontSize: "30px" }} className="pr-4">
                              {data[0].price} $
                            </p>
                          </Col>
                          <Col xs={12}>
                            <Button variant="warning" style={{ borderTopLeftRadius: "30px" }} className="h-100 px-5 py-0 text-uppercase">
                              <i class="bi bi-basket2-fill me-4" style={{ fontSize: "1.5rem" }}></i>
                              Buy
                            </Button>
                          </Col>
                        </Row>
                      </Col>

                    </Row>
                  </Col>

                </Row>
              }

              {value == "performers" &&
                <Row className="p-lg-5 bg-white rounded-5 shadow mb-5">
                  <Col xs={12}>

                  </Col>
                </Row>
              }

              {value == "rules" &&
                <Row className="p-lg-5 bg-white rounded-5 shadow mb-5">
                  <Col xs={12}>

                  </Col>
                </Row>
              }

              {/* Share Button Section */}
              <Row className="p-lg-5 bg-white rounded-5 shadow mb-5">
                <Col xs={12}>
                  <ShareButtons eventName={data[0].name} eventType={data[0].eventType} eventDescription={data[0].description} />
                </Col>
              </Row>

              {/* Google Map Section */}
              <Row className="p-lg-5 bg-white rounded-5 shadow mb-5">
                <Col xs={12}>
                  <iframe
                    src={(googleMap.find(item => item.city.toLowerCase() === data[0].city.toLowerCase())).url}
                    height="450"
                    style={{ border: "0", width: "100%" }}
                    loading="lazy">
                  </iframe>
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