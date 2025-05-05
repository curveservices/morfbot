import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faHandshake,
  faTools,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import useScrollStates from "../../components/scrollState";
import Button from "../../components/button";
import hero from "../../assets/images/hero.webp";
import about1 from "../../assets/images/about1.webp";
import about2 from "../../assets/images/about2.webp";
import Metrics from "../../components/metrics";
import "./index.scss";

const About = () => {
  const {second, third, fourth} = useScrollStates();

  return (
    <>
      <div className="about-page">
        <section className="hero">
          <img
            src={hero}
            alt="Morfbot ai & automation agency in the UK"
            className="hero-img"
          />
          <div className="text-box">
            <div className="subtitle">About Us</div>
            <h1 className="title">
              We Bring <span>Creative</span> ideas to life.
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
              <div className="subtitle">What we do</div>
              <h2 className="title">
                We <span>Specialise</span> in AI & Automated Solutions.
              </h2>
              <div className="divider" />
              <div className="box-text">
                <p>
                  We specialise in creating custom chatbots, developing
                  automation systems, building bespoke CRM solutions, and
                  designing modern websites. Our expertise in harnessing the
                  power of artificial intelligence and automation to deliver
                  personalised solutions tailored to the needs of each client.
                </p>
              </div>
              <Button text="all services" link="/services" />
            </div>
            <img src={about1} alt="Expert AI angency UK" className="image" />
          </div>
        </section>

        <section className="third-section">
          <div className={`third-inner ${third ? "anim" : "none"}`}>
            <img
              src={about2}
              alt="Expert AI angency in the UK"
              className="image oposite"
            />
            <div className="text-box">
              <div className="subtitle">Who we work with</div>
              <h2 className="title">
                Built for <span>Businesses</span> of Every Size
              </h2>
              <div className="divider" />
              <div className="box-text">
                <p>
                  We are proud to work with a diverse range of clients, from
                  innovative startups to established businesses across various
                  industries. Our solutions are designed to scale with your
                  business, providing value at every stage of growth.
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

        <section className="fourth-section">
          <div className={`fourth-inner ${fourth ? "anim" : "none"}`}>
            <div className="text-box">
              <div className="subtitle">Why Choose us</div>
              <h2 className="title">
                Efficiency, Simplicity, and <span>Support</span> — All in One
              </h2>
              <div className="divider" />
              <div className="box-text">
                <p>
                  Our team of experts is dedicated to providing you with the
                  highest level of service and support. We take the time to
                  understand your unique needs and challenges, ensuring that our
                  solutions are tailored to your specific requirements. With our
                  commitment to excellence, you can trust us to deliver results
                  that exceed your expectations.
                </p>
              </div>
              </div>
              <div className="card-container">
                <div className="card">
                  <FontAwesomeIcon className="icon" icon={faTools} />
                  <div className="card-title">Expertise</div>
                  <p>
                    Our team consists of experienced professionals with a deep
                    understanding of AI, automation, and web development. We
                    stay ahead of industry trends to provide you with the latest
                    and most effective solutions.
                  </p>
                </div>
                <div className="card">
                  <FontAwesomeIcon className="icon" icon={faGears} />
                  <div className="card-title">Customisation</div>
                  <p>
                    We believe in the power of customisation. Every solution we
                    create is tailored to the specific needs and goals of your
                    business, ensuring you get the most out of our services.
                  </p>
                </div>
                <div className="card">
                  <FontAwesomeIcon className="icon" icon={faHandshake} />
                  <div className="card-title">Commitment</div>
                  <p>
                    We are committed to your success. From startups to
                    established enterprises, we work closely with you to
                    understand your challenges and deliver solutions that drive
                    real results.
                  </p>
                </div>
                <div className="card">
                  <FontAwesomeIcon className="icon" icon={faUsers} />
                  <div className="card-title">Support</div>
                  <p>
                    Our relationship doesn’t end with the delivery of your
                    project. We provide ongoing support and maintenance to
                    ensure your systems run smoothly and continue to meet your
                    evolving needs.
                  </p>
                </div>
              </div>
          </div>
        </section>
        <Metrics />
      </div>
    </>
  );
};

export default About;
