import React from "react";
import { useState } from "react";
import BuildStart from "./about-us/BulidStart";

const Home = () => {
  const services = [
    {
      img: "image/service/MVP.png",
      alt: "MVP",
      title: "MVP/ Product Development",
      desc: "Streamline development for rapid innovation and sustainable growth.",
    },
    {
      img: "image/service/Cloud-Services.png",
      alt: "Cloud",
      title: "Cloud Services",
      desc: "Scalable, secure solutions for seamless business operations.",
    },
    {
      img: "image/service/Cybersecurity.png",
      alt: "Cybersecurity",
      title: "Cybersecurity",
      desc: "Robust security solutions to safeguard data and prevent threats.",
    },
    {
      img: "image/service/Web-Development.png",
      alt: "Web Dev",
      title: "Web Development",
      desc: "Custom solutions for high performance and scalability.",
    },
    {
      img: "image/service/Mobile-App.png",
      alt: "Mobile",
      title: "Mobile App Development",
      desc: "Custom android and iOS apps for seamless performance.",
    },
    {
      img: "image/service/Blockchain-Solutions.png",
      alt: "Blockchain",
      title: "Blockchain Solution",
      desc: "Secure and scalable blockchain solutions for next-gen innovation.",
    },
    {
      img: "image/service/IT-Consulting.png",
      alt: "IT",
      title: "IT Consulting",
      desc: "Expert solutions for strategic growth and digital transformation.",
    },
    {
      img: "image/service/UI-UX-Designing-1.png",
      alt: "UI/UX Designing",
      title: "UI/UX Designing",
      desc: "Intuitive and engaging design for seamless user experiences.",
    },
    {
      img: "image/service/Data-Analytics.png",
      alt: "Data",
      title: "Data Analytics",
      desc: "Advanced insights for smarter decisions and business growth.",
    },
    {
      img: "image/service/eCommerce.png",
      alt: "E-Commerce",
      title: "eCommerce Solutions",
      desc: "Scalable solutions for effortless shopping experiences and business growth.",
    },
    {
      img: "image/service/Mobile-App.png",
      alt: "DevOps",
      title: "DevOps Services",
      desc: "Efficient solutions for automation, scalability, and accelerated delivery.",
    },
    {
      img: "image/service/SEO-and-PPC-Mareting.png",
      alt: "Digital Marketing",
      title: "Digital Marketing",
      desc: "SEO, social media, and PPC strategies for maximum traffic, leads, and conversions.",
    },
  ];

  const cards = [
    {
      img: "image/why/Expertise-in-Latest.png",
      alt: "Expertise Icon",
      title: "Expertise in Latest Technologies",
      text: "Our team stays up to date with the latest technologies and frameworks, such as React, Node.js, Python, and cloud.",
    },
    {
      img: "image/why/Affordable-High.png",
      alt: "Affordable Icon",
      title: "Affordable, High-Quality Solutions",
      text: "We provide premium software services at competitive prices, making high-end technology accessible to businesses.",
    },
    {
      img: "image/why/Cutting-Edge.png",
      alt: "Cutting-edge Icon",
      title: "Cutting-Edge Technology",
      text: "We leverage the latest technologies and best practices to provide innovative solutions that keep you ahead of the competition.",
    },
    {
      img: "image/why/Comprehensive-Services.png",
      alt: "Comprehensive Icon",
      title: "Comprehensive Services",
      text: "From software development to cybersecurity, we offer a full range of IT services, making us a one-stop solution for all your technology needs.",
    },
    {
      img: "image/why/Proven-Track-Record.png",
      alt: "Track Record Icon",
      title: "Proven Track Record",
      text: "Our history of successful projects and satisfied clients showcases our commitment to excellence and reliability in delivering results.",
    },
    {
      img: "image/why/Focus-on-User.png",
      alt: "UX Icon",
      title: "Focus on User Experience (UX)",
      text: "We believe software should not only perform well but also provide an excellent user experience. Our UI/UX experts design intuitive, user-friendly solutions.",
    },
  ];

  const testimonials = [
    {
      name: "Jill Cabana",
      title: "CEO, Jill Melissa Corp, NY",
      text: "I would highly recommend using Guru and for your web design needs. He offers a reliable and affordable service that never compromises quality.",
      image: "image/contact.jpeg",
    },
    {
      name: "Mohamed Albastaki",
      title: "Founder, Equilibria Digital Solutions, Bahrain",
      text: "Guru and his team have been an invaluable partner, working with us on multiple long-term projects with exceptional professionalism.",
      image: "image/contact.jpeg",
    },
    {
      name: "Andrea Houston",
      title: "CEO, Lead Like a Woman, USA",
      text: "Pawna and team was wonderful to work with! Very responsive and asking for details when needed. I really appreciated her outstanding work on this project.",
      image: "image/contact.jpeg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () =>
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  const handleNext = () =>
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );

  return (
    <div className="home-page">
      {/* Hero Section */}
    <BuildStart/>

      {/* Our Services */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="sidebar-col">
              <div className="sidebar">
                <a href="#services">Our Services</a>
                <a href="#portfolio">Our Portfolio</a>
                <a href="#why-choose-us">Why Choose Us</a>
                <a href="#process">Process We Follow</a>
                <a href="#contact">Contact Us</a>
                <a href="#testimonials">Our Testimonial</a>
              </div>
            </div>

            {/* Main Content */}
            <div className="content-col">
              <h2 className="section-title">OUR SERVICES</h2>
              <p className="section-desc">
                Weboum is your trusted partner for outsourced software
                development, specializing in custom product development,
                cutting-edge eCommerce solutions, modern branding, and
                high-performance digital marketing—designed to drive leads,
                boost sales, and accelerate business growth.
              </p>

              <div className="services-grid">
                {services.map((service, index) => (
                  <div className="service-card" key={index}>
                    <img
                      src={service.img}
                      alt={service.alt}
                      className="service-icon"
                    />
                    <div>
                      <div className="service-title">{service.title}</div>
                      <div className="service-desc">{service.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div id="portfolio" className="portfolio-section">
                <h2 className="section-title">OUR PORTFOLIO</h2>
                {/* Add your portfolio content here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="why-choose-section">
        <div className="why-container">
          <h2 className="why-title">WHY CHOOSE US</h2>
          <h5 className="why-subtitle">
            Trusted software design, develop and digital marketing company
          </h5>
          <p className="why-lead">
            In today's digital landscape, a strong online presence is no longer
            a luxury—it's a necessity. Choosing the right partner to guide you
            through this complex world is crucial. Here's why Weboum is the
            perfect choice for your business:
          </p>

          <div className="why-card-grid">
            {cards.map((card, index) => (
              <div className="why-card" key={index}>
                <img src={card.img} alt={card.alt} className="why-icon" />
                <div>
                  <div className="why-card-title">{card.title}</div>
                  <div className="why-card-text">{card.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process We Follow */}
      <section id="process" className="process-section">
        <div className="process-container">
          <h2 className="process-heading">Process We Follow</h2>
          <p className="process-description">
            Weboum Technologies invites you to embark on a seamless journey from
            concept to code. We adhere to a comprehensive software development
            process that guarantees transparency and successful delivery of
            solutions.
          </p>
          <img
            src="image/Process-We-Follow.png"
            alt="Process We Follow"
            className="process-image"
          />
        </div>
      </section>

      {/* Contact Us */}
      <section
        id="contact"
        className="contact-section"
        style={{ backgroundImage: "url('image/contact.jpeg')" }}
      >
        <div className="container">
          <div className="contact-row">
            <div className="contact-col-image"></div>

            <div className="contact-col-form">
              <div className="form-container">
                <div className="form-heading">
                  Talk to our Experts about your Project Today!
                </div>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-submit">
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonial-section">
        <div className="container">
          <h2 className="testimonial-title">OUR TESTIMONIALS</h2>

          <div className="testimonial-carousel">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-item ${
                  index === currentSlide ? "active" : ""
                }`}
              >
                <div className="testimonial-box">
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="stars">★ ★ ★ ★ ★</div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-position">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-controls">
            <button className="arrow" onClick={handlePrev}>
              ‹
            </button>
            <button className="arrow" onClick={handleNext}>
              ›
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-left">
            <h2 className="cta-heading">Contact us to grow your business!</h2>
            <p className="cta-text">
              Let's discuss how we can help you achieve your goals. Schedule a
              consultation to explore the best solutions for your needs.
            </p>
          </div>
          <div className="cta-right">
            <a href="#contact" className="cta-button">
              GET FREE CONSULTATION
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
