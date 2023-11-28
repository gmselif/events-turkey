import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Carousel, Image } from 'react-bootstrap';

//Pictures
import picture1 from '../../assets/Pictures/picture1.png'
import picture2 from '../../assets/Pictures/picture2.png'
import picture3 from '../../assets/Pictures/picture3.png'
import picture4 from '../../assets/Pictures/picture4.png'

function Slider({ pictures }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

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