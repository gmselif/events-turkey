import React from 'react'
import { useQuery } from "react-query";

import Slider from '../../Components/Slider'
import { Container, Row, Col } from 'react-bootstrap'
import GetById from '../../Network/GetById'
import { useParams } from 'react-router-dom'

function Details() {
  const { id } = useParams();
  const { status, data } = useQuery("event", () => GetById(id))
  console.log(data)
  return (
    <div style={{ marginTop: "10vh" }}>
      <Container>
        {status === "error" && <p>Error fetching data</p>}
        {status === "loading" && <p>Fetching data...</p>}
        {status === "success" && (
          <>
            <Row>
              <Col sm={6}>
                <Slider pictures={data[0].images} />
              </Col>
            </Row>
          </>
        )}
      </Container>
    </div>
  )
}

export default Details