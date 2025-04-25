import React from "react";
import "../style/devOps.css";
import Sub_Header from "../Sub_Header";
import Days from "../about-us/Days";

const DevOps = () => {
  return (
    <>
      <Sub_Header  title="Devops"/>
      <h1 className="center-text">DevOps Services – WebOum Technology</h1>
      <div className="container">
        <div className="content">
          <h2>Accelerate Your DevOps Journey To Achieve Agility And Remove Bottlenecks in Software Development!</h2>
          <p className="italic">DevOps is a constructive disruptor that brings technologies, processes, and people, together, enabling the enterprises to deliver applications at their business' speed. It improves quality and efficiency in software development.</p>
          <p>At WebOum, backed by our custom DevOps solutions, we provide businesses with the ability to constantly roll out enhanced business capabilities. We emphasize automation, collaboration, communication, and integration.</p>
          <p>For several years now, our dedicated DevOps teams have obtained impressive expertise in the industry. They leverage their expertise to unite development and operations with the help of advanced DevOps techniques.</p>
        </div>
        <div className="image-container">
          <img src="image/devops/devOps1.png" alt="DevOps Infinity Loop" />
        </div>
      </div>

      <div className="section">
        <div className="image-box">
          <img src="image/devops/devOps2.jpg" alt="DevOps Technology Illustration" />
        </div>
        <div className="text-box">
          <h2>Our DevOps Expertise Has Led DevOps Innovation For Many Businesses!</h2>
          <p>We have made a huge difference in accelerating the growth of numerous businesses through our DevOps advisory services and their successful implementation.</p>
          <p>We help businesses streamline and automate the entire flow of their product lifecycle, right from the design, development, deployment and other operations.</p>
          <p>DevOps services provided by our professionals enable businesses to enjoy the stability of operations, cut the time taken for the development of applications and shorter turnaround time.</p>
        </div>
      </div>

      <div className="benefits-section">
        <h2>Avail Our DevOps Services And Enjoy Several Benefits!</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <img src="image/devops/compass.png" alt="Pipeline Quality Icon" />
            <div className="benefit-content">
              <h3>Enhance the Quality of Pipeline:</h3>
              <p>Automation of quality checks throughout the establishment pipeline to ensure getting the right tests done at the right stages. Enables accurate, rapid and actionable feedback.</p>
            </div>
          </div>

          <div className="benefit-item">
            <img src="image/devops/grid.png" alt="Business Risk Icon" />
            <div className="benefit-content">
              <h3>Continuous Assessment of Business Risks:</h3>
              <p>We build systems that can rapidly test and help our clients assess all associated risks in real time with continuous testing.</p>
            </div>
          </div>

          <div className="benefit-item">
            <img src="image/devops/pointing-right.png" alt="Ownership Icon" />
            <div className="benefit-content">
              <h3>Inspire Ownership:</h3>
              <p>DevOps helps instill a culture of ownership and commitment, making agile development cycles more effective and efficient.</p>
            </div>
          </div>

          <div className="benefit-item">
            <img src="image/devops/simit.png" alt="Transformation Icon" />
            <div className="benefit-content">
              <h3>DevOps Transformation</h3>
              <p>Our teams bring deep knowledge and experience to support DevOps transformation and automation for innovation across industries.</p>
            </div>
          </div>

          <div className="benefit-item">
            <img src="image/devops/copy.png" alt="Consulting Icon" />
            <div className="benefit-content">
              <h3>DevOps Consulting</h3>
              <p>We provide consulting services to enable IT departments to adopt the best DevOps practices and improve delivery cycles.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="center-text-section">
        <h1>Let's Build And Deliver Software Quicker, In A Repeatable And Consistent Way!</h1>
        <p>Every business understands the frequent delivery of new code and features for their products, as well as compliance and security of this process.</p>
        <p>Get started sooner than later to ensure rapid delivery of top-notch application process. Feel free to contact us!</p>
      </div>

      <Days />
    </>
  );
};

export default DevOps;