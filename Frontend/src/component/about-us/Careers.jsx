import React from "react";
import "../style/Careers.css";

const Careers = () => {
  return (
    <section className="application-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="application-form">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apply For Post"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Experience"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="resume" className="form-label">
                    Attached Resume
                  </label>
                  <input type="file" className="form-control" id="resume" />
                </div>

                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Message"
                ></textarea>

                <div className="captcha-box">
                  <input type="checkbox" id="robot-check" />
                  <label htmlFor="robot-check">I'm not a robot</label>
                  <img
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                    alt="Captcha"
                    className="captcha-image"
                  />
                </div>

                <button type="submit" className="btn btn-submit">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-5 form-image">
            <img src="image/Careers.jpg" alt="HR Image or Graphic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
