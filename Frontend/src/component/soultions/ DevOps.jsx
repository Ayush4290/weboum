import React from "react";
import "../style/devops.css";
import Sub_Header from "../Sub_Header";
import Days from "../about-us/Days";

const DevOps = () => {
  return (
    <>
      <Sub_Header title="DevOps" />
      <div className="page">
        <h1 className="page-title">DevOps Services – WebOum Technology</h1>

        <div className="section-row">
          <div className="section-text">
            <h2 className="section-heading">
              Accelerate Your DevOps Journey To Achieve Agility And Remove
              Bottlenecks in Software Development!
            </h2>
            <p className="italic">
              DevOps is a constructive disruptor that brings technologies,
              processes, and people together...
            </p>
            <p>
              At WebOum, backed by our custom DevOps solutions, we provide
              businesses with the ability to constantly roll out enhanced
              business capabilities...
            </p>
            <p>
              Our dedicated DevOps teams have obtained impressive expertise in
              the industry...
            </p>
          </div>
          <div className="section-image">
            <img src="image/devops/devOps1.png" alt="DevOps Infinity Loop" />
          </div>
        </div>

        <div className="section-row">
          <div className="section-image">
            <img
              src="image/devops/devOps2.jpg"
              alt="DevOps Technology Illustration"
            />
          </div>
          <div className="section-text">
            <h2 className="section-heading">
              Our DevOps Expertise Has Led DevOps Innovation For Many
              Businesses!
            </h2>
            <p>
              We have made a huge difference in accelerating the growth of
              numerous businesses...
            </p>
            <p>
              We help businesses streamline and automate the entire flow of
              their product lifecycle...
            </p>
            <p>
              DevOps services provided by our professionals enable businesses to
              enjoy the stability...
            </p>
          </div>
        </div>

        <div className="benefits">
          <h2 className="section-heading center">
            Avail Our DevOps Services And Enjoy Several Benefits!
          </h2>
          <div className="benefits-grid">
            {[
              {
                title: "Enhance the Quality of Pipeline:",
                img: "image/devops/compass.png",
                text: "Automation of quality checks throughout the pipeline...",
              },
              {
                title: "Continuous Assessment of Business Risks:",
                img: "image/devops/simit.png",
                text: "We build systems that can rapidly test and help our clients assess risks...",
              },
              {
                title: "Inspire Ownership:",
                img: "image/devops/pointing-right.png",
                text: "DevOps helps instill a culture of ownership and commitment...",
              },
              {
                title: "DevOps Transformation",
                img: "image/devops/grid.png",
                text: "Our teams support DevOps transformation and automation...",
              },
              {
                title: "DevOps Consulting",
                img: "image/devops/copy.png",
                text: "We provide consulting services to enable IT departments...",
              },
            ].map((benefit, i) => (
              <div key={i} className="benefit-item">
                <img src={benefit.img} alt={benefit.title} />
                <div>
                  <h3 className="benefit-p">{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="call-to-action">
            Let’s Build And Deliver Software Quicker, In A Repeatable And
            Consistent Way!
          </h1>
          <p className="call-to-action-text">
            Every business understands the frequent delivery of new code and
            features...
          </p>
          <p className="call-to-action-text">
            Get started sooner than later to ensure rapid delivery of top-notch
            application process. Feel free to contact us!
          </p>
        </div>
      </div>
      <Days />
    </>
  );
};

export default DevOps;
