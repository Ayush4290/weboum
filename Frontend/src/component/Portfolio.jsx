// Portfolio.js
import React, { useState, useEffect } from 'react';
import './style/portfolio.css';

function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  // Function to handle tab switching
  const showTab = (tabId) => {
    setActiveTab(tabId);
  };

  // Function to open lightbox
  const openLightbox = (src) => {
    setCurrentImage(src);
    setLightboxOpen(true);
  };

  // Function to close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Portfolio images data
  const portfolioImages = {
    all: [
      { src: "https://weboum.com/wp-content/uploads/2024/03/Bolster.jpg", alt: "Portfolio 1" },
      { src: "https://weboum.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-17-at-15.36.26_d394359d.jpg", alt: "Portfolio 2" },
      { src: "https://weboum.com/wp-content/uploads/2024/09/creative-version2-design.png", alt: "Software 1" },
      { src: "https://weboum.com/wp-content/uploads/2024/09/ngaging-Experiences-and-Curated-apps.jpg", alt: "Software 2" },
      { src: "https://weboum.com/wp-content/uploads/2024/03/Log-Me-Once.jpg", alt: "Apps 1" },
      { src: "https://weboum.com/wp-content/uploads/2024/03/Hyleys.jpg", alt: "Apps 2" },
      { src: "https://weboum.com/wp-content/uploads/2024/03/muskilongue-landing-page-V-1.jpg", alt: "Graphics 1" },
      { src: "https://weboum.com/wp-content/uploads/2021/05/phone-tab-lapitop.jpg", alt: "Graphics 2" },
      { src: "https://weboum.com/wp-content/uploads/2024/03/Georgynity.jpg", alt: "Marketing 1" },
      { src: "https://weboum.com/wp-content/uploads/2024/09/Children-s-Therapy-website.png", alt: "Marketing 2" }
    ],
    software: [
      { src: "https://weboum.com/wp-content/uploads/2024/09/creative-version2-design.png", alt: "Software 1" },
      { src: "https://weboum.com/wp-content/uploads/2024/09/ngaging-Experiences-and-Curated-apps.jpg", alt: "Software 2" }
    ],
    apps: [
      { src: "https://weboum.com/wp-content/uploads/2024/03/Log-Me-Once.jpg", alt: "Apps 1" },
      { src: "https://weboum.com/wp-content/uploads/2024/03/Hyleys.jpg", alt: "Apps 2" }
    ],
    graphics: [
      { src: "https://weboum.com/wp-content/uploads/2024/03/muskilongue-landing-page-V-1.jpg", alt: "Graphics 1" },
      { src: "https://weboum.com/wp-content/uploads/2021/05/phone-tab-lapitop.jpg", alt: "Graphics 2" }
    ],
    marketing: [
      { src: "https://weboum.com/wp-content/uploads/2024/03/Georgynity.jpg", alt: "Marketing 1" },
      { src: "https://weboum.com/wp-content/uploads/2024/09/Children-s-Therapy-website.png", alt: "Marketing 2" }
    ]
  };

  // Handle escape key press to close lightbox
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && lightboxOpen) {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    
    // Cleanup event listener
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [lightboxOpen]);

  return (
    <div className="portfolio-container">
      {/* Tabs */}
      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'all' ? 'active' : ''}`} 
          onClick={() => showTab('all')} 
          data-category="all"
        >
          All
        </div>
        <div 
          className={`tab ${activeTab === 'software' ? 'active' : ''}`} 
          onClick={() => showTab('software')}
        >
          Software
        </div>
        <div 
          className={`tab ${activeTab === 'apps' ? 'active' : ''}`} 
          onClick={() => showTab('apps')}
        >
          Apps
        </div>
        <div 
          className={`tab ${activeTab === 'graphics' ? 'active' : ''}`} 
          onClick={() => showTab('graphics')}
        >
          Graphics
        </div>
        <div 
          className={`tab ${activeTab === 'marketing' ? 'active' : ''}`} 
          onClick={() => showTab('marketing')}
        >
          Digital Marketing
        </div>
      </div>

      {/* Portfolio Section */}
      <div className={`portfolio active`}>
        {portfolioImages[activeTab].map((image, index) => (
          <div className="item" key={index}>
            <img 
              src={image.src} 
              alt={image.alt} 
              onClick={() => openLightbox(image.src)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {lightboxOpen && (
        <div className="lightbox">
          <span className="close-lightbox" onClick={closeLightbox}>×</span>
          <img className="lightbox-img" src={currentImage} alt="Full Image" />
        </div>
      )}
    </div>
  );
}

export default Portfolio;