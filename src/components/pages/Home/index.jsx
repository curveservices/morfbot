import Button from "../../button";
import Card from "../../Cards/price-cards";
import chatbot from "../../../assets/images/2.png";
import web from "../../../assets/images/3.png";
import chat from "../../../assets/images/4.png";
import morf from "../../../assets/images/morfbot.webp";
import "./index.scss";
import CTA from "../../CTA";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "react-loaders";
import { NavLink } from "react-router-dom";
import Helmet from "helmet";

const Home = () => {
    const [second, setSecond] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollSecond = window.scrollY;

            setSecond(scrollSecond > 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
    return (
        <>
            <div className="home-page">
                <section className="hero">
                    <div className="textbox">
                        <img src={morf} alt="morfbot" className="logo" />
                        <h1 className="hero-title">Supercharging Business Using The Power of AI</h1>
                    </div>
                    <div className="button-container">
                        <Button text="Contact Us" link="contact-us" background="var(--button)"/>
                        <Button
                            text="Book a Call"
                            link="https://calendly.com/morfbot/120mins?back=1&month=2024-05"
                            background="var(--opposite)"
                            target="_blank"/>
                    </div>

                </section>
                <section className="second-section">
                    <div className="second-inner">
                        <div className={`textbox ${second ? "titleAnim" : "none"}`}>
                            <h1 className="title">Our Services</h1>
                            <div className="info">
                        </div>
                            <p>Our business models works on a monthly retainer base so no client has any cash outlay, depending on the size and what is needed the price will be determined with a minimum of 6 months service retained. (This excludes website cost) </p>
                        </div>
                        <div className={`card-container ${second ? "secondAnim" : "none"}`}>
                            <NavLink to="services">
                                <Card
                                    src={chatbot}
                                    title="ChatBots &amp; Automation"
                                    price="Starting at £495 p/m"
                                    li1="Chatbot integrated to your website"
                                    li2="Automted workflow integration"
                                    li3="Lead Capture and appointment booking"
                                    stripe="https://buy.stripe.com/00g2bTfRVfGZ676aEF"
                                />
                            </NavLink>
                            <NavLink to="services">
                                <Card
                                    src={web}
                                    title="Web Design"
                                    price="Starting from £695"
                                    li1="Custom website design with 4 pages"
                                    li2="Chatbot intergation to your site"
                                    li3="optimised to mobile as standard"
                                    stripe="https://buy.stripe.com/cN29EleNR8exeDC3cc"
                                />
                            </NavLink>
                            <NavLink to="services">
                                <Card
                                    src={chat}
                                    title="Consultation"
                                    price="£249"
                                    li1="Virtual call with no time limit"
                                    li2="Discussion based on your business."
                                    li3="Objectives and planning"
                                    stripe="https://buy.stripe.com/00g2bTfRVfGZ676aEF"
                                />
                            </NavLink>
                        </div>

                    </div>
                </section>
                <section className="cta">
                    <CTA />
                </section>
                <div className="sep"></div>
            </div>
            <Helmet>
                <title>Home | AI Solutions and Automation Agency</title>
            </Helmet>
            <Loader type="ball-spin-fade-loader" color="white" />
        </>
    );
}

export default Home;