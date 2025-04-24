import React from "react";
import "../style/Days.css";

const Days = () => {
  return (
    <>
      <section className="offer-section">
        <div className="offer-content">
          <div className="support-text">
            <h6>Custom Software Development & Enterprises Solutions</h6>
            <div className="highlight-line"></div>
            <h2>30-Days FREE Support</h2>
            <h3>100% Satisfaction Guaranteed</h3>
            <hr />
            <p>
              Since 2012, we deliver 100% project success, with unique
              products...
            </p>
            <ul>
              <li>
                <strong>24/7 Support:</strong> Email, Call, or Skype
              </li>
              <li>Dedicated Team</li>
              <li>Exceptional Consultation</li>
              <li>Trusted by Global Companies</li>
            </ul>
            <a href="/request-a-quote" className="quote-btn">
              Request A FREE Quote ➜
            </a>
          </div>
          <div className="image-container">
            <img src="/image/android-app.jpg" alt="Android App Illustration" />
          </div>
        </div>
      </section>

      <section className="DigitalMarketing-connect-section">
        <div className="DigitalMarketing-connect-container">
          <div>
            <h2>What product can we engineer for you?</h2>
            <p>
              Tell us a little about yourself in the form below and we'll get in
              touch soon for product consultation.
            </p>
          </div>
          <a href="#contact-form">CONNECT WITH EXPERTS</a>
        </div>
      </section>
    </>
  );
};

export default Days;
