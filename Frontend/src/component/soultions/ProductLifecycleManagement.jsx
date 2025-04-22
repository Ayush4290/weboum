import React from 'react';
import '../style/ProductLifecycleManagement.css';

const ProductLifecycleManagement = () => {
  return (
    <div className="page">
      <div className="section-row">
        <div className="section-image">
          <img src="image/ProductLifecycleManagement/productlifecycle 1.png" alt="DevOps Technology Illustration" />
        </div>
        <div className="section-text">
          <h2 className="section-heading">
            Let WebOum Technology handle your Product Lifecycle Management Needs!
          </h2>
          <p>Starting from the concept, through design and development, to packaging and disposal...</p>
          <p>It integrates data, business systems, processes, and provides a product information backbone...</p>
        </div>
      </div>

      <div className="section-row">
        <div className="section-text">
          <h2 className="section-heading">
            Our PLM Solutions Are More Than Just Enabling Technical Capabilities!
          </h2>
          <p>The product lifecycle management solutions offered by our dedicated team of developers...</p>
          <p>A vast range of PLM solutions is established to manage and digitize the entire product lifecycle...</p>
          <p>Our development team also works on cutting-edge PLM products to offer services...</p>
        </div>
        <div className="section-image">
          <img src="image/ProductLifecycleManagement/product-lifecycle-mangement.jpg" alt="DevOps Infinity Loop" />
        </div>
      </div>

      <div className="benefits">
        <h2 className="section-heading">Let’s Check Out A Few Of The Many Benefits Of Our Product Lifecycle Management!</h2>
        <ul className="list">
          <li>Increased Operational Efficiency.</li>
          <li>Reduced Design and Production Rework.</li>
          <li>Reduced Execution Time.</li>
          <li>Reduce Design and Production Rework.</li>
        </ul>
      </div>

      <div className="section-text">
        <h2 className="section-heading">Enter into The Product Market Quickly With Our PL Services!</h2>
        <p>As a manufacturing company, you are already aware of the time that you may have to spend managing...</p>
        <p>Our Product Lifecycle Management services let manufacturers easily connect people, processes, and data...</p>
        <p>Businesses that have already implemented PLM realized enhanced profitability...</p>
      </div>

      <div className="container">
        <h1 className="main-title">PLM Is A Proven Approach And We Know How To Ace It!</h1>
        <p className="subtitle">With the help of our PLM services, your company can reach higher levels of productivity.</p>
        <div className="grid">
          <div className="card">
            <img src="image/ProductLifecycleManagement/add-searching.png" alt="icon" width="40" height="40" />
            <div>
              <div className="card-title">Rapid Deployment</div>
              <p>Our PLM services help businesses realize quick and efficient development...</p>
            </div>
          </div>
          <div className="card">
            <img src="image/ProductLifecycleManagement/allocation.png" alt="icon" width="40" height="40" />
            <div>
              <div className="card-title">Elimination of Bottlenecks</div>
              <p>Our team will ensure that all project lifecycle systems work cohesively...</p>
            </div>
          </div>
        </div>
        <p className="bottom-note">
          Get ready to stay on top of product development projects and connect with business systems.
          Contact our team today to get started!
        </p>
      </div>
    </div>
  );
};

export default ProductLifecycleManagement;
