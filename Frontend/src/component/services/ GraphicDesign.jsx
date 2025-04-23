// GraphicDesign.jsx
import React from "react";
import "../style/GraphicDesign.css";

function GraphicDesign() {
  return (
    <div className="graphicDesign-wrapper">
      {/* Hero Section */}
      <section className="graphicDesign-container">
        <div className="graphicDesign-flex-row">
          <div className="graphicDesign-text-column">
            <h2>
              Take your business to the next level with <br />
              <strong>Creatively Designed Graphics!</strong>
            </h2>
            <p>
              There is a reason why graphics work like magic for a website... Some stunning photographs can set an emotional tone.
            </p>
            <p>
              Staying up-to-date with design is essential. As new concepts emerge, design continually changes...
            </p>
          </div>
          <div className="graphicDesign-image-column">
            <img src="image/graphic-design.jpg" alt="Graphic Design" />
          </div>
        </div>

        <div>
          <h3>Communicate Your Idea To In An Imaginative Way...</h3>
          <p>At Weboum Technology, we offer a multitude of graphic designing services...</p>
          <h3>Graphics are the most innovative tools...</h3>
          <p>We provide a competitive edge to businesses...</p>
          <p>We have some of the most creative minds working...</p>
          <p>We know how important it is to establish your brand identity...</p>
          <p>The designs created by our team are a mixture of skills and professionalism...</p>
          <p>Hire no other than Weboum Technology to create a strong online presence...</p>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="graphicDesign-section graphicDesign-light-bg">
        <div className="graphicDesign-flex">
          <div className="graphicDesign-image-box">
            <img src="image/graphic-design-2-1024x690.jpg" alt="Graphic Services" />
          </div>
          <div className="graphicDesign-text-box">
            <h2>What You Get From Our Graphic Designing Services?</h2>
            <p>
              Weboum Technology is a pioneer in the graphic design space...
            </p>
            <p>The commitment includes:</p>
            <ul>
              <li>Streamlined Communication.</li>
              <li>Quick turnaround time and timely delivery.</li>
              <li>Unique, professional, and creative designs.</li>
              <li>Regular follow-ups for approvals.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="graphicDesign-section">
        <h2 className="graphicDesign-center">Graphics Design Services We Offer!</h2>
        <p className="graphicDesign-center">
          Weboum Technology offers a host of designing services for unique business needs.
        </p>
        <div className="graphicDesign-services-wrapper">
          <div className="graphicDesign-services-row">
            <div className="graphicDesign-service-item">
              <h4>🖐️ Social Media Design:</h4>
              <p>Designs that compel your audience on social media platforms.</p>
            </div>
            <div className="graphicDesign-service-item">
              <h4>🎯 Branding and Logo Design:</h4>
              <p>Creative and meaningful logo designs at cost-effective rates.</p>
            </div>
          </div>
          <div className="graphicDesign-services-row">
            <div className="graphicDesign-service-item">
              <h4>📱 Mobile App Design:</h4>
              <p>Attractive mobile app designs that improve business growth.</p>
            </div>
            <div className="graphicDesign-service-item">
              <h4>✨ Website UI and UX Design:</h4>
              <p>User-centric graphic designs that boost consumer engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Results Section */}
      <section className="graphicDesign-quality-results">
        <h2>Measure Quality Results Obtained by Our Services!</h2>
        <div className="graphicDesign-results-grid">
          <div className="graphicDesign-result-card">
            <div className="graphicDesign-icon">🔷</div>
            <h3>Optimized Ranking on the SERP:</h3>
            <p>Improved SERP ranking through user-friendly designs.</p>
          </div>
          <div className="graphicDesign-result-card">
            <div className="graphicDesign-icon">🏠</div>
            <h3>Enhanced Usability of your Websites:</h3>
            <p>Improved user experience by optimizing site components.</p>
          </div>
          <div className="graphicDesign-result-card">
            <div className="graphicDesign-icon">➕</div>
            <h3>Competitive Advantage:</h3>
            <p>Boost customer perception and stand out from competitors.</p>
          </div>
        </div>
        <p className="graphicDesign-bottom-note">
          Need someone who can use their creative skills to make a design that you desire? Contact Weboum Technology!
        </p>
      </section>
    </div>
  );
}

export default GraphicDesign;
