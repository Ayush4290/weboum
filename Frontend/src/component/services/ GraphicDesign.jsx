import React from "react";

const GraphicDesign = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-gray-100">
        <div className="flex-1 pr-0 md:pr-5">
          <h2 className="text-3xl font-medium mb-4">
            Take your business to the next level with <br />
            <strong>Creatively Designed Graphics!</strong>
          </h2>
          <p className="mb-4">
            There is a reason why graphics work like magic for a website. With ingeniously
            designed graphics you can transform a bland site into a powerful and striking
            communication channel for your brand. Some stunning photographs can set an
            emotional tone or augment the already existing one.
          </p>
          <p className="mb-4">
            Staying up-to-date with the world of design is essential. As new concepts emerge,
            design continually changes, and old concepts need to be changed or modified. This is
            where you need to be at your best as far as graphic designing is concerned. There's
            no limit to what you can get designed at Weboum Technology.
          </p>
        </div>
        <div className="flex-1 text-center mt-6 md:mt-0">
          <img src="/api/placeholder/600/400" alt="Graphic Design" className="max-w-full h-auto" />
        </div>
      </section>

      {/* Content Section */}
      <section className="p-10 bg-white text-center">
        <h3 className="text-2xl font-medium mb-4">Communicate Your Idea To In An Imaginative Way And Let The Creativity Flow!</h3>
        <p className="max-w-4xl mx-auto">
          At Weboum Technology, we offer a multitude of graphic designing services and much more in the design spectrum. Your business and website are too
          dependent on what you are showing to your consumers. It is the graphic design that makes the idea and content of your business look more trustworthy.
        </p>
      </section>

      {/* Services Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-gray-100">
        <div className="flex-1 pr-0 md:pr-5">
          <h2 className="text-2xl font-medium mb-4">What You Get From Our Graphic Designing Services?</h2>
          <p className="mb-4">
            Weboum Technology is a pioneer in the graphic design space, and the
            services contain several benefits for businesses, operating in all industries.
            Our team of designers create magnificent designs that will transform your
            business' standard across all digital platforms.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Streamlined Communication.</li>
            <li>Quick turnaround time and timely delivery of the projects.</li>
            <li>Unique, professional, creative and graphic designs.</li>
            <li>Regular follow-ups to get the curated designs approved.</li>
          </ul>
        </div>
        <div className="flex-1 text-center mt-6 md:mt-0">
          <img src="/api/placeholder/600/400" alt="Graphic Services" className="max-w-full h-auto" />
        </div>
      </section>

      {/* Offers Section */}
      <section className="p-10 bg-white text-center">
        <h2 className="text-2xl font-medium mb-4">Graphics Design Services We Offer!</h2>
        <p className="mb-8 max-w-4xl mx-auto">
          Weboum Technology offers a host of designing services to cater to the unique needs of businesses operating in several industries.
        </p>
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-gray-100 border border-gray-300 rounded p-5 h-full">
              <h4 className="text-xl font-medium mb-3">🖐️ Social Media Design:</h4>
              <p>
                We have a team of professional designers at your service who are
                committed to delivering personalized designs to compel your audience
                on social media platforms. Our designs help develop a powerful bond
                between your brand and consumers.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-gray-100 border border-gray-300 rounded p-5 h-full">
              <h4 className="text-xl font-medium mb-3">🎯 Branding and Logo Design:</h4>
              <p>
                When it comes to logo designs, we offer unmatched services at cost-
                effective rates. Our logo designers are all highly creative and create a
                logo that will depict the message of your brand effectively.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-gray-100 border border-gray-300 rounded p-5 h-full">
              <h4 className="text-xl font-medium mb-3">📱 Mobile App Design:</h4>
              <p>
                We deliver intuitive and attractive mobile app designs that lay an
                engaging platform down and also improve the online growth of your
                business.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-gray-100 border border-gray-300 rounded p-5 h-full">
              <h4 className="text-xl font-medium mb-3">✨ Website UI and UX Design:</h4>
              <p>
                We use a user-centric approach in designing graphics for businesses.
                The level of dedication enables us to create awesome graphic designs
                that boost the engagement of your consumers and prospects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Results Section */}
      <section className="p-10 bg-gray-100 text-center">
        <h2 className="text-2xl font-medium mb-8">Measure Quality Results Obtained by Our Services!</h2>
        <div className="flex flex-wrap justify-between mb-8">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white border border-gray-300 rounded p-5 h-full">
              <div className="text-4xl mb-3">🔷</div>
              <h3 className="text-xl font-medium mb-3">Optimized Ranking on the SERP:</h3>
              <p>
                Our team of experts will help you witness significant improvements...
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white border border-gray-300 rounded p-5 h-full">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="text-xl font-medium mb-3">Enhanced Usability of your Websites:</h3>
              <p>
                Our team of designers work collectively to enhance the user experience...
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white border border-gray-300 rounded p-5 h-full">
              <div className="text-4xl mb-3">➕</div>
              <h3 className="text-xl font-medium mb-3">Competitive Advantage:</h3>
              <p>
                Excellent user experience will help you get ahead of the competition...
              </p>
            </div>
          </div>
        </div>
        <p className="text-lg font-medium">
          Need someone who can use their creative skills to make a design that you desire?
        </p>
      </section>
    </div>
  );
};

export default GraphicDesign;