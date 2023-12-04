import React, { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ScrollButtons() {
  const [visibleUp, setVisibleUp] = useState(false)
  const [visibleDown, setVisibleDown] = useState(true)
  

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight

    //If it is not scrolled to 300 don't show ScrollUp Button.
    if (scrolled > 300) {
      setVisibleUp(true)
    }
    else if (scrolled <= 300) {
      setVisibleUp(false)
    }

    //If it is scrolled to the bottom of the page, don't show ScrollDown Button.  
    if ( scrollHeight - (scrolled+clientHeight) <= 1 ) {
      setVisibleDown(false)
    } else {
      setVisibleDown(true)
    }
  };

  window.addEventListener('scroll', toggleVisible);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      right: "10px",
      zIndex: "1",
      cursor: "pointer",
      color: "#ffc107"
    }}>
      <div>
        <i className="bi bi-arrow-up-circle-fill"
          onClick={scrollToTop}
          style={{ fontSize: "2rem", display: visibleUp ? 'inline' : 'none' }}
        />
      </div>
      <div xs={12}>
        <i className="bi bi-arrow-down-circle-fill"
          onClick={scrollToBottom}
          style={{ fontSize: "2rem", display: visibleDown ? 'inline' : 'none' }}
        />
      </div>
    </div>
  );
}

export default ScrollButtons;