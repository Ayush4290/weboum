// SamplePage.jsx
import React, { useState,  } from "react";
import "../style/ApproachUs.css";

const tabs = ["all", "software", "apps", "graphics", "marketing"];

const portfolioImages = {
  all: [
    "https://weboum.com/wp-content/uploads/2024/03/Bolster.jpg",
    "https://weboum.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-17-at-15.36.26_d394359d.jpg",
    "https://weboum.com/wp-content/uploads/2024/09/creative-version2-design.png",
    "https://weboum.com/wp-content/uploads/2024/09/ngaging-Experiences-and-Curated-apps.jpg",
    "https://weboum.com/wp-content/uploads/2024/03/Log-Me-Once.jpg",
    "https://weboum.com/wp-content/uploads/2024/03/Hyleys.jpg",
    "https://weboum.com/wp-content/uploads/2024/03/muskilongue-landing-page-V-1.jpg",
    "https://weboum.com/wp-content/uploads/2021/05/phone-tab-lapitop.jpg",
    "https://weboum.com/wp-content/uploads/2024/03/Georgynity.jpg",
    "https://weboum.com/wp-content/uploads/2024/09/Children-s-Therapy-website.png",
  ],
  software: [2, 3],
  apps: [4, 5],
  graphics: [6, 7],
  marketing: [8, 9],
};

function ApproachUs() {
  const [activeTab, setActiveTab] = useState("all");
  const [lightboxSrc, setLightboxSrc] = useState("");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (src) => {
    setLightboxSrc(src);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const getActiveImages = () => {
    return activeTab === "all"
      ? portfolioImages.all
      : portfolioImages[activeTab].map((i) => portfolioImages.all[i]);
  };

  return (
    <div className="samplePage-wrapper">
      {/* Hero Section */}
      <section className="samplePage-hero">
        <div className="samplePage-content">
          <h1>Build efficient Website for your Business</h1>
          <p>
            In today’s digital world, having a professional and efficient website is essential for business growth. We specialize in creating modern, fast, and responsive websites.
          </p>
          <div className="samplePage-buttons">
            <a href="#" className="samplePage-btn-primary">Read More</a>
            <a href="#" className="samplePage-btn-outline">✉ Contact Us</a>
          </div>
        </div>
        <div className="samplePage-image">
          <img src="image/Digital-Marketing.jpg" alt="Digital Marketing" />
        </div>
      </section>

      {/* Services Section */}
      <section className="samplePage-servicess-section">
        <div className="samplePage-servicess-container">
          {["Webapps Development", "E-Commerce Solutions", "Branding Solutions", "Optimization Solutions", "UI/UX Solutions", "Marketing Solutions"].map((text, index) => (
            <div className="samplePage-servicess-box" key={index}>
              <div className="samplePage-icon-circle">
                <i className="fas fa-laptop-code"></i>
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Tabs */}
      <div className="samplePage-tabs">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`samplePage-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="samplePage-portfolio">
        {getActiveImages().map((src, index) => (
          <div key={index} className="samplePage-item">
            <img
              src={src}
              alt={`Portfolio ${index + 1}`}
              onClick={() => openLightbox(src)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="samplePage-lightbox" onClick={closeLightbox}>
          <span className="samplePage-lightbox-close">×</span>
          <img src={lightboxSrc} alt="Full Preview" className="samplePage-lightbox-img" />
        </div>
      )}

      {/* Why Us Section */}
      <section className="samplePage-whyus">
        <div className="samplePage-left">
          <h6>Weboum – Customized IT Solutions</h6>
          <div className="samplePage-highlight-line"></div>
          <h2>Why Choose <strong>us</strong></h2>
          <p>We Are Trusted Web Development, Web Design & Digital Marketing Company</p>
          <p>WTPL, (Weboum Technology Pvt. Ltd.) is one of the best digital marketing agencies...</p>
          <div className="samplePage-feature">
            <img src="check-icon.png" alt="Check" />
            <div>
              <h6>High Customer Retention Rate</h6>
              <p>We have a 100% retention rate...</p>
            </div>
          </div>
        </div>
        <div className="samplePage-form-box">
          <img src="image/featured-image.jpg" alt="" />
          <h5>Request A Free Consultation</h5>
          <small>We Help Customers Digital Transformation By IT Solutions</small>
          <form>
            <input type="text" className="samplePage-form-control" placeholder="Name" required />
            <input type="tel" className="samplePage-form-control" placeholder="000-000-0000" required />
            <input type="email" className="samplePage-form-control" placeholder="Email" required />
            <select className="samplePage-form-select" required>
              <option>Project Development</option>
              <option>Web Development</option>
              <option>App Development</option>
              <option>Digital Marketing</option>
            </select>
            <textarea className="samplePage-form-control" rows="4" placeholder="Your Query / Message"></textarea>
            <div>
              <input type="checkbox" id="captcha" />
              <label htmlFor="captcha"> I'm not a robot</label>
            </div>
            <button type="submit" className="samplePage-btn-submit">MAKE A REQUEST</button>
          </form>
        </div>
      </section>

      {/* Stats Section */}
      <section className="samplePage-stats">
        {["1,500+ Projects", "20+ Team Members", "16+ Years", "100% Satisfaction"].map((text, index) => (
          <div className="samplePage-stat-box" key={index}>
            <h2>{text.split(" ")[0]}</h2>
            <p>{text.split(" ").slice(1).join(" ")}</p>
          </div>
        ))}
      </section>

      {/* Testimonials Section */}
      <section className="samplePage-testimonials">
        <h5>Our Testimonials</h5>
        <h2>What Clients Say <strong>About Us</strong></h2>
        <p className="samplePage-subtitle">Our clients are delighted with our services...</p>
        <div className="samplePage-slider">
          {[1, 2].map((i) => (
            <div className="samplePage-testimonial-card" key={i}>
              <div className="samplePage-testimonial-inner">
                <div className="samplePage-stars">★★★★★</div>
                <div className="samplePage-text">This is a client testimonial...</div>
                <div className="samplePage-author">
                  <div className="samplePage-author-info">
                    <img src={`https://i.pravatar.cc/100?img=${10 + i}`} alt="author" />
                    <strong>Client {i}</strong>
                  </div>
                  <div className="samplePage-quote">“</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ApproachUs;
