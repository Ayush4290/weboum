import React from "react";
import "./style/All_Logos.css";
import Days from "./about-us/Days";
import Sub_Header from "./Sub_Header";

const logos = [
  "logo1-1.jpg", "logo-2.jpg", "logo-3.jpg", "logo-4.jpg", "logo-5.jpg",
  "logo-6.jpg", "logo-7.jpg", "logo-8.jpg", "logo-9.jpg", "logo-10.jpg",
  "logo-11.jpg", "logo-12.jpg", "logo-13.jpg", "logo-14.jpg"
];

const All_Logos = () => {
  return (
    <>
    <Sub_Header/>
    <div className="logo-grid">
      {logos.map((file, index) => (
        <div key={index} className="logo-item">
          <img src={`/image/logo-image/${file}`} alt={`Logo ${index + 1}`} />
        </div>
      ))}
    </div>
    <Days/>
    </>
  );
};

export default All_Logos;
