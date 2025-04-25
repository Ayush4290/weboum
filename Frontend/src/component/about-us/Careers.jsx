"use client";

import React, { useState } from "react";
import "../../components/Days"; // Adjusted path to match structure
import "../../components/SubHeader"; // Adjusted path to match structure
import "./careers.css"; // Adjusted path to match structure
import Days from "../../components/Days"; // Correct import
import SubHeader from "../../components/SubHeader"; // Correct import

const Careers = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    post: "",
    experience: "",
    message: "",
    resume: null,
    notRobot: false,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.notRobot) {
      alert("Please verify that you are not a robot.");
      return;
    }

    // Example: Log form data (replace with actual submission logic, e.g., API call)
    console.log("Form submitted:", formData);

    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      post: "",
      experience: "",
      message: "",
      resume: null,
      notRobot: false,
    });
  };

  return (
    <>
      <SubHeader title="Careers" />
      <section className="careers-application-section">
        <div className="careers-container">
          <div className="careers-row">
            <div className="careers-col-lg-7">
              <div className="careers-application-form">
                <form onSubmit={handleSubmit}>
                  <div className="careers-row">
                    <div className="careers-col-md-6">
                      <input
                        type="text"
                        name="firstName"
                        className="careers-form-control"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="careers-col-md-6">
                      <input
                        type="text"
                        name="lastName"
                        className="careers-form-control"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="careers-row">
                   }->{                    <div className="careers-col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="careers-form-control"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="careers-col-md-6">
                      <input
                        type="tel"
                        name="phone"
                        className="careers-form-control"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="careers-row">
                    <div className="careers-col-md-6">
                      <input
                        type="text"
                        name="post"
                        className="careers-form-control"
                        placeholder="Apply For Post"
                        value={formData.post}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="careers-col-md-6">
                      <input
                        type="text"
                        name="experience"
                        className="careers-form-control"
                        placeholder="Experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="careers-mb-3">
                    <label htmlFor="resume" className="careers-form-label">
                      Attached Resume
                    </label>
                    <input
                      type="file"
                      name="resume"
                      className="careers-form-control"
                      id="resume"
                      onChange={handleInputChange}
                    />
                  </div>

                  <textarea
                    name="message"
                    className="careers-form-control"
                    rows="5"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>

                  <div className="careers-captcha-box">
                    <input
                      type="checkbox"
                      id="robot-check"
                      name="notRobot"
                      checked={formData.notRobot}
                      onChange={handleInputChange}
                    />
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
              <img src="/image/Careers.jpg" alt="HR Image or Graphic" />
            </div>
          </div>
        </div>
      </section>
      <Days />
    </>
  );
};

export default Careers;