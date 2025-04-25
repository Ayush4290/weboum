import React from "react";
import "../style/ContentWriting.css";
import Sub_Header from "../Sub_Header";
import Days from "../about-us/Days";

const ContentWriting = () => {
  return (
    <> 
     <Sub_Header title="Content Writing" />  
      <section className="section">
        <div className="container">
          <div className="custom-row">
            <div className="column">
              <h2 className="heading-bold">
                Let's build your business with<br />
                content that attracts, acquaints,<br />
                engages, and sells!
              </h2>
              <p className="mt-3">
                Content is fittingly called the king of the web world. Netizens are getting smarter and they won't stay on your website if they won't find the information they are after. Attractive designs may attract your audience at first, but they can't glue them to your website.
              </p>
              <p>
                This is where our king – Content – enters the frame. In fact, it is the major factor that determines your rank on the search engine's results pages. Thus, to boost the traffic count of your website you need to post high-quality content.
              </p>
            </div>
            <div className="column center">
              <img src="image/content-wrinting-1.png" alt="Illustration" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="section bg-light-blue">
        <div className="container">
          <h3 className="heading-bold mb-4">Lets' tell your story in the most captivating manner!</h3>
          <p>
            Give our content writers, Weboum Technology, a chance to tell the story of your brand in an appealing manner.
          </p>
          <p>
            It is rightly said that for the public to buy your products, they need to buy your story first. The importance of content is beyond words. Thus, you must always choose the best content writing company to meet all your content-related needs.
          </p>
          <p>
            People will not engage with belligerent wordings used and long explanations, instead, they are attracted towards crisper content. If your content saves them time and energy, they will feel that their decision of checking your brand out was right. Make every impression in front of your prospects to tickle their fancy.
          </p>
          <p>
            Looking for one? Congratulations! You have landed at the correct place. Weboum Technology is your one-stop solution to all your content writing needs.
          </p>
          <p>
            Our professionals have years of experience and they are well aware of the major strategies followed in the industry. You can rely on them to churn out high-quality content that will
          </p>
        </div>
      </section>

      {/* Section 3: Strategies */}
      <section className="section">
        <div className="container center-text">
          <h3 className="heading-bold">Content Writing Strategies To Boost Your SERP Ranking :</h3>
          <p className="text-muted mb-5">
            Our content writing process involves the following steps:
          </p>

          <div className="strategy-grid">
            <div className="strategy-item">
              <div className="icon text-danger">
                <span className="search-icon"></span>
              </div>
              <div>
                <h5 className="heading-bold text-danger">Keyword Research:</h5>
                <p>At first, our professionals find the fitting keywords to be inserted in your content. We make sure that the targeted audience can relate to the keywords used in the contents of your website, thereby boosting its ranking on the SERPs.</p>
              </div>
            </div>

            <div className="strategy-item">
              <div className="icon text-purple">
                <span className="binoculars-icon"></span>
              </div>
              <div>
                <h5 className="heading-bold text-purple">Competitor Research:</h5>
                <p>In the next step, we research your competitor and check what heading and subheadings they have covered in their article.</p>
              </div>
            </div>

            <div className="strategy-item">
              <div className="icon text-pink">
                <span className="pencil-icon"></span>
              </div>
              <div>
                <h5 className="heading-bold text-pink">Writing:</h5>
                <p>
                  According to the research done, we churn out high-quality content for you. Then, we insert the keywords as naturally as possible so that the search engines can easily pick them up. We then check the content on various premium tools to ensure that it is of high quality.
                </p>
              </div>
            </div>

            <div className="strategy-item">
              <div className="icon text-purple">
                <span className="journal-icon"></span>
              </div>
              <div>
                <h5 className="heading-bold text-purple">Proofreading:</h5>
                <p>It is one of the most important steps. We look for any errors that we have made while reading. Once we ensure that it is good to go, we hand it over to you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="section bg-light-blue">
        <div className="container">
          <div className="custom-row">
            <div className="column center">
              <img src="image/content-wrinting.png" alt="Enhance Content" className="img-fluid" />
            </div>
            <div className="column">
              <h4 className="heading-bold">Let's Enhance The Already Published Content On Your Site!</h4>
              <p>We use the latest tools to enhance the content already published on your website. We modify the old content and recreate it into highly user-friendly content.</p>
              <p>We also deal with format management, web-based publishing, indexing search etc. You stay rest assured with our effective content creation services that our experts will churn out high-quality content that will help you rank higher on the SERPs. Avail of our services to reach the maximum number of potential clients.</p>
              <p>Reach out to us today and avail of our services. Feel free to contact us anytime</p>
            </div>
          </div>
        </div>
      </section>
      <Days/>
    </>
  );
};

export default ContentWriting;