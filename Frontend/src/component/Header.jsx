import React from 'react'
import "./style/Header.css"

const Header = () => {
  return (
    <div className="main-container">
        {/* Header  */}
        <header className="navbar">
          <div className="navbar-inner">
            <a className="logo" href="#">
              <img
                src="/image/logo-1.png"
                alt="Omega Prime Trading Logo"
                className="logo-img"
              />
            </a>

            <button className="menu-toggle" aria-label="Toggle navigation">
              <span className="menu-icon"></span>
            </button>

            <div className="menu" id="navbarMenu">
              <ul className="menu-list">
                <li>
                  <a href="/about-us" className="menu-link active">
                    About Us
                  </a>
                </li>
                <li className="menu-dropdown">
                  <a href="#" className="menu-link">
                    Services
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="#">Service 1</a>
                    </li>
                    <li>
                      <a href="#">Service 2</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-dropdown">
                  <a href="#" className="menu-link">
                    Solutions
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="#">Solution 1</a>
                    </li>
                    <li>
                      <a href="#">Solution 2</a>
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
                <li>
                  <a href="/contact" className="btn-contact">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
  )
}

export default Header