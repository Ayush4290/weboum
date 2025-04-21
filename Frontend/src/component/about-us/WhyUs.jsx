import React from "react";
import "../style/WhyUs.css";

const WhyUs = () => {
  return (
    <>
      {/* Main Section */}
      <section className="section-wrapper">
        <div className="row">
          {/* Left Content */}
          <div className="left-content">
            <h6>Weboum – Customized IT Solutions</h6>
            <div className="highlight-line"></div>
            <h2>Why Choose <strong>us</strong></h2>
            <p>We Are Trusted Web Development, Web Design & Digital Marketing Company</p>
            <p>WTPL, (Weboum Technology Pvt. Ltd.) is one of the best digital marketing agencies in Chandigarh & Mohali, India...</p>
            <p>Our web design and development with digital marketing services will transform your marketing approach.</p>
            <p>So, get through one of the best Web development, Web design and Digital marketing companies...</p>

            {/* Features */}
            <div className="feature">
              <img src="check-icon.png" alt="Check" />
              <div>
                <h6>High Customer Retention Rate</h6>
                <p>We have a 100% retention rate...</p>
              </div>
            </div>
            <div className="feature">
              <img src="check-icon.png" alt="Check" />
              <div>
                <h6>Ability To Meet Deadlines</h6>
                <p>We are 100% clear on when work needs to be completed...</p>
              </div>
            </div>
            <div className="feature">
              <img src="check-icon.png" alt="Check" />
              <div>
                <h6>Professional Team Member</h6>
                <p>We have focused, creative team members...</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="form-box">
            <img src="image/featured-image.jpg" alt="Featured" />
            <h5>Request A Free Consultation</h5>
            <small>We Help Customers Digital Transformation By IT Solutions</small>
            <form>
              <input type="text" className="form-control" placeholder="Name" required />
              <input type="tel" className="form-control" placeholder="000-000-0000" required />
              <input type="email" className="form-control" placeholder="Email" required />
              <select className="form-select" required>
                <option>Project Development</option>
                <option value="1">Web Development</option>
                <option value="2">App Development</option>
                <option value="3">Digital Marketing</option>
              </select>
              <textarea className="form-control" rows="4" placeholder="Your Query / Message"></textarea>
              <div className="captcha-box">
                <input type="checkbox" id="captcha" />
                <label htmlFor="captcha"> I'm not a robot</label>
              </div>
              <button type="submit" className="btn-submit">MAKE A REQUEST</button>
            </form>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="offer-section">
        <div className="offer-content">
          <div className="support-text">
            <h6>Custom Software Development & Enterprises Solutions</h6>
            <div className="highlight-line"></div>
            <h2>30-Days FREE Support</h2>
            <h3>100% Satisfaction Guaranteed</h3>
            <hr />
            <p>Since 2012, we deliver 100% project success, with unique products...</p>
            <ul>
              <li><strong>24/7 Support:</strong> Email, Call, or Skype</li>
              <li>Dedicated Team</li>
              <li>Exceptional Consultation</li>
              <li>Trusted by Global Companies</li>
            </ul>
            <a href="/request-a-quote" className="quote-btn">Request A FREE Quote ➜</a>
          </div>
          <div className="image-container">
            <img src="image/android-app.jpg" alt="Android App Illustration" />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
