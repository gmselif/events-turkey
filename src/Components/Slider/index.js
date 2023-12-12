import React from 'react'
import PropTypes from 'prop-types';
import { Carousel, Image } from 'react-bootstrap';

//Pictures
import picture1 from '../../assets/picture1.png'
import picture2 from '../../assets/picture2.png'
import picture3 from '../../assets/picture3.png'
import picture4 from '../../assets/picture4.png'

function Slider({ pictures }) {
  return (
    <Carousel fade className="mt-5 w-100 overflow-hidden" /*style={{maxHeight: "60vh"}}*/>
      {
        pictures.map((picture, key) => {
          return <Carousel.Item key={key} >
            <Image src={picture} text="First slide" className="w-100" />
          </Carousel.Item>
        })
      }
    </Carousel>
  )
};

Slider.propTypes = {
  pictures: PropTypes.array
};

Slider.defaultProps = {
  pictures: [picture1, picture2, picture3, picture4]
};

export default Slider