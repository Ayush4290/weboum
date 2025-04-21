import React from 'react';
import '../style/GraphicDesign.css';

const GraphicDesign = () => {
  return (
    <div>
      <section className="container">
        <div className="flex-row">
          <div className="text-column">
            <h2>
              Take your business to the next level with <br />
              <strong>Creatively Designed Graphics!</strong>
            </h2>
            <p>
              There is a reason why graphics work like magic for a website. With ingeniously designed graphics you can transform a bland site into a powerful and striking communication channel for your brand.
            </p>
            <p>
              Staying up-to-date with the world of design is essential... There’s no limit to what you can get designed at Weboum Technology.
            </p>
          </div>
          <div className="image-column">
            <img src="/image/graphic-design.jpg" alt="Graphic Design" />
          </div>
        </div>

        <div>
          <h3>Communicate Your Idea To In An Imaginative Way And Let The Creativity Flow!</h3>
          <p>
            At Weboum Technology, we offer a multitude of graphic designing services...
          </p>

          <h3>Graphics are the most innovative tools to convey your message!</h3>
          <p>
            We provide a competitive edge to businesses by offering compelling graphic designs to make your business stand out.
          </p>
          <p>
            We have some of the most creative minds working for us that produce attention-grabbing designs...
          </p>
          <p>
            The designs created by our team are a complete mixture of outstanding creative skills and professionalism...
          </p>
        </div>
      </section>

      <section className="section light-bg">
        <div className="flex">
          <div className="image-box">
            <img src="/image/graphic-design-2-1024x690.jpg" alt="Graphic Services" />
          </div>
          <div className="text-box">
            <h2>What You Get From Our Graphic Designing Services?</h2>
            <p>
              Weboum Technology is a pioneer in the graphic design space...
            </p>
            <p>The commitment made by our graphics designing team includes:</p>
            <ul>
              <li>Streamlined Communication.</li>
              <li>Quick turnaround time and timely delivery of the projects.</li>
              <li>Unique, professional, creative and graphic designs.</li>
              <li>Regular follow-ups to get the curated designs approved.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 style={{ textAlign: 'center' }}>Graphics Design Services We Offer!</h2>
        <p style={{ textAlign: 'center' }}>
          Weboum Technology offers a host of designing services to cater to unique business needs.
        </p>

        <div className="services-wrapper">
          <div className="services-row">
            <div className="service-item">
              <h4>🖐️ Social Media Design:</h4>
              <p>
                Personalized designs to compel your audience on social media...
              </p>
            </div>
            <div className="service-item">
              <h4>🎯 Branding and Logo Design:</h4>
              <p>
                Unmatched logo services at cost-effective rates...
              </p>
            </div>
          </div>

          <div className="services-row">
            <div className="service-item">
              <h4>📱 Mobile App Design:</h4>
              <p>
                Intuitive and attractive mobile app designs...
              </p>
            </div>
            <div className="service-item">
              <h4>✨ Website UI and UX Design:</h4>
              <p>
                User-centric graphic design approach...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="quality-results">
        <h2>Measure Quality Results Obtained by Our Services!</h2>

        <div className="results-grid">
          <div className="result-card">
            <div className="icon">🔷</div>
            <h3>Optimized Ranking on the SERP:</h3>
            <p>Witness significant improvements in terms of SERP ranking...</p>
          </div>

          <div className="result-card">
            <div className="icon">🏠</div>
            <h3>Enhanced Usability of your Websites:</h3>
            <p>Enhance the user experience of your website...</p>
          </div>

          <div className="result-card">
            <div className="icon">➕</div>
            <h3>Competitive Advantage:</h3>
            <p>Excellent user experience will help you get ahead...</p>
          </div>
        </div>

        <p className="bottom-note">
          Need someone who can use their creative skills to make a design that you desire? Weboum Technology is what you’re looking for.
        </p>
      </section>
    </div>
  );
};

export default GraphicDesign;
