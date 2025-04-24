import React, { useState } from "react";
import "./style/Header.css";
import { BiCaretDown } from "react-icons/bi";
import menuData from "./data/header.json";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (menuKey) => {
    setActiveDropdown(activeDropdown === menuKey ? null : menuKey);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMainMenuClick = (menuLabel) => {
    if (
      menuLabel === "About Us" ||
      menuLabel === "Services" ||
      menuLabel === "Solutions"
    ) {
      navigate("/");
    }
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
              {/* Loop through the menu data */}
              {menuData.map((menu, index) =>
                menu.items ? (
                  <li className="menu-dropdown" key={index}>
                    <div
                      className="menu-link"
                      onClick={() => handleMainMenuClick(menu.label)}
                    >
                      {menu.label}

                      {menu.dropdownKey && (
                        <BiCaretDown
                          className="menu-icon"
                          onClick={() => toggleDropdown(menu.dropdownKey)}
                        />
                      )}
                    </div>
                    {menu.dropdownKey && (
                      <ul
                        className={`dropdown ${
                          activeDropdown === menu.dropdownKey ? "active" : ""
                        }`}
                      >
                        {menu.items.map((item, subIndex) => (
                          <li key={subIndex}>
                            <a href={item.href}>{item.label}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={index}>
                    <a
                      href={menu.href}
                      className={`menu-link ${
                        menu.isButton ? "btn-contact" : ""
                      }`}
                    >
                      {menu.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
