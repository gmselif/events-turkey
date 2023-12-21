import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Footer() {
  var thisYear = new Date().getFullYear();
  var address = "A108 Adam Street New York, NY 535022 United States"
  var email = "info.tr@gmail.com"
  var phone = "+90 555 555 5555"

  const linkStyle = "text-light text-decoration-none"

  return (
    <footer className="page-footer blue py-5 bg-dark">
      <Container className="container text-left border-bottom pt-2 pb-5">
        <Row className="mb-5 mb-lg-5 px-4 px-sm-0">
          <Col xs={12} xl={3}>
            <h2 className="text-uppercase text-warning">Events Turkey</h2>
          </Col>
          <Col xs={12} xl={9}>
            <p className="text-light">Events Turkey, organizatörler tarafından düzenlenen farklı kategorilerdeki etkinlikleri, dijital medya platformlarını kullanarak milyonlara ulaştıran yeni nesil online bilet satış sitesidir.</p>
          </Col>
        </Row>

        <Row className="mt-xl-4 px-4 px-sm-0">
          {/*<hr className="clearfix w-100 d-md-none pb-0" />*/}

          <Col xs={12} md={2} lg={3} className="mb-5">
            <h5 className="text-uppercase text-light">Menu</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className={linkStyle} >Home</Link></li>
              <li><Link to="/AboutUs" className={linkStyle} >About Us</Link></li>
              <li><Link to="/past-events" className={linkStyle} >Past Events</Link></li>
            </ul>
          </Col>

          <Col xs={12} md={3} className="mb-5">
            <h5 className="text-uppercase text-light">Categories</h5>
            <ul className="list-unstyled">
              <li><Link to="/Concerts" className={linkStyle}>Concerts</Link></li>
              <li><Link to="/Theaters" className={linkStyle}>Theaters</Link></li>
              <li><Link to="/Festivals" className={linkStyle}>Festivals</Link></li>
              <li><Link to="/Standups" className={linkStyle}>Standups</Link></li>
            </ul>
          </Col>

          <Col xs={12} md={4} className="mb-5 pe-5">
            <h5 className="text-uppercase text-light">Contact Us</h5>
            <Row className="text-light align-items-center">
              <Col xs={2}>
                <i className="bi bi-geo-alt-fill" style={{ fontSize: "2rem" }} />
              </Col>
              <Col xs={9}>
                {address}
              </Col>
            </Row>
            <Row className="text-light align-items-center">
              <Col xs={2}>
                <i className="bi bi-telephone-fill" style={{ fontSize: "2rem" }} />
              </Col>
              <Col xs={9}>
                {phone}</Col>
            </Row>
            <Row className="text-light align-items-center">
              <Col xs={2}>
                <i className="bi bi-envelope-at-fill" style={{ fontSize: "2rem" }} />
              </Col>
              <Col xs={9}>
                {email}</Col>
            </Row>
          </Col>

          <Col xs={12} md={3} lg={2} className="mb-3">
            <h5 className="text-uppercase text-light">Follow Us</h5>
            <a href="https://facebook.com/">
              <i className="bi bi-facebook text-light me-2" style={{ fontSize: "2rem" }} />
            </a>
            <a href="https://www.linkedin.com/in/elif-gumus/">
              <i className="bi bi-linkedin text-light me-2" style={{ fontSize: "2rem" }} />
            </a>
            <a href="https://twitter.com/">
              <i className="bi bi-twitter-x text-light me-2" style={{ fontSize: "2rem" }} />
            </a>
            <a href="https://www.instagram.com/">
              <i className="bi bi-instagram text-light me-2" style={{ fontSize: "2rem" }} />
            </a>
          </Col>
        </Row>
      </Container>

      <div className="footer-copyright text-center pt-5 text-light">
        © {thisYear} Copyright:
        <Link to="/" className="text-light"> Events Turkey. </Link>
        All Rights Reserved.
        <br />
        Designed By
        <a href="https://github.com/gmselif/" className="text-light"> Elif Gümüş. </a>
      </div>
    </footer>
  )
}

export default Footer