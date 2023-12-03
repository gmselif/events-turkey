import React, { useState } from 'react'
import { useQuery } from "react-query";
import GetById from '../../Network/GetById'
import { useParams } from 'react-router-dom'
import Slider from '../../Components/Slider'
import ShareButtons from '../../Components/ShareButtons';
import { Container, Row, Col, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import Breadcrumbs from '../../Components/Breadcrumbs'
import { Link } from "react-router-dom";

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
          <Row className="column-gap-5 justify-content-center">
            <Col xs={12} className="mt-5 pt-5">
              <Breadcrumbs eventName={data[0].name} />
            </Col>
            <Col xs={12} md={3}>{/*Picture*/}
              <Slider pictures={data[0].images} />
            </Col>

            {/* Right Column */}
            <Col xs={11} md={8} className="mt-5">

              {/* Explanation Section */}
              <Row className="p-4 p-lg-5 bg-white rounded-5 shadow mb-5">
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
                <Col xs={12}>
                  <Row>
                    <Col xs={12} lg={8}>
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
              {value == "tickets" && data[0].price &&
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
                            <p style={{ fontSize: "30px" }} className="me-4">
                              {data[0].price} $
                            </p>
                          </Col>
                          <Col xs={12}>
                            <Button variant="warning" className="h-100 px-4 px-lg-5 py-0 text-uppercase" style={{ borderTopLeftRadius: "30px" }} >
                              <i class="bi bi-basket2-fill me-lg-1 me-xl-4" style={{ fontSize: "1.5rem" }}></i>
                              Buy
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              }{/*Buy A Ticket Section END*/}

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



              {/* Google Map Section */}
              <Row className="p-4 p-lg-5 bg-white rounded-5 shadow mb-5 gap-4 text-center text-capitalize">
                <Col xs={12}>
                  <h3>{`${data[0].city} - ${data[0].location}`}</h3>
                </Col>
                <Col xs={12}>
                  <iframe
                    src={(googleMap.find(item => item.city.toLowerCase() === data[0].city.toLowerCase())).url}
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
                  <ShareButtons eventName={data[0].name} eventType={data[0].eventType} eventDescription={data[0].description} />
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