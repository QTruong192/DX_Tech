import React from "react";
import "./footer.scss";
import logo2 from "../../assets/images/logo2.png";
import ifb from "../../assets/images/iconfb.png";
import iin from "../../assets/images/iconin.png";
import itw from "../../assets/images/icontw.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-header">
          <div className="footer-logo">
            <img src={logo2} alt="Positivus" />
          </div>
          <nav className="footer-nav">
            <a href="#about">About us</a>
            <a href="#services">Services</a>
            <a href="#cases">Use Cases</a>
            <a href="#pricing">Pricing</a>
            <a href="#blog">Blog</a>
          </nav>
          <div className="social-links">
            <a href="#linkedin" className="social-link linkedin">
              <img src={ifb} alt="" />
            </a>
            <a href="#facebook" className="social-link facebook">
              <img src={iin} alt="" />
            </a>
            <a href="#twitter" className="social-link twitter">
              <img src={itw} alt="" />
            </a>
          </div>
        </div>

        <div className="footer-info">
          <div className="contact-info">
            <div className="contact-label">Contact us:</div>
            <div className="contact-details">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: 1234 Main St
                <span>Moonstone City, Stardust State 12345</span>
              </p>
            </div>
          </div>
          <div className="newsletter">
            <div className="newsletter-form">
              <input type="email" placeholder="Email" />
              <button type="button">Subscribe to news</button>
            </div>
          </div>
        </div>
        <div></div>
        <div className="footer-bottom">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
