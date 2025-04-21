import React from 'react';
import '../style/ContactUs.css';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left content */}
        <div className="contact-left">
          <p className="fw-bold text-uppercase">Weboum – Send Us A Message</p>
          <h2 className="fw-bold">Do You Have Any Questions?<br />We’ll Be Happy To Assist!</h2>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Right form */}
        <div className="contact-right">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control" id="phone" />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" required></textarea>
            </div>

            <div className="form-group checkbox-group">
              <input type="checkbox" id="captcha" />
              <label htmlFor="captcha">I'm not a robot</label>
            </div>

            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
