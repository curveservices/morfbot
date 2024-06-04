import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears, faHandshake, faTools, faUsers } from "@fortawesome/free-solid-svg-icons";
import CTA from "../../CTA";
import Loader from "react-loaders";
import { useState } from "react";
import { useEffect } from "react";
import Helmet from "helmet";

const About = () => {
    const [leftScroll, setLeftScroll] = useState(false);
    const [rightScroll, setRightScroll] = useState(false);
    const [second, setSecond] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const titleScroll = window.scrollY;
            const leftAnim = window.scrollY;
            const rightAnim = window.scrollY;
            setSecond(titleScroll > 500);
            setLeftScroll(leftAnim > 500);
            setRightScroll(rightAnim > 500);
        };
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, [])

    return ( 
        <>
            <div className="about-page">
                <section className="hero">
                    <div className="inner-hero">
                        <div className="textbox">
                            <div className="about">
                                <h1>About Us</h1>
                                <p>Welcome to <span>Morfbot AI Business Solutions! </span>
                                    We are a dynamic team dedicated to transforming the way businesses operate through innovative technology.
                                    Our mission is to empower companies of all sizes with cutting-edge AI solutions that streamline processes,
                                    enhance customer engagement, and drive growth.
                                </p>
                            </div>
                            <div className="second-text">
                                <div className="info">
                                    <h2>What we do</h2>
                                    <p>We specialise in creating custom chatbots, developing automation systems,
                                        building bespoke CRM solutions, and designing modern websites.
                                        Our expertise in harnessing the power of artificial intelligence and automation to deliver personalised
                                        solutions tailored to the needs of each client.
                                    </p>
                                </div>
                                <div className="info">
                                    <h2>Who we work with</h2>
                                    <p>We are proud to work with a diverse range of clients, from innovative startups to established businesses across various industries. Our solutions are designed to scale with your business, providing value at every stage of growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="second-section">
                    <div className="inner-second">
                        <div className={`textbox ${second ? "secondAnim" : "none"}`}>
                            <h1>Why Choose us</h1>
                            <div className="card-container">
                                <div className={`card ${leftScroll ? "leftAnim" : "none"}`}>
                                    <FontAwesomeIcon className="icon" icon={faTools} />
                                    <h2>Expertise</h2>
                                    <p>Our team consists of experienced professionals with a deep understanding of AI, automation, and web development. We stay ahead of industry trends to provide you with the latest and most effective solutions.</p>
                                </div>
                                <div className={`card ${leftScroll ? "leftAnim" : "none"}`}>
                                    <FontAwesomeIcon className="icon" icon={faGears} />
                                    <h2>Customisation</h2>
                                    <p>We believe in the power of customisation. Every solution we create is tailored to the specific needs and goals of your business, ensuring you get the most out of our services.</p>
                                </div>
                                <div className={`card ${rightScroll ? "rightAnim" : "none"}`}>
                                    <FontAwesomeIcon className="icon" icon={faHandshake} />
                                    <h2>Commitment</h2>
                                    <p>We are committed to your success. From startups to established enterprises, we work closely with you to understand your challenges and deliver solutions that drive real results.</p>
                                </div>
                                <div className={`card ${rightScroll ? "rightAnim" : "none"}`}>
                                    <FontAwesomeIcon className="icon" icon={faUsers} />
                                    <h2>Support</h2>
                                    <p>Our relationship doesn’t end with the delivery of your project. We provide ongoing support and maintenance to ensure your systems run smoothly and continue to meet your evolving needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cta">
                    <CTA />
                </section>
                <div className="sep"></div>
            </div>
            <Helmet>
                <title>About Us | AI Solutions and Automation Agency</title>
            </Helmet>
            <Loader type="ball-spin-fade-loader" color="white" />
        </>
     );
}
 
export default About;