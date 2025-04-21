import React, { useState } from "react";
import "./style/Header.css";
import { BiCaretDown } from "react-icons/bi";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="main-container">
      {/* Header */}
      <header className="navbar">
        <div className="navbar-inner">
          <a className="logo" href="/">
            <img
              src="/image/logo-1.png"
              alt="Omega Prime Trading Logo"
              className="logo-img"
            />
          </a>

          <button
            className="menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            <span className="menu-icon"></span>
          </button>

          <div className={`menu ${mobileMenuOpen ? "menu-open" : ""}`}>
            <ul className="menu-list">
              <li className="menu-dropdown">
                <div
                  className="menu-link"
                  onClick={() => toggleDropdown("about")}
                >
                  About Us <BiCaretDown className="menu-icon" />
                </div>
                <ul
                  className={`dropdown ${
                    activeDropdown === "about" ? "active" : ""
                  }`}
                >
                  <li>
                    <a href="/about-us">Who we are</a>
                  </li>
                  <li>
                    <a href="/why-us">Why Us Top 10 Reasons</a>
                  </li>
                  <li>
                    <a href="/sample-page">How We Work</a>
                  </li>
                  <li>
                    <a href="/careers">Careers</a>
                  </li>
                  <li>
                    <a href="/contact">Approach</a>
                  </li>
                </ul>
              </li>
              <li className="menu-dropdown">
                <div
                  className="menu-link"
                  onClick={() => toggleDropdown("services")}
                >
                  Services <BiCaretDown className="menu-icon" />
                </div>
                <ul
                  className={`dropdown ${
                    activeDropdown === "services" ? "active" : ""
                  }`}
                >
                  <li>
                    <a href="/application-developer">Application Development</a>
                  </li>
                  <li>
                    <a href="/web-developer">Web Development</a>
                  </li>
                  <li>
                    <a href="/web-designing">Web Designing</a>
                  </li>
                  <li>
                    <a href="/graphic-design">Graphic Design</a>
                  </li>
                  <li>
                    <a href="/digital-marketing-3">Digital Marketing</a>
                  </li>
                  <li>
                    <a href="/content-writing">Content Writing</a>
                  </li>
                </ul>
              </li>
              <li className="menu-dropdown">
                <div
                  className="menu-link"
                  onClick={() => toggleDropdown("solutions")}
                >
                  Solutions <BiCaretDown className="menu-icon" />
                </div>
                <ul
                  className={`dropdown ${
                    activeDropdown === "solutions" ? "active" : ""
                  }`}
                >
                  <li>
                    <a href="/devops">DevOps</a>
                  </li>
                  <li>
                    <a href="/product-lifecycle-management">
                      Product Lifecycle Management
                    </a>
                  </li>
                  <li>
                    <a href="/sla-support-services">SLA Support Services</a>
                  </li>
                  <li>
                    <a href="/backup-disaster-recovery">
                      Backup & Disaster Recovery
                    </a>
                  </li>
                  <li>
                    <a href="/web-hosting-services">Web Hosting Services</a>
                  </li>
                  <li>
                    <a href="/software-testing">Software Testing</a>
                  </li>
                  <li>
                    <a href="/shopify-developer">Shopify Developer</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/portfolio" className="menu-link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/careers" className="menu-link">
                  Careers
                </a>
              </li>
            </ul>
            <a href="/contact" className="btn-contact">
              Contact Us
            </a>
          </div>
        </div>
      </header>

      <div className="hero-section">
        <h1>Unlock unlimited growth with premium custom development</h1>
        <a href="/" className="cta-buttons">
          Start Building Today!
        </a>
      </div>
    </div>
  );
};

export default Header;
