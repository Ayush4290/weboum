import React from "react";
import { FaRegSmile, FaChartLine, FaUsers } from "react-icons/fa";
import "../style/QualityAssuranceServices.css";
import Sub_Header from "../Sub_Header";
import Days from "../about-us/Days";

const cardData = [
  {
    icon: <FaRegSmile />,
    title: "Increased Brand Awareness",
    content:
      "Social media provides an easy and effective way to get your brand in front of people.",
  },
  {
    icon: <FaChartLine />,
    title: "Improved Traffic & SEO",
    content:
      "Sharing content drives traffic to your website and boosts your search engine visibility.",
  },
  {
    icon: <FaUsers />,
    title: "Better Customer Engagement",
    content:
      "Engage directly with customers and build lasting relationships through interactions.",
  },
];

const QualityAssuranceServices = () => {
  return (
    <>
      <Sub_Header title="Quality Assurance Services" />
      <div className="socialMedia-grid">
        {cardData.map((card, index) => (
          <div className="socialMedia-card" key={index}>
            <div className="socialMedia-iconWrapper">
              <div className="socialMedia-icon">{card.icon}</div>
            </div>
            <h3 className="socialMedia-title">{card.title}</h3>
            <p className="socialMedia-content">{card.content}</p>
          </div>
        ))}
      </div>
      <Days />
    </>
  );
};

export default QualityAssuranceServices;
