import React from 'react';
import '../style/AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row align-items-center content-section">
          <div className="col-lg-7 col-md-12">
            <p>
              WEBOUM is an ISO 9001:2008 Certified Company, located in The City Beautiful, Chandigarh, situated at the foothills of the Shivalik hills. We are one of the fastest-growing companies in consulting, technology, outsourcing and next-generation services.
            </p>
            <div className="abbreviation">
              <h5><strong>WEBOUM abbreviation is used for:</strong></h5>
              <b>W: <i>Web Applications</i></b>, develop and maintain web applications tailored to your specific needs, whether for personal use, business operations, or any other purpose.
              <b>E: <i>e-Commerce</i></b>; we provide comprehensive e-commerce solutions to help you sell products and services online efficiently and effectively.
              <b>B: <i>Branding</i></b>; we create and enhance your brand identity, making your business stand out in the market through logos, marketing materials, and brand strategies.
              <b>O: <i>Optimization</i></b>; we improve the performance, security, and efficiency of your business systems and applications to ensure they run smoothly and effectively.
              <b>U: <i>UI/UX</i></b>; we design user-friendly and attractive interfaces to enhance user experiences and satisfaction, ensuring that your applications are both intuitive and enjoyable to use.
              <b>M: <i>Marketing</i></b>; we help your business grow through effective marketing strategies, including SEO, digital marketing, and promotional campaigns, as well as providing ongoing support and maintenance.
            </div>
          </div>
          <div className="col-lg-5 col-md-12 mt-4 mt-lg-0 text-center">
            <img src="image/development-about.jpg" alt="Technology Graphic" className="img-fluid" />
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="missionrow content-section container-fluid" style={{ paddingTop: '20px' }}>
          <div className="col-12">
            <h4><strong>Our Mission:</strong></h4>
            <p>
              We are dedicated to building long-term partnerships with our clients by understanding their unique needs and delivering tailored solutions that drive measurable results. Our mission is to be a catalyst for digital transformation, enabling our clients to harness the power of technology to achieve their goals and reach new heights of success. Through our expertise, innovation, and commitment to excellence, we strive to make a positive impact on the businesses and communities we serve.
            </p>
            <h4><strong>Our Vision:</strong></h4>
            <p>
              The vision of <strong>Weboum Technology</strong> is domain-centric, end-to-end technology, innovative, trusted, supportive, and high-quality web solutions which consider us complete satisfactions when we delivered the final project to meet your business objectives.
            </p>
            <p><strong>Weboum believes that this vision can be reached through the following principles:</strong></p>
            <ul>
              <li><strong>Integrity</strong> – Honesty in how we deal with our clients, each other, and with the world.</li>
              <li><strong>Candor</strong> – Be open and upfront in all our conversations. Keep clients updated on the real situation. Deal with situations early; avoid last-minute surprises.</li>
              <li><strong>Service</strong> – Seek to empower and enable our clients. Consider ourselves successful not when we deliver our client’s final product but when the product is launched and meets success.</li>
              <li><strong>Kindness</strong> – Go the extra mile. Speak the truth with grace. Deliver more than is expected or promised.</li>
              <li><strong>Competence</strong> – Benchmark with the best in the business. Try new and better things. Never rest on laurels. Move out of comfort zones. Keep suggesting new things. Seek to know more.</li>
              <li><strong>Growth</strong> – Success is a journey, not a destination. Seek to multiply/increase what we have – wealth, skills, influence, and our client’s business.</li>
            </ul>
            <p>
              It’s the quality which matters, not the quantity of work for us. We are the <strong>leading providers of high-quality designs</strong>. Since our inception, we are committed to delivering solutions <strong>cost-effectively and on time</strong>.
            </p>
          </div>
        </div>
      </div>

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
            <img src="image/android-app.jpg" alt="Android App Illustration" className="img-fluid" style={{ maxHeight: '800px', paddingBottom: '40px', paddingTop: '10px' }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
