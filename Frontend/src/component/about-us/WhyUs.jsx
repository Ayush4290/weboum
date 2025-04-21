import React from 'react';
import '../style/WhyUs.css';

const WhyUs = () => {
  return (
    <div>
      {/* Form Section */}
      <section className="section-wrapper">
        <div className="row align-items-start">
          {/* Left Content */}
          <div className="col-lg-6 left-content">
            <h6>Weboum – Customized IT Solutions</h6>
            <div className="highlight-line"></div>
            <h2>Why Choose <strong>us</strong></h2>
            <p>We Are Trusted Web Development, Web Design & Digital Marketing Company</p>
            <p>
              WTPL, (Weboum Technology Pvt. Ltd.) is one of the best digital marketing agencies in Chandigarh & Mohali, India, with the aspiration to create value for your business.
            </p>
            <p>
              Our web design and development with digital marketing services will transform your marketing approach.
            </p>
            <p>
              So, get through one of the best Web development, Web design and Digital marketing companies. WTPL, named as one of the best digital marketing agencies and a great web development service provider.
            </p>

            {/* Features */}
            <div className="feature">
              <img src="check-icon.png" alt="Check" />
              <div>
                <h6>High Customer Retention Rate</h6>
                <p>We have a 100% retention rate. Customer loyalty is priceless. We are earning our customers loyalty day by day.</p>
              </div>
            </div>
            <div className="feature">
              <img src="check-icon.png" alt="Check" />
              <div>
                <h6>Ability To Meet Deadlines</h6>
                <p>We are 100% clear on when work needs to be completed. Deadlines help us achieve shared goals.</p>
              </div>
            </div>
            <div className="feature">
              <img src="check-icon.png" alt="Check" />
              <div>
                <h6>Professional Team Member</h6>
                <p>We have focused, creative team members passionate about growing professionally for your business.</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="form-box">
              <img src="image/featured-image.jpg" alt="" />
              <h5>Request A Free Consultation</h5>
              <small>We Help Customers Digital Transformation By IT Solutions</small>

              <form>
                <input type="text" className="form-control" placeholder="Name" required />
                <input type="tel" className="form-control" placeholder="000-000-0000" required />
                <input type="email" className="form-control" placeholder="Email" required />
                <select className="form-select" required>
                  <option selected>Project Development</option>
                  <option value="1">Web Development</option>
                  <option value="2">App Development</option>
                  <option value="3">Digital Marketing</option>
                </select>
                <textarea className="form-control" rows="4" placeholder="Your Query / Message"></textarea>

                {/* Simulated CAPTCHA box */}
                <div className="my-3">
                  <input type="checkbox" id="captcha" />
                  <label htmlFor="captcha"> I'm not a robot</label>
                </div>

                <button type="submit" className="btn btn-submit">MAKE A REQUEST</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 30 Days Support Section */}
      <section className="offer-section">
        <div className="row align-items-center container-fluid" style={{ paddingTop: '40px', paddingLeft: '20px' }}>
          <div className="col-md-6 support-text">
            <h6 className="text-uppercase">Custom Software Development & Enterprises Solutions</h6>
            <div className="highlight-line"></div>
            <h2>30-Days FREE Support</h2>
            <h3>100% Satisfaction Guaranteed</h3>
            <hr />
            <p>
              Since 2012, we deliver 100% project success, with unique products for startups and small businesses considering their purpose and philosophy.
            </p>
            <ul>
              <li><strong>24/7 Support:</strong> Email, Call, or Skype</li>
              <li>Dedicated Team</li>
              <li>Exceptional Consultation</li>
              <li>Trusted by Global Companies</li>
            </ul>
            <a href="#" className="quote-btn">Request A FREE Quote ➜</a>
          </div>
          <div className="col-md-6 text-center">
            <img src="image/android-app.jpg" alt="Android App Illustration" className="img-fluid" style={{ maxHeight: '400px', paddingBottom: '40px', paddingTop: '10px' }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
