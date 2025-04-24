import React from 'react';
import './style/Sub_Header.css';

const Sub_Header = ({ title = "All Logos" }) => {
  return (
    <div className="header-container">
      <h1 className="header-title">{title}</h1>
      <div className="header-dots"></div>
    </div>
  );
};

export default Sub_Header;