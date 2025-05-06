import React from "react";
import Button from "../../components/button";
import CTA from "../../components/CTA";
import useScrollStates from "../../components/scrollState";
import chatbot from "../../assets/images/2.webp";
import web from "../../assets/images/3.webp";
import chat from "../../assets/images/4.webp";
import hero from "../../assets/images/hero.webp";
import service1 from "../../assets/images/Image.webp";
import service2 from "../../assets/images/service2.webp";
import "./index.scss";

const Services = () => {
  const { second, third, fourth } = useScrollStates();

  return (
    <>
      <div className="services-page">
        <section className="hero">
          <img
            src={hero}
            alt="Morfbot ai & automation agency in the UK"
            className="hero-img"
          />
          <div className="text-box">
            <div className="subtitle">Our Services</div>
            <h1 className="title">
              We <span>Specialise</span> in AI & Automated Solutions.
            </h1>
            <div className="divider" />
            <div className="box-text">
              <p>
                We understand that navigating the complexities of the modern
                business landscape requires innovative solutions & a
                personalised approach. Our AI-powered tools & services are
                designed to empower your business. Whether you're looking to
                optimise your processes, enhance customer engagement, or drive
                data-driven decision-making, we can support you.
              </p>
            </div>
            <Button
              text="Book a Call"
              link="https://calendly.com/morfbot/120mins?back=1&month=2024-05"
              target="_blank"
            />
          </div>
        </section>

        <section className="second-section">
          <div className={`second-inner ${second ? "anim" : "none"}`}>
            <div className="text-box reverse">
              <div className="subtitle">AI Solutions</div>
              <h2 className="title">
                Our AI Approach <span>Enhances</span> Your Business.
              </h2>
              <div className="divider" />
              <div className="box-text">
                <p>
                  Our Ai approach is to enhance business workflows, develop
                  teams & create a brighter working environment. Our solutions
                  are not developed to encourage retrenchment, only the mundane
                  daily or outsourced tasks can be effected. We guarantee our
                  systems will save time & money while increasing productivity
                  with a heavy focus on client and team working experience.
                </p>
              </div>
              <Button text="contact us" link="/contact-us" />
            </div>
            <img src={service1} alt="Expert AI angency UK" className="image" />
          </div>
        </section>

        <section className="third-section">
          <div className={`third-inner ${third ? "anim" : "none"}`}>
            <img
              src={service2}
              alt="Expert AI angency in the UK"
              className="image oposite"
            />
            <div className="text-box">
              <div className="subtitle">how it works</div>
              <h2 className="title">
                Your AI <span>Partner</span>, On Call Every Month
              </h2>
              <div className="divider" />
              <div className="box-text">
                <p>
                  Our monthly retainer service is designed to provide you with
                  ongoing support and access to our expertise. We understand
                  that every business is unique, which is why we offer a
                  tailored approach to meet your specific needs. Whether you
                  require assistance with chatbot development, automation
                  solutions, or any other AI-related services, our team is here
                  to help.
                </p>
              </div>
              <Button
                text="Book a Call"
                link="https://calendly.com/morfbot/120mins?back=1&month=2024-05"
                target="_blank"
              />
            </div>
          </div>
        </section>

        <section className="cta">
          <CTA />
        </section>
        <section className="fourth-section">
          <div className={`fourth-inner ${fourth ? "anim" : "none"}`}>
            <div className="service">
              <img
                src={chatbot}
                alt="chatbots and automation"
                className="service-img"
              />
              <div className="text">
                <div className="service-title" id="chatbots">
                  AI CHAT ASSISTANTS
                </div>
                <div className="subtitle">Starting at £495 p/m</div>
                <p>
                  First step is a consultation call, If you decide to work with
                  us, 50% of the consultation fee will be deducted from your
                  first month retainer. Our Ai systems are created, implemented
                  and maintained by Morfbot Ai Business Solutions, Please see
                  below a short list of services provided.
                </p>
                <ul>
                  <li>Chatbots: Website, WhatsApp &amp; social media </li>
                  <li>Front end receptionist solutions.</li>
                  <li>Custom CRM solutions</li>
                  <li>
                    Automation and workflow: Lead capture, Appointment setting,
                    non payment receipt, product API integration,
                    feedback/survey forms and customer reviews and more.
                  </li>
                </ul>
                <Button text="Contact us" link="/contact-us" />
              </div>
            </div>
            <div className="service">
              <img src={web} alt="ai automation uk" className="service-img" />
              <div className="text">
                <div className="service-title" id="automation">
                  AI AUTOMATION
                </div>
                <div className="subtitle">Starting from £695</div>
                <p>
                  Our Ai systems are created, implemented and maintained by
                  Morfbot. Unlock smarter business operations with AI automation
                  — starting from just £695. We streamline your repetitive
                  tasks, reduce costs, and boost efficiency with tailored
                  solutions that scale with you. From customer service to
                  internal processes, we help your business run smoother,
                  faster, and with less manual effort.
                </p>
                <Button text="Contact us" link="/contact-us" />
              </div>
            </div>
            <div className="service">
              <img src={chat} alt="consultation" className="service-img" />
              <div className="text">
                <div className="service-title" id="consultation">
                  Consultation
                </div>
                <p>
                  We always strongly recommend a consultation, This gives both
                  parties an opportunity to build a relationship from day one
                  while gaining insight and knowledge on how you operate, Most
                  business owners already have a good idea on how they would
                  like their business to run so we listen to your ideas before
                  suggesting our own, Don't worry if your unsure, Morfbot Ai
                  Business Solutions are here to assist, we look forward to
                  working with you. All consultations are online we use Google
                  Meets.
                </p>
                <Button text="Contact us" link="/contact-us" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
