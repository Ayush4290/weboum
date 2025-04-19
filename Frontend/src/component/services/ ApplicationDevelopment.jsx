import React from 'react';
import "../style/Application.css"

const Application = () => {
  return (
    <>
      <div className="container section">
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1">
            <h4>Web / Mobile Applications</h4>
            <p>
              Mobile web apps are useful alternatives to native apps for mobile devices. These days, Android-based products and iOS devices like the iPhone and iPad all come packed with fantastic mobile browsers (Mobile Chrome and Mobile Safari respectively), and Opera fans can install their preferred browser too.
            </p>
            <p>
              From a desktop point of view, these products make browsing just about the most pleasurable experience possible. CSS3 transitions, beautifully crafted HTML5 and embellishments mean their users get the highest possible browsing experience (assuming the content being viewed has been crafted with care and consideration).
            </p>
          </div>
          <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
            <img src="image/android-app.jpg" alt="Web Mobile App" />
          </div>
        </div>
      </div>

      <div className="container section">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src="image/web design.png" alt="Web Design" />
          </div>
          <div className="col-md-6">
            <h4>Web Design</h4>
            <p>
              This course covers the basics of web design, including HTML, CSS, and JavaScript. Students learn to create responsive and user-friendly websites following modern design principles.
            </p>
          </div>
        </div>
      </div>

      <div className="container section">
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1">
            <h4>iPhone Development</h4>
            <p>
              This course covers techniques to design and develop software applications. It focuses on user-centered design and the creation of functional prototypes. Students learn database design, new programming languages, and apply MVC architecture for robust applications.
            </p>
          </div>
          <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
            <img src="image/Iphone-app.jpg" alt="iPhone Dev" />
          </div>
        </div>
      </div>

      <div className="container section">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src="image/android-app.jpg" alt="Android Dev" />
          </div>
          <div className="col-md-6">
            <h4>Android Development</h4>
            <p>
              Android is an open-source system using a Java interface. The SDK includes tools like compilers, debuggers, and emulators. Students learn how to develop apps using Android libraries, OpenGL, and more.
            </p>
          </div>
        </div>
      </div>

      <div className="container section">
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1">
            <h4>Compatibility</h4>
            <p>
              Your web browser is a translation device. It takes HTML and renders a web page. This is similar to translating a sentence from French to English — both will convey the same meaning but might use different words.
            </p>
          </div>
          <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
            <img src="image/compatibilty.jpg" alt="Compatibility" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Application;
