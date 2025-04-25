import React, { useState } from 'react';
import "../style/HostingManagement.css"
const WebHostingUI = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const testimonials = [
    {
      quote: "As a long-time Cloudways user, I've been thrilled with the platform! During early access, my site, TechYorker, experienced several traffic spikes. Thanks to auto-scaling, I never had to worry about upgrading or downgrading servers. I couldn't be more satisfied with the product!",
      author: "Sarah Johnson, TechYorker"
    },
    {
      quote: "Moving our e-commerce store to this platform was the best decision we made last year. The speed improvement was immediately noticeable and our conversion rate increased by 15%.",
      author: "Mike Chen, Fashion Portal"
    },
    {
      quote: "The 24/7 support is what keeps me as a loyal customer. Any time I've had an issue, the team resolves it within minutes, not hours.",
      author: "Priya Sharma, TravelBlog"
    },
    {
      quote: "I manage sites for over 20 clients and this hosting solution has simplified my workflow tremendously. The autoscaling feature is a game-changer.",
      author: "Carlos Rodriguez, WebDev Agency"
    }
  ];

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="hosting-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container flex justify-between items-center">
          <div className="hero-content">
            <h1 className="hero-title">Managed Web Hosting for an Exceptional Online Presence</h1>
            <p className="hero-description">
              Cloudways powers your digital agency, eCommerce store, or online business with a fast, secure, and user-friendly cloud hosting platform, supported by 24/7 expert assistance.
            </p>
            <div className="button-group">
              <button className="btn btn-primary">Start Free Trial</button>
              <button className="btn btn-outline">View Plans</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/api/placeholder/500/400" alt="Web Hosting Visualization" />
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="trust-section">
        <div className="container">
          <h2 className="trust-title">Trusted by 100,000+ businesses like yours</h2>
          <div className="partner-logos">
            <div className="logo">HostGator</div>
            <div className="logo">Bluehost</div>
            <div className="logo">WordPress</div>
            <div className="logo">KnownHost</div>
            <div className="logo">SiteGround</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="container flex justify-between items-center">
          <div className="features-content">
            <h2 className="features-title">Effortless, Powerful, and Autoscaling WordPress Hosting</h2>
            <p className="features-description">
              Experience a hosting solution with zero configuration, 1-click operations, and true autoscaling with no downtime. Simply host your website and focus on growing your business, while Autonomous takes care of everything else!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className="testimonial-container">
            <div className="quote-icon">❞</div>
            <div className="testimonial">
              <p className="testimonial-text">{testimonials[activeSlide].quote}</p>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === activeSlide ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Chat Icon */}
         </div>
  );
};