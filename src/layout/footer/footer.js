import React from "react";
import { Link } from "react-router-dom";
import "./footer.sass";

function Footer() {
  return (
    <footer className="footer">
    <div className="footer__addr">
      <h1 className="footer__logo">Amazon</h1>
          
      <h2>Contact</h2>
      
      <address>
        Somewhere In, The World<br />
        <a className="footer__btn" href="mailto:ashrfakrm64@gmail.com">Email Us</a>
      </address>
    </div>
    
    <ul className="footer__nav">
      <li className="nav__item">
        <h2 className="nav__title">Quick Links</h2>
  
        <ul className="nav__ul">
          <li>
            <Link to="/">Home</Link>
          </li>
  
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
              
          <li>
          <Link to="/payment">Payment</Link>
          </li>
          <li>
          <Link to="/login">Sign in</Link>

          </li>
        </ul>
      </li>
      
     
      
     
    </ul>
    
    <div className="legal">
      <p>&copy; 2022 Something. All rights reserved.</p>
      
      <div className="legal__links">
        <span>Made with <span className="heart">❤</span> Nutcracker</span>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
