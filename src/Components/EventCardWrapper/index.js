import React, {useContext} from 'react'
import EventCard from '../eventCard'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import { Context } from '../../context';

function EventCardWrapper() {
  const { filteredData } = useContext(Context);

  return (
    <Container className='container my-5'>
      <Row className="row-gap-5 justify-content-center justify-content-sm-start">
          {
            filteredData.map(item => {
              return <EventCard key={item.id} item={item}></EventCard>
            })
          }
      </Row>
    </Container>
  )
}

export default EventCardWrapper