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
  console.log(data)
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
        </Container>
      )}
    </div>
  )
}

export default Details