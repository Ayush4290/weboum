import React from "react";
import "../style/webDesign.css";
import Sub_Header from "../Sub_Header";
import Days from "../about-us/Days";

const WebsiteDesign = () => {
  return (
    <>
    <Sub_Header title="Web Designing" />
    <section className="design-section py-5">
      <div className="container">
        {/* First Block */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h3 className="section-title">
              Entice your website visitors with<br /> jaw-dropping website designs!
            </h3>
            <p className="fst-italic mt-3">
              Hire web design experts to create compelling website designs and easily convert your visitors into consumers.
            </p>
            <p>
              Are you running a business for quite some time now but still haven’t tapped the power of the internet...
              <strong> web designers at</strong> Weboum Technology will go beyond your expectations.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src="image\web design.png" alt="Website Design" className="img-fluid" />
          </div>
        </div>

        {/* Second Block */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img src="image\web-design 2.png" alt="Design Team" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h4 className="section-title">We leave no stone unturned to<br /> Drive Superior Outcomes!</h4>
            <p>Utilities cutting-edge technologies, we help you entice your users with compelling designs...</p>
            <p>Avail of our responsive website and mobile application design services...</p>
            <p>With years of experience in the industry, we are well-aware of what works...</p>
          </div>
        </div>

        {/* Third Block */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h3 className="section-title">Let our experts make your website<br /> design project a huge success!</h3>
            <p>We design websites, keeping your prospects and consumer behavior in mind...</p>
          </div>
          <div className="col-md-6 text-center">
            <img src="image\webdesign3.jpg" alt="Website Design" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="why-choose-us">
        <h2>Why Choose Weboum Technology As Your Website Design Partner?</h2>
        <ul>
          {[
            "Dynamic and proven Approach",
            "Affordable and high-quality web design services.",
            "We use the latest technology...",
            "Extensive experience in designing websites...",
            "We provide the best security features...",
            "We design and develop websites that are SEO friendly...",
            "No hidden costs charged...",
            "100% free lifetime technical support.",
            "Tab and smartphone friendly...",
            "Our team is always available at your service..."
          ].map((point, idx) => (
            <li key={idx}>
              <span className="tick">✔️</span>
              <span className="highlight">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
    <Days />
    </>
   
  );
};

export default WebsiteDesign;
