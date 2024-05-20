import Button from "../button";
import "./index.scss";

const CTA = () => {
    return (
        <div className="call-to-action">
            <div className="text-container">
                <h2 className="cta-title">Get in Touch</h2>
                <p className="cta-p">
                    Ready to transform your business with AI-driven solutions?</p>
                <p className="cta-p">Contact us today to discuss your needs and find out how Morfbot AI Business Solutions can help you achieve your goals, Click on our chatbot to book a consultation.</p>
            </div>
            <div className="btn-container">
                <Button
                    text="Contact Us"
                    link="/contact-us"
                    target="_blank"
                    background="var(--button)"
                />
                <Button
                    text="Book a Call"
                    link="https://calendly.com/morfbot/120mins?back=1&month=2024-05"
                    background="var(--opposite)"
                    target="_blank"
                />
            </div>
        </div>
    );
}

export default CTA;