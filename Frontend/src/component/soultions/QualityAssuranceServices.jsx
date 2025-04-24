import React from "react";
import "../style/QualityAssuranceServices.css";
import Sub_Header from "../Sub_Header";
import Days from "../about-us/Days";

const QualityAssuranceServices = () => {
  return (
    <>
      <Sub_Header title="Quality Assurance Services" />
      <div id="qa-services-page">
        <div className="container mt-5"> 
          <div className="row align-items-center content-section">
            <div className="col-lg-7 col-md-12">
              <h2 className="section-title">
                Comprehensive QA & Testing Services
              </h2>
              <p>
                At Weboum, we provide comprehensive quality assurance services
                to ensure your software meets the highest standards of
                performance, reliability, and user experience. Our QA experts
                utilize industry-leading methodologies and tools to deliver
                defect-free applications that exceed customer expectations.
              </p>
              <p>
                From manual testing to automated testing solutions, our quality
                assurance services are designed to identify potential issues
                early in the development lifecycle, reducing costs and ensuring
                smooth deployment.
              </p>
            </div>
            <div className="col-lg-5 col-md-12 mt-4 mt-lg-0 text-center">
              <img
                src="image/qa-testing.jpg"
                alt="Quality Assurance Testing"
                className="img-fluid rounded-image"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="services-section">
          <div className="container py-5">
            <h2 className="section-title text-center mb-5">
              Our QA Testing Services
            </h2>

            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="service-card">
                  <div className="service-icon">
                    <img
                      src="image/functional-testing-icon.png"
                      alt="Functional Testing"
                    />
                  </div>
                  <h3>Functional Testing</h3>
                  <p>
                    We perform thorough functional testing to verify that all
                    features work as per specifications. Our approach includes
                    unit testing, integration testing, system testing, and
                    acceptance testing.
                  </p>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="service-card">
                  <div className="service-icon">
                    <img
                      src="image/performance-testing-icon.png"
                      alt="Performance Testing"
                    />
                  </div>
                  <h3>Performance Testing</h3>
                  <p>
                    Our performance testing services help identify bottlenecks
                    and ensure your application can handle the expected load
                    with optimal response times and resource utilization.
                  </p>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="service-card">
                  <div className="service-icon">
                    <img
                      src="image/security-testing-icon.png"
                      alt="Security Testing"
                    />
                  </div>
                  <h3>Security Testing</h3>
                  <p>
                    Protect your application from vulnerabilities with our
                    comprehensive security testing services that identify and
                    address potential security risks before deployment.
                  </p>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="service-card">
                  <div className="service-icon">
                    <img
                      src="image/automation-testing-icon.png"
                      alt="Automation Testing"
                    />
                  </div>
                  <h3>Automation Testing</h3>
                  <p>
                    Our automated testing solutions improve efficiency,
                    coverage, and accuracy while reducing the time and cost
                    associated with manual testing efforts.
                  </p>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="service-card">
                  <div className="service-icon">
                    <img
                      src="image/usability-testing-icon.png"
                      alt="Usability Testing"
                    />
                  </div>
                  <h3>Usability Testing</h3>
                  <p>
                    Enhance user experience with our usability testing services
                    that evaluate how real users interact with your application,
                    identifying areas for improvement.
                  </p>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="service-card">
                  <div className="service-icon">
                    <img
                      src="image/mobile-testing-icon.png"
                      alt="Mobile App Testing"
                    />
                  </div>
                  <h3>Mobile App Testing</h3>
                  <p>
                    We offer specialized testing for mobile applications across
                    various devices, platforms, and network conditions to ensure
                    consistent performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* QA Process Section */}
        <div className="qa-process-section">
          <div className="container py-5">
            <h2 className="section-title text-center mb-5">Our QA Process</h2>

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="process-card">
                  <div className="process-number">1</div>
                  <h3>Requirement Analysis</h3>
                  <p>
                    We start by understanding your project requirements,
                    specifications, and quality standards to develop a
                    comprehensive testing strategy.
                  </p>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="process-card">
                  <div className="process-number">2</div>
                  <h3>Test Planning</h3>
                  <p>
                    Our team creates detailed test plans, including test cases,
                    scenarios, and scripts aligned with your business objectives
                    and technical requirements.
                  </p>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="process-card">
                  <div className="process-number">3</div>
                  <h3>Test Execution</h3>
                  <p>
                    We execute tests methodically, documenting results and
                    identifying defects with detailed information for efficient
                    resolution.
                  </p>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="process-card">
                  <div className="process-number">4</div>
                  <h3>Defect Management</h3>
                  <p>
                    Our systematic approach to defect management ensures issues
                    are properly tracked, prioritized, and verified after
                    resolution.
                  </p>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="process-card">
                  <div className="process-number">5</div>
                  <h3>Regression Testing</h3>
                  <p>
                    We perform regression testing to ensure that new changes
                    don't adversely affect existing functionality.
                  </p>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="process-card">
                  <div className="process-number">6</div>
                  <h3>Final Reporting</h3>
                  <p>
                    We provide comprehensive test reports with insights into the
                    application's quality, performance, and readiness for
                    release.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="why-choose-section">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="section-title">
                  Why Choose Weboum for QA Testing?
                </h2>
                <ul className="check-list">
                  <li>Experienced QA professionals with domain expertise</li>
                  <li>Comprehensive testing methodologies and frameworks</li>
                  <li>
                    Cutting-edge testing tools and automation capabilities
                  </li>
                  <li>Flexible engagement models to fit your business needs</li>
                  <li>Cost-effective solutions with quick turnaround time</li>
                  <li>Transparent communication and reporting</li>
                  <li>Continuous improvement approach to quality assurance</li>
                </ul>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src="image/why-choose-us.jpg"
                  alt="Why Choose Us"
                  className="img-fluid rounded-image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <section className="cta-section">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-md-10 text-center">
                <h2>Ready to Ensure Quality in Your Next Project?</h2>
                <p>
                  Let our QA experts help you deliver high-quality software that
                  meets your business objectives and exceeds user expectations.
                </p>
                <a href="/request-a-quote" className="cta-btn">
                  Get a Free QA Consultation ➜
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Days />
    </>
  );
};

export default QualityAssuranceServices;
