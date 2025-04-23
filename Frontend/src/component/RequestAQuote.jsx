// QuotePage.jsx
import React, { useState } from 'react';
import './style/RequestAQuote.css';

const RequestAQuote = () => {
  // State to track selected tags for each section
  const [skillsSelected, setSkillsSelected] = useState([]);
  const [techSelected, setTechSelected] = useState([]);
  const [workTimeSelected, setWorkTimeSelected] = useState(null);

  // Skills section tags
  const skills = ['React', 'Angular', 'PHP', 'Node', 'HTML', 'Javascript', 'SEO'];
  
  // Technology section tags
  const technologies = [
    'Creative UI/UX Designing', 
    'E-Commerce Solutions', 
    'App Development', 
    'Web Application',
    'Digital Marketing', 
    'Technical Support', 
    'Business Intelligence Software',
    'Custom Software Technology'
  ];
  
  // Work Time section tags
  const workTimes = ['Full-Time', 'Part-Time'];

  // Handle tag selection for multi-select sections
  const handleMultiSelect = (item, currentSelected, setSelected) => {
    if (currentSelected.includes(item)) {
      setSelected(currentSelected.filter(i => i !== item));
    } else {
      setSelected([...currentSelected, item]);
    }
  };

  // Handle tag selection for single-select sections
  const handleSingleSelect = (item, setSelected) => {
    setSelected(item);
  };

  return (
    <div className="container">
      <h2 className="subtitle">Weboum – Send Us A Message</h2>
      <h1 className="title">Do You Have Any Questions? We'll Be Happy To Assist!</h1>

      <div className="section" data-select="multi">
        <h3>Skills</h3>
        <div className="tags">
          {skills.map((skill) => (
            <button 
              key={skill}
              className={`tag ${skillsSelected.includes(skill) ? 'selected' : ''}`}
              onClick={() => handleMultiSelect(skill, skillsSelected, setSkillsSelected)}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      <div className="section" data-select="multi">
        <h3>Technology</h3>
        <div className="tags">
          {technologies.map((tech) => (
            <button 
              key={tech}
              className={`tag ${techSelected.includes(tech) ? 'selected' : ''}`}
              onClick={() => handleMultiSelect(tech, techSelected, setTechSelected)}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      <div className="section" data-select="single">
        <h3>Work Time</h3>
        <div className="tags">
          {workTimes.map((time) => (
            <button 
              key={time}
              className={`tag ${workTimeSelected === time ? 'selected' : ''}`}
              onClick={() => handleSingleSelect(time, setWorkTimeSelected)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="btn-container">
        <button className="continue-btn">CONTINUE</button>
      </div>
    </div>
  );
};

export default RequestAQuote;