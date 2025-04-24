import React from "react";
import "../style/WebHostingServices.css";
import Sub_Header from "../Sub_Header";
import Days from "../about-us/Days";

const WebHostingServices = () => {
  return (
    <>
      <Sub_Header title="Web Hosting Services" />
      <div className="page">
        <div className="container">
          <div className="image-section ">
            <img
              src="image/WebHostingServices/web-host.jpg"
              alt="Web Hosting Illustration"
            />
          </div>
          <div className="text-section">
            <h1>
              Power up Your Business Website with Next Level Web Hosting
              Services
            </h1>
            <p>
              A host of different plans are offered... With WebOum there is no
              looking back...
            </p>
            <p>
              WebOum web hosting services consist of 99.9% uptime... 30-day
              money-back guarantee...
            </p>
          </div>
        </div>

        <div className="container">
          <div className="text-section">
            <h1>Powerful And Fastest Web Hosting!</h1>
            <p>
              It’s not rocket science. If you want to get a website online, you
              need web hosting...
            </p>
            <p>
              Aha! You don’t have to worry at all when WebOum Technology is
              here.
            </p>
            <p>
              Book a domain for your website in easy steps... affordable annual
              plans...
            </p>
          </div>
          <div className="image-section pt-20">
            <img
              src="image/WebHostingServices/web-hosting2.jpg"
              alt="Web Hosting Illustration"
            />
          </div>
        </div>

        <div className="section center-text">
          <h2>Trust your website with leading web hosting service provider</h2>
          <p>
            Our domains have best in class security... pick biz hosting to
            obtain maximum advantages.
          </p>
          <p>
            We provide a myriad of hosting services... Some of the services
            offered are:
          </p>
        </div>

        <div className="container">
          <div className="image-section pt-32">
            <img
              src="image/WebHostingServices/web-hosting3.jpg"
              alt="Web Hosting Illustration"
            />
          </div>
          <div className="text-section">
            <p>
              <b>Shared Hosting -</b> It the cheapest type of hosting out there.
              Shared hosting is an arrangement where a number of websites are
              kept on a similar server. Your will be making monthly payments to
              the hosting provider and you will share the facilities with other
              users on the server.
            </p>
            <p>
              <b>VPS Hosting -</b> After a shared hosting plan, virtual private
              hosting is a good “upgrade”. In the case of VPS hosting, you still
              share the physical server space with owners of other websites
              there. That said, your website will be hosted on an independent
              piece of virtual real estate. It is like renting a flat in a
              building with numerous flats. You can’t make changes to the
              building, but you can do anything you like within your rental
              apartment.
            </p>
            <p>
              <b>Dedicated Hosting -</b>As the name implies, this type of
              hosting gives you elite rental rights on a particular web server.
              You can avoid noisy neighbors and have full control over the
              environment. It is like living in an isolated house since you have
              full admin access. It’s your territory and you can do whatever you
              want to do there.
            </p>
          </div>
        </div>

        <div className="container">
          <h3>Apart from these three... Let’s check out a couple of them:</h3>

          <div className="hosting-type">
            <h4>Cloud Hosting</h4>
            <p>
              Hosted by the cloud services provider (CSP)... access to
              distributed resources...
            </p>
          </div>

          <div className="hosting-type">
            <h4>Azure Hosting</h4>
            <p>
              Azure web hosting is popular... discover the benefits of Azure for
              yourself today.
            </p>
          </div>
        </div>

        <div className="container">
          <h1 className="pb-10">Every Web Hosting Plan Include</h1>

          <div className="grid">
            <div className="card">
              <img
                src="image/WebHostingServices/recycle.png"
                alt="icon"
                width="50"
                height="50"
              />
              <div>
                <div className="card-title">One-click Install:</div>
                <p>
                  Access over 150 apps for free to build CMS websites, blogs and
                  forums...
                </p>
              </div>
            </div>

            <div className="card">
              <img
                src="image/WebHostingServices/troca.png"
                alt="icon"
                width="40"
                height="40"
              />
              <div>
                <div className="card-title">Easy to use Control Panel:</div>
                <p>
                  Comprises standardized cPanel to manage backups, apps and
                  security.
                </p>
              </div>
            </div>
          </div>

          <div className="grid">
            <div className="card">
              <img
                src="image/WebHostingServices/recycle.png"
                alt="icon"
                width="50"
                height="50"
              />
              <div>
                <div className="card-title">Resources on Demand:</div>
                <p>
                  Easily increase RAM/CPU, storage and I/O in a single click.
                </p>
              </div>
            </div>

            <div className="card">
              <img
                src="image/WebHostingServices/troca.png"
                alt="icon"
                width="40"
                height="40"
              />
              <div>
                <div className="card-title">24/7 Network Security:</div>
                <p>
                  Peace of mind knowing your network is secured and monitored
                  24/7.
                </p>
              </div>
            </div>
          </div>

          <div className="grid">
            <div className="card">
              <img
                src="image/WebHostingServices/recycle.png"
                alt="icon"
                width="50"
                height="50"
              />
              <div>
                <div className="card-title">Easy Domain Name Setup:</div>
                <p>
                  Linking your website to the domain name has never been easier.
                </p>
              </div>
            </div>
          </div>

          <p className="bottom-note">
            Be smart - Stay Smart – Choose web hosting services that are
            reliable and backed up. Your favorites hosting is just a click away!
          </p>
        </div>
      </div>
      <Days />
    </>
  );
};

export default WebHostingServices;
