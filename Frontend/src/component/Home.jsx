import React from "react";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#85005f] to-[#1b0d1e] text-white">
      <header className="text-light navbar-custom">
        <nav className="navbar navbar-expand-lg navbar-dark container">
          <a className="navbar-brand" href="#">
            <img
              src="image/logo-1.png"
              alt="Omega Prime Trading Logo"
              className="w-64 h-auto"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center text-center">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Service 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Service 2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Solutions
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Solution 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Solution 2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Careers
                </a>
              </li>
              <li className="nav-item ms-lg-3">
                <a className="btn btn-contact" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="hero flex items-center justify-center py-32">
        <div className="container text-center">
          <h1 className="text-4xl font-bold">
            Unlock unlimited growth with premium custom development
          </h1>
          <button className="btn btn-white mt-4 rounded-full bg-white text-[#85005f] font-bold py-3 px-8 hover:bg-gray-100 hover:text-[#600047]">
            Start Building Today!
          </button>
        </div>
      </section>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="sidebar bg-white rounded-lg shadow-md p-5">
              <a
                href="#"
                className="block py-2.5 text-xl text-gray-800 border-b border-gray-200 hover:text-purple-600"
              >
                Our Services
              </a>
              <a
                href="#"
                className="block py-2.5 text-xl text-gray-800 border-b border-gray-200 hover:text-purple-600"
              >
                Our Portfolio
              </a>
              <a
                href="#"
                className="block py-2.5 text-xl text-gray-800 border-b border-gray-200 hover:text-purple-600"
              >
                Why Choose Us
              </a>
              <a
                href="#"
                className="block py-2.5 text-xl text-gray-800 border-b border-gray-200 hover:text-purple-600"
              >
                Process We Follow
              </a>
              <a
                href="#"
                className="block py-2.5 text-xl text-gray-800 border-b border-gray-200 hover:text-purple-600"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="block py-2.5 text-xl text-gray-800 hover:text-purple-600"
              >
                Our Testimonial
              </a>
            </div>
          </div>

          <div className="col-md-9">
            <h2 className="section-title text-3xl font-bold mb-4">
              OUR SERVICES
            </h2>
            <p className="mb-4">
              Weboum is your trusted partner for outsourced software
              development, specializing in custom product development,
              cutting-edge eCommerce solutions, modern branding, and
              high-performance digital marketing—designed to drive leads, boost
              sales, and accelerate business growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <div className="service-card flex items-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-all duration-300">
                <img
                  src="image/service/MVP.png"
                  alt="MVP"
                  className="service-icon w-12 h-12 mr-4"
                />
                <div>
                  <div className="service-title font-semibold text-lg">
                    MVP/ Product Development
                  </div>
                  <div className="service-desc text-gray-600">
                    Streamline development for rapid innovation and sustainable
                    growth.
                  </div>
                </div>
              </div>

              <div className="service-card flex items-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-all duration-300">
                <img
                  src="image/service/Cloud-Services.png"
                  alt="Cloud"
                  className="service-icon w-12 h-12 mr-4"
                />
                <div>
                  <div className="service-title font-semibold text-lg">
                    Cloud Services
                  </div>
                  <div className="service-desc text-gray-600">
                    Scalable, secure solutions for seamless business operations.
                  </div>
                </div>
              </div>

              <div className="service-card flex items-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-all duration-300">
                <img
                  src="image/service/Cybersecurity.png"
                  alt="Cybersecurity"
                  className="service-icon w-12 h-12 mr-4"
                />
                <div>
                  <div className="service-title font-semibold text-lg">
                    Cybersecurity
                  </div>
                  <div className="service-desc text-gray-600">
                    Robust security solutions to safeguard data and prevent
                    threats.
                  </div>
                </div>
              </div>

              <div className="service-card flex items-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-all duration-300">
                <img
                  src="image/service/Web-Development.png"
                  alt="Web Dev"
                  className="service-icon w-12 h-12 mr-4"
                />
                <div>
                  <div className="service-title font-semibold text-lg">
                    Web Development
                  </div>
                  <div className="service-desc text-gray-600">
                    Custom solutions for high performance and scalability.
                  </div>
                </div>
              </div>

              <div className="service-card flex items-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-all duration-300">
                <img
                  src="image/service/Mobile-App.png"
                  alt="Mobile"
                  className="service-icon w-12 h-12 mr-4"
                />
                <div>
                  <div className="service-title font-semibold text-lg">
                    Mobile App Development
                  </div>
                  <div className="service-desc text-gray-600">
                    Custom android and iOS apps for seamless performance.
                  </div>
                </div>
              </div>

              <div className="service-card flex items-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-all duration-300">
                <img
                  src="image/service/Blockchain-Solutions.png"
                  alt="Blockchain"
                  className="service-icon w-12 h-12 mr-4"
                />
                <div>
                  <div className="service-title font-semibold text-lg">
                    Blockchain Solution
                  </div>
                  <div className="service-desc text-gray-600">
                    Secure and scalable blockchain solutions for next-gen
                    innovation.
                  </div>
                </div>
              </div>

              <div className="service-card flex items-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-all duration-300">
                <img
                  src="image/service/IT-Consulting.png"
                  alt="IT"
                  className="service-icon w-12 h-12 mr-4"
                />
                <div>
                  <div className="service-title font-semibold text-lg">
                    IT Consulting
                  </div>
                  <div className="service-desc text-gray-600">
                    Expert solutions for strategic growth and digital
                    transformation.
                  </div>
                </div>
              </div>

              <div className="service-card flex items-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-all duration-300">
                <img
                  src="image/service/UI-UX-Designing-1.png"
                  alt="UI/UX Designing"
                  className="service-icon w-12 h-12 mr-4"
                />
                <div>
                  <div className="service-title font-semibold text-lg">
                    UI/UX Designing
                  </div>
                  <div className="service-desc text-gray-600">
                    Intuitive and engaging design for seamless user experiences.
                  </div>
                </div>
              </div>

              <div className="service-card flex items-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-all duration-300">
                <img
                  src="image/service/Data-Analytics.png"
                  alt="Data"
                  className="service-icon w-12 h-12 mr-4"
                />
                <div>
                  <div className="service-title font-semibold text-lg">
                    Data Analytics
                  </div>
                  <div className="service-desc text-gray-600">
                    Advanced insights for smarter decisions and business growth.
                  </div>
                </div>
              </div>

              <div className="service-card flex items-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-all duration-300">
                <img
                  src="image/service/eCommerce.png"
                  alt="eCommerce"
                  className="service-icon w-12 h-12 mr-4"
                />
                <div>
                  <div className="service-title font-semibold text-lg">
                    eCommerce Solutions
                  </div>
                  <div className="service-desc text-gray-600">
                    Scalable solutions for effortless shopping experiences and
                    business growth.
                  </div>
                </div>
              </div>

              <div className="service-card flex items-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-all duration-300">
                <img
                  src="image/service/Mobile-App.png"
                  alt="DevOps Services"
                  className="service-icon w-12 h-12 mr-4"
                />
                <div>
                  <div className="service-title font-semibold text-lg">
                    DevOps Services
                  </div>
                  <div className="service-desc text-gray-600">
                    Efficient solutions for automation, scalability, and
                    accelerated delivery.
                  </div>
                </div>
              </div>

              <div className="service-card flex items-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-all duration-300">
                <img
                  src="image/service/SEO-and-PPC-Mareting.png"
                  alt="Digital Marketing"
                  className="service-icon w-12 h-12 mr-4"
                />
                <div>
                  <div className="service-title font-semibold text-lg">
                    Digital Marketing
                  </div>
                  <div className="service-desc text-gray-600">
                    SEO, social media, and PPC strategies for maximum traffic,
                    leads, and conversions.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="section-title text-3xl font-bold mb-4">
                OUR PORTFOLIO
              </h2>
            </div>
          </div>
        </div>
      </div>

      <section className="why-choose-section bg-[#600047] text-white py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-3">WHY CHOOSE US</h2>
          <h5 className="fw-light mb-4">
            Trusted software design, develop and digital marking company
          </h5>
          <p className="lead">
            In today’s digital landscape, a strong online presence is no longer
            a luxury—it’s a necessity. Choosing the right partner to guide you
            through this complex world is crucial. Here’s why Weboum is the
            perfect choice for your business:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="why-card bg-white text-gray-800 p-5 rounded-lg shadow-md flex items-start gap-4">
              <img
                src="image/why/Expertise-in-Latest.png"
                alt="Expertise Icon"
                className="w-10 mt-1"
              />
              <div>
                <div className="why-card-title font-semibold text-lg">
                  Expertise in Latest Technologies
                </div>
                <div className="why-card-text text-gray-600">
                  Our team stays up to date with the latest technologies and
                  frameworks, such as React, Node.js, Python, and cloud.
                </div>
              </div>
            </div>

            <div className="why-card bg-white text-gray-800 p-5 rounded-lg shadow-md flex items-start gap-4">
              <img
                src="image/why/Affordable-High.png"
                alt="Affordable Icon"
                className="w-10 mt-1"
              />
              <div>
                <div className="why-card-title font-semibold text-lg">
                  Affordable, High-Quality Solutions
                </div>
                <div className="why-card-text text-gray-600">
                  We provide premium software services at competitive prices,
                  making high-end technology accessible to businesses.
                </div>
              </div>
            </div>

            <div className="why-card bg-white text-gray-800 p-5 rounded-lg shadow-md flex items-start gap-4">
              <img
                src="image/why/Cutting-Edge.png"
                alt="Cutting-edge Icon"
                className="w-10 mt-1"
              />
              <div>
                <div className="why-card-title font-semibold text-lg">
                  Cutting-Edge Technology
                </div>
                <div className="why-card-text text-gray-600">
                  We leverage the latest technologies and best practices to
                  provide innovative solutions that keep you ahead of the
                  competition.
                </div>
              </div>
            </div>

            <div className="why-card bg-white text-gray-800 p-5 rounded-lg shadow-md flex items-start gap-4">
              <img
                src="image/why/Comprehensive-Services.png"
                alt="Comprehensive Icon"
                className="w-10 mt-1"
              />
              <div>
                <div className="why-card-title font-semibold text-lg">
                  Comprehensive Services
                </div>
                <div className="why-card-text text-gray-600">
                  From software development to cybersecurity, we offer a full
                  range of IT services, making us a one-stop solution for all
                  your technology needs.
                </div>
              </div>
            </div>

            <div className="why-card bg-white text-gray-800 p-5 rounded-lg shadow-md flex items-start gap-4">
              <img
                src="image/why/Proven-Track-Record.png"
                alt="Track Record Icon"
                className="w-10 mt-1"
              />
              <div>
                <div className="why-card-title font-semibold text-lg">
                  Proven Track Record
                </div>
                <div className="why-card-text text-gray-600">
                  Our history of successful projects and satisfied clients
                  showcases our commitment to excellence and reliability in
                  delivering results.
                </div>
              </div>
            </div>

            <div className="why-card bg-white text-gray-800 p-5 rounded-lg shadow-md flex items-start gap-4">
              <img
                src="image/why/Focus-on-User.png"
                alt="UX Icon"
                className="w-10 mt-1"
              />
              <div>
                <div className="why-card-title font-semibold text-lg">
                  Focus on User Experience (UX)
                </div>
                <div className="why-card-text text-gray-600">
                  We believe software should not only perform well but also
                  provide an excellent user experience. Our UI/UX experts design
                  intuitive, user-friendly solutions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section py-16">
        <div className="container">
          <h2 className="process-heading text-3xl font-bold text-center mb-4">
            Process We Follow
          </h2>
          <p className="process-description text-center mb-8">
            Weboum Technologies invites you to embark on a seamless journey from
            concept to code. We adhere to a comprehensive software development
            process that guarantees transparency and successful delivery of
            solutions.
          </p>
          <img
            src="image/Process-We-Follow.png"
            alt="Process We Follow"
            className="mx-auto mb-10"
          />
        </div>
      </section>

      <section
        className="contact-section bg-cover bg-center py-16"
        style={{ backgroundImage: "url(image/contact.jpeg)" }}
      >
        <div className="container">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 contact-image"></div>
            <div className="col-lg-6">
              <div className="form-container bg-white rounded-lg shadow-md p-10">
                <div className="form-heading text-center text-2xl font-bold mb-6">
                  Talk to our Experts about your Project Today!
                </div>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control rounded-lg py-3 px-4 w-full"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control rounded-lg py-3 px-4 w-full"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control rounded-lg py-3 px-4 w-full"
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control rounded-lg py-3 px-4 w-full"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-submit w-full rounded-lg py-3 text-white font-semibold bg-[#002f87] hover:bg-[#001f5c]"
                  >
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-[#6A005F]">
        <div className="container">
          <div className="section-title text-white text-3xl font-bold text-center mb-8">
            OUR TESTIMONIALS
          </div>

          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <div className="testimonial-box bg-white text-gray-800 rounded-lg shadow-lg p-8 text-center">
                      <p>
                        I would highly recommend using Guru and for your web
                        design needs. He offers a reliable and affordable
                        service that never compromises quality.
                      </p>
                      <div className="stars text-yellow-400 text-xl mt-4">
                        ★ ★ ★ ★ ★
                      </div>
                      <img
                        src="jill.jpg"
                        alt="Jill Caruana"
                        className="testimonial-image w-16 h-16 rounded-full mx-auto mt-4 object-cover"
                      />
                      <div className="testimonial-name font-bold text-lg mt-4">
                        Jill Caruana
                      </div>
                      <div className="testimonial-title text-gray-600">
                        CEO, Jill Melyssa Corp, NY
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="testimonial-box bg-white text-gray-800 rounded-lg shadow-lg p-8 text-center">
                      <p>
                        Guru and his team have been an invaluable partner,
                        working with us on multiple long-term projects with
                        exceptional professionalism.
                      </p>
                      <div className="stars text-yellow-400 text-xl mt-4">
                        ★ ★ ★ ★ ★
                      </div>
                      <img
                        src="mohamed.jpg"
                        alt="Mohamed Albastaki"
                        className="testimonial-image w-16 h-16 rounded-full mx-auto mt-4 object-cover"
                      />
                      <div className="testimonial-name font-bold text-lg mt-4">
                        Mohamed Albastaki
                      </div>
                      <div className="testimonial-title text-gray-600">
                        Founder, Equilibria Digital Solutions, Bahrain
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="testimonial-box bg-white text-gray-800 rounded-lg shadow-lg p-8 text-center">
                      <p>
                        Pawna and team was wonderful to work with! Very
                        responsive and asking for details when needed. I really
                        appreciated her outstanding work on this project.
                      </p>
                      <div className="stars text-yellow-400 text-xl mt-4">
                        ★ ★ ★ ★ ★
                      </div>
                      <img
                        src="andrea.jpg"
                        alt="Andrea Heuston"
                        className="testimonial-image w-16 h-16 rounded-full mx-auto mt-4 object-cover"
                      />
                      <div className="testimonial-name font-bold text-lg mt-4">
                        Andrea Heuston
                      </div>
                      <div className="testimonial-title text-gray-600">
                        CEO, Lead Like a Woman, USA
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <div className="testimonial-box bg-white text-gray-800 rounded-lg shadow-lg p-8 text-center">
                      <p>
                        I would highly recommend using Guru and for your web
                        design needs. He offers a reliable and affordable
                        service that never compromises quality.
                      </p>
                      <div className="stars text-yellow-400 text-xl mt-4">
                        ★ ★ ★ ★ ★
                      </div>
                      <img
                        src="jill.jpg"
                        alt="Jill Caruana"
                        className="testimonial-image w-16 h-16 rounded-full mx-auto mt-4 object-cover"
                      />
                      <div className="testimonial-name font-bold text-lg mt-4">
                        Jill Caruana
                      </div>
                      <div className="testimonial-title text-gray-600">
                        CEO, Jill Melyssa Corp, NY
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="testimonial-box bg-white text-gray-800 rounded-lg shadow-lg p-8 text-center">
                      <p>
                        Guru and his team have been an invaluable partner,
                        working with us on multiple long-term projects with
                        exceptional professionalism.
                      </p>
                      <div className="stars text-yellow-400 text-xl mt-4">
                        ★ ★ ★ ★ ★
                      </div>
                      <img
                        src="mohamed.jpg"
                        alt="Mohamed Albastaki"
                        className="testimonial-image w-16 h-16 rounded-full mx-auto mt-4 object-cover"
                      />
                      <div className="testimonial-name font-bold text-lg mt-4">
                        Mohamed Albastaki
                      </div>
                      <div className="testimonial-title text-gray-600">
                        Founder, Equilibria Digital Solutions, Bahrain
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="testimonial-box bg-white text-gray-800 rounded-lg shadow-lg p-8 text-center">
                      <p>
                        Pawna and team was wonderful to work with! Very
                        responsive and asking for details when needed. I really
                        appreciated her outstanding work on this project.
                      </p>
                      <div className="stars text-yellow-400 text-xl mt-4">
                        ★ ★ ★ ★ ★
                      </div>
                      <img
                        src="andrea.jpg"
                        alt="Andrea Heuston"
                        className="testimonial-image w-16 h-16 rounded-full mx-auto mt-4 object-cover"
                      />
                      <div className="testimonial-name font-bold text-lg mt-4">
                        Andrea Heuston
                      </div>
                      <div className="testimonial-title text-gray-600">
                        CEO, Lead Like a Woman, USA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bg-dark rounded-full"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bg-dark rounded-full"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <section className="cta-section py-16">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="fw-bold text-3xl mb-3">
                Contact us to grow your business!
              </h2>
              <p className="text-lg">
                Let's discuss how we can help you achieve your goals. Schedule a
                consultation to explore the best solutions for your needs
              </p>
            </div>
            <div className="col-md-4 text-md-end mt-4 mt-md-0">
              <a
                href="#"
                className="btn cta-button bg-[#00247d] text-white font-bold rounded-full py-3 px-6 hover:bg-[#001b5f]"
              >
                GET FREE CONSULTATION
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
