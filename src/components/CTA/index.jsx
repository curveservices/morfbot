import Button from "../button";
import "./index.scss";

const CTA = () => {
  return (
    <div className="call-to-action">
      <div className="text-container">
        <h2 className="cta-title">
          Get in <span>Touch</span>
        </h2>
        <p className="cta-p">
          Contact us today to discuss your needs and find out how Morfbot AI
          Business Solutions can help you achieve your goals.
        </p>
      </div>
      <div className="btn-container">
        <Button text="Contact Us" link="/contact-us" target="_blank" />
        <Button
          text="Book a Call"
          link="https://calendly.com/morfbot/120mins?back=1&month=2024-05"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default CTA;
