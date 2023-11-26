import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  var thisYear = new Date().getFullYear();
  var address = "A108 Adam Street New York, NY 535022 United States"
  var email = "info.tr@gmail.com"
  var phone = "+90 555 555 5555"

  return (
    <footer className="page-footer blue py-5 bg-dark">
      <div className="container text-left border-bottom pt-2 pb-5">
        <div className="row pb-5">
          <div className="col-lg-3">
            <h2 className="text-uppercase text-warning">Events Turkey</h2>
          </div>
          <div className="col-lg-9">
            <p className="text-light">Events Turkey, organizatörler tarafından düzenlenen farklı kategorilerdeki etkinlikleri, dijital medya platformlarını kullanarak milyonlara ulaştıran yeni nesil online bilet satış sitesidir.</p>
          </div>
        </div>
        <div className="row pt-5">

          {/*<hr className="clearfix w-100 d-md-none pb-0" />*/}

          <div className="col-md-3">
            <h5 className="text-uppercase text-light">Menu</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none" >Home</Link></li>
              <li><Link to="/AboutUs" className="text-light text-decoration-none" >About Us</Link></li>
              <li><Link to="/PastEvents" className="text-light text-decoration-none" >Past Events</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="text-uppercase text-light">Categories</h5>
            <ul className="list-unstyled">
              <li><Link to="/Concerts" className="text-light text-decoration-none">Concerts</Link></li>
              <li><Link to="/Theaters" className="text-light text-decoration-none">Theaters</Link></li>
              <li><Link to="/Festivals" className="text-light text-decoration-none">Festivals</Link></li>
              <li><Link to="/Standups" className="text-light text-decoration-none">Standups</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="text-uppercase text-light">Contact Us</h5>
            <p  className="text-light">{address}</p>
            <p  className="text-light"><b>Phone:</b> {phone}</p>
            <p  className="text-light"><b>Email:</b> {email}</p>
          </div>

          <div className="col-md-3">
            <h5 className="text-uppercase text-light">Follow Us</h5>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center pt-5 text-light">
        © {thisYear} Copyright: 
        <Link to="/" className="text-light text-decoration-none"> Events Turkey. </Link>
        All Rights Reserved.
        <br />
        Designed By 
        <a href="https://github.com/gmselif/" className="text-light text-decoration-none"> Elif Gümüş. </a>
      </div>
    </footer>
  )
}

export default Footer