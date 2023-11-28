import React from 'react'
import { useQuery } from "react-query";
import GetById from '../../Network/GetById'
import { useParams } from 'react-router-dom'
import Slider from '../../Components/Slider'
import ShareButtons from '../../Components/ShareButtons';
import { Container, Row, Col } from 'react-bootstrap'

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

  return (
    <div style={{ marginTop: "10vh" }}>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <Container>
          <Row>
            <Col sm={6}>
              <Slider pictures={data[0].images} />
            </Col>
          </Row>
          <Row>
            <Col>
              <ShareButtons eventName={data[0].name} eventType={data[0].eventType} eventDescription={data[0].description} />
            </Col>
          </Row>
          <Row>
            <Col>
              <iframe
                src={(googleMap.find(item => item.city.toLowerCase() === data[0].city.toLowerCase())).url}
                width="600"
                height="450"
                style={{ border: "0" }}
                loading="lazy">
              </iframe>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  )
}

export default Details