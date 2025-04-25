import React from "react";
import "./style/Footer.css";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-company-info">
          <div className="footer-logo">
            <img src="/image/logo-1.png" alt="Weboum Logo" />
            <span className="logo-text">empower your Growth</span>
          </div>
          <p className="company-description">
            Weboum empowers small businesses and startups with high-impact
            digital solutions—stunning websites, powerful apps, and strategic
            marketing—to boost visibility, attract customers, and drive real
            growth!
          </p>
        </div>

        <div className="footer-links-section">
          <h3>Links</h3>
          <div className="underline"></div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/hire-developer">Hire Developer</a>
            </li>
            <li>
              <a  href="/request-a-quote">
                Request a quote
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-services-section">
          <h3>Services</h3>
          <div className="underline"></div>
          <ul>
            <li>
              <Link to="/application-developer">Application Development</Link>
            </li>
            <li>
              <Link to="/web-designing">Web Designing</Link>
            </li>
            <li>
              <Link to="/web-developer">Web Development</Link>
            </li>
            <li>
              <Link to="/digital-marketing">Digital Marketing</Link>
            </li>
            <li>
              <Link to="/graphic-design">Graphic Design</Link>
            </li>
            <li>
              <Link to="/content-writing">Content Writing</Link>
            </li>
            <li>
              <Link to="/all-logos">All Logos Designs</Link>
            </li>
          </ul>
        </div>

        <div className="footer-newsletter-section">
          <h3>Subscribe Newsletter</h3>
          <div className="newsletter-form">
            <input type="email" placeholder="Email Address" />
            <button type="submit">SUBMIT</button>
          </div>
          <div className="social-section">
            <p>Follow us on:</p>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaTwitter />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
          © 2025 Weboum Technology Private Limited. All rights reserved. Terms
          of services
        </p>
      </div>
    </div>
  );
};

export default Footer;




