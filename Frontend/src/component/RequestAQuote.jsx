import React from "react";
import "./style/RequestAQuote.css";
import Days from "./about-us/Days";

const RequestAQuote = () => {
  const skills = ["React", "Angular", "PHP", "Node", "HTML", "Javascript", "SEO"];
  const technologies = [
    "Creative UI/UX Designing", "E-Commerce Solutions", "App Development",
    "Web Application", "Digital Marketing", "Technical Support",
    "Business Intelligence Software", "Custom Software Technology"
  ];
  const workTimes = ["Full-Time", "Part-Time"];

  return (
  <>
    <div className="requestaQuote-container">
      <h4 className="requestaQuote-subtitle">Weboum – Send Us A Message</h4>
      <h2 className="requestaQuote-title">
        Do You Have Any Questions? We’ll Be Happy To Assist!
      </h2>

      <div className="requestaQuote-section">
        <h4 className="requestaQuote-heading">Skills</h4>
        <div className="requestaQuote-tags">
          {skills.map((skill, index) => (
            <span className="requestaQuote-tag" key={index}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="requestaQuote-section">
        <h4 className="requestaQuote-heading">Technology</h4>
        <div className="requestaQuote-tags">
          {technologies.map((tech, index) => (
            <span className="requestaQuote-tag" key={index}>{tech}</span>
          ))}
        </div>
      </div>

      <div className="requestaQuote-section">
        <h4 className="requestaQuote-heading">Work Time</h4>
        <div className="requestaQuote-tags">
          {workTimes.map((time, index) => (
            <span className="requestaQuote-tag" key={index}>{time}</span>
          ))}
        </div>
      </div>

      <div className="requestaQuote-button-container">
        <button className="requestaQuote-button">CONTINUE</button>
      </div>
    </div>
   <Days/>
  </>
  );
};

export default RequestAQuote;
