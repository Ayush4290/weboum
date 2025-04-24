import React from "react";
import "../style/Careers.css";
import Sub_Header from "../Sub_Header";
import Days from "./Days";

const Careers = () => {
  return (
    <>
      <Sub_Header title="Careers" />
      <section className="careers-application-section">
        <div className="careers-container">
          <div className="careers-row">
            <div className="careers-col-lg-7">
              <div className="careers-application-form">
                <form>
                  <div className="careers-row">
                    <div className="careers-col-md-6">
                      <input type="text" className="careers-form-control" placeholder="First Name" required />
                    </div>
                    <div className="careers-col-md-6">
                      <input type="text" className="careers-form-control" placeholder="Last Name" required />
                    </div>
                  </div>

                  <div className="careers-row">
                    <div className="careers-col-md-6">
                      <input type="email" className="careers-form-control" placeholder="Email" required />
                    </div>
                    <div className="careers-col-md-6">
                      <input type="tel" className="careers-form-control" placeholder="Phone" required />
                    </div>
                  </div>

                  <div className="careers-row">
                    <div className="careers-col-md-6">
                      <input type="text" className="careers-form-control" placeholder="Apply For Post" required />
                    </div>
                    <div className="careers-col-md-6">
                      <input type="text" className="careers-form-control" placeholder="Experience" required />
                    </div>
                  </div>

                  <div className="careers-mb-3">
                    <label htmlFor="resume" className="careers-form-label">
                      Attached Resume
                    </label>
                    <input type="file" className="careers-form-control" id="resume" />
                  </div>

                  <textarea className="careers-form-control" rows="5" placeholder="Message"></textarea>

                  <div className="careers-captcha-box">
                    <input type="checkbox" id="robot-check" />
                    <label htmlFor="robot-check">I'm not a robot</label>
                    <img
                      src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                      alt="Captcha"
                      className="careers-captcha-image"
                    />
                  </div>

                  <button type="submit" className="careers-btn-submit">
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>

            <div className="careers-col-lg-5 careers-form-image">
              <img src="image/Careers.jpg" alt="HR Image or Graphic" />
            </div>
          </div>
        </div>
      </section>
      <Days/>
    </>
  );
};

export default Careers;
