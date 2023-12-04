import React, {useContext} from 'react'
import EventCard from '../EventCard'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import { Context } from '../../Context';

function EventCardWrapper() {
  const { filteredData } = useContext(Context);

  return (
    <Container className='container pb-5'>
      <Row>
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