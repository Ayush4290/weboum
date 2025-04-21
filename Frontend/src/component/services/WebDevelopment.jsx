// WebDevelopment.jsx
import React, { useEffect } from 'react';
import '../style/WebDevelopment.css';


const WebDevelopment = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    script.onload = () => {
      if (window.AOS) window.AOS.init();
    };
    document.body.appendChild(script);
  }, []);

  const processSteps = [
    "Custom Web App Development",
    "Defining Web Application",
    "Web Application Structure",
    "Research & UX Workflow",
    "Third-Party Software Selections",
    "Prototyping & Design Testing",
  ];

  return (
    <div className="web-development">
      {/* Feature Cards Section */}
      <section className="feature-section">
        <div className="feature-cards">
          {[
            {
              icon: 'fas fa-expand-arrows-alt',
              title: 'Refreshingly Unique Model:',
              text: 'Transparent & Local Interaction\nReal-time Collaboration & Accountability\nFull-time, Dedicated Developers',
            },
            {
              icon: 'fas fa-users-cog',
              title: 'One-Stop Development Shop:',
              text: '2000 In-house Developers\nBridge Any Skillset Gap\nIndustry Specific Technical Teams',
            },
            {
              icon: 'fas fa-file-code',
              title: 'Low Cost, High Productivity Services:',
              text: 'No Overtime or Hidden Fees\nFree QA and Free Management\nSave 50 - 75% on Development Costs!',
            },
            {
              icon: 'fas fa-bolt',
              title: 'Work for Hire Services:',
              text: 'Start Your Project Within 48 Hours\nWe Foster Long Term Relationships\nOver 21 Years in Service to Our Customers',
            },
          ].map((item, index) => (
            <div className="feature-card" key={index}>
              <i className={item.icon}></i>
              <h5>{item.title}</h5>
              <p>{item.text.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Overview */}
      <section className="features-intro">
        <p>
          Whether you require a newly developed website to enhance customer engagement, a web portal to improve visibility and organization, or a robust and feature-rich web app to automate business processes, WTPL has the solution.
        </p>
        <div className="features-boxes">
          <div className="features-column">
            <div className="feature-box">
              <i className="bi bi-laptop feature-icon"></i>
              <div>
                <div className="feature-title">Custom Web Application Development</div>
                <p className="feature-text">Custom ERP, E-Commerce, CRM & Training app integration.</p>
              </div>
            </div>
            <div className="feature-box">
              <i className="bi bi-code-slash feature-icon"></i>
              <div>
                <div className="feature-title">Diverse Coding Experience</div>
                <p className="feature-text">JavaScript, PHP, Python, Ruby, .NET, AngularJS & more.</p>
              </div>
            </div>
          </div>
          <div className="features-column">
            <div className="feature-box">
              <i className="bi bi-diagram-3 feature-icon"></i>
              <div>
                <div className="feature-title">No Cookie-Cutter Solutions</div>
                <p className="feature-text">Tailored solutions for Integration, QA, Deployment.</p>
              </div>
            </div>
            <div className="feature-box">
              <i className="bi bi-gear feature-icon"></i>
              <div>
                <div className="feature-title">Maintenance & Support</div>
                <p className="feature-text">Patching, debugging, updates and full-time support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="process-section">
        <h2 className="section-title">Our Custom Web Development Process</h2>
        <p className="section-subtitle">
          We meet the demands of your business by executing our strategically planned processes for delivering top-of-the-line Custom Websites & Applications.
        </p>
        <div className="process-container">
          {processSteps.map((title, index) => (
            <div className="process-item" key={index}>
              <i className="bi bi-check2-circle process-icon"></i>
              <div>
                <div className="process-title">{title}</div>
                <p className="process-text">Details about {title.toLowerCase()} goes here.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
