import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Socials from "../../components/socials";
import "./index.scss";

const Contact = () => {
  return (
    <>
      <div className="contact-page">
        <section className="contact-hero">
          <div className="text-box">
            <div className="subtitle">contact us</div>
            <h1>
              Get in <span>Touch</span>
            </h1>
            <div className="divider" />
            <p>
              Ready to transform your business with AI-driven solutions? Contact
              us today to discuss your needs and find out how Morfbot AI
              Business Solutions can help you achieve your goals
            </p>
            <div className="socials">
              <Socials />
            </div>
            <div className="contact">
              <Link to="https://calendly.com/morfbot/120mins?back=1&month=2024-05">
                <FontAwesomeIcon icon={faPhone} color="var(--secondary)" /> Book
                a call here
              </Link>

              <Link to="mailto:info@morfbot.com">
                <FontAwesomeIcon icon={faAt} color="var(--secondary)" />{" "}
               {" "} info@morfbot.com
              </Link>
            </div>
          </div>

          <div className="contact-form">
            <form className="contact-form" action="https://formspree.io/f/xjvovqzj" method="POST">
                <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                  />
                
                <label>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                  />
                <label>Your Message</label>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    cols="30"
                    rows="10"
                  ></textarea>
                  <input type="submit" className="flat-btn" value="send" />
             
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
