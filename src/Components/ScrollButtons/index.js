import React, { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ScrollButtons() {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
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
        <i class="bi bi-arrow-up-circle-fill" onClick={scrollToTop} style={{fontSize: "2rem", display: visible ? 'inline' : 'none'}} />
      </div>
      <div xs={12}>
        <i class="bi bi-arrow-down-circle-fill" onClick={scrollToBottom} style={{fontSize: "2rem", display: visible ? 'inline' : 'none'}} />
      </div>
    </div>
  );
}

export default ScrollButtons;