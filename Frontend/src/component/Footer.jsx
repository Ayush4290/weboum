import React from "react";
import "./style/Footer.css";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-inner">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/image/logo-1.png" alt="Weboum Logo" />
          </div>
          <div className="footer-description">
            Weboum empowers small businesses and startups with high-impact
            digital solutions—stunning websites, powerful apps, and strategic
            marketing—to boost visibility, attract customers, and drive real
            growth!
          </div>
        </div>

        <div className="footer-section">
          <h4 className="top-part">Links</h4>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/about-us">About Us</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/careers">Careers</a>
            <a href="/contact">Contact</a>
            <a href="/hire">Hire Developer</a>
            <a href="/request-a-quote">Request a quote</a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="top-part">Services</h4>
          <div className="footer-services">
            <a href="/application-development">Application Development</a>
            <a href="/web-designing">Web Designing</a>
            <a href="/web-development">Web Development</a>
            <a href="/digital-marketing">Digital Marketing</a>
            <a href="/graphic-design">Graphic Design</a>
            <a href="/content-writing">Content Writing</a>
            <a href="/logo-designs">All Logos Designs</a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="top-part">Subscribe Newsletter</h4>
          <div className="footer-newsletter">
            <input type="email" placeholder="Email Address" />
            <button>SUBMIT</button>
            <p className="top-part">Follow us on:</p>
            <div className="footer-social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        &copy; 2025 Weboum Technology Private Limited. All rights reserved.
        <br />
        Terms of services
      </div>
    </div>
  );
};

export default Footer;
