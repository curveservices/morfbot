import Helmet from "react-helmet";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import chatbot from "../../../assets/images/2.png";
import web from "../../../assets/images/3.png";
import chat from "../../../assets/images/4.png";
import morf from "../../../assets/images/morfbot.webp";
import Button from "../../button";
import CTA from "../../CTA";
import "./index.scss"

const Services = () => {
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [fourth, setFourth] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scroll1 = window.scrollY;
            const scroll2 = window.scrollY;
            const scroll3 = window.scrollY;
            const scroll4 = window.scrollY;

            setFirst(scroll1 > 300);
            setSecond(scroll2 > 800);
            setThird(scroll3 > 1300);
            setFourth(scroll4 > 1800);
        };

        window.addEventListener("scroll", handleScroll);
    })

    return ( 
        <>
            <div className="services-page">
                <section className="hero">
                    <div className="textbox">
                        <h1 className="title">Our Services</h1>
                        <div className="text">
                            <p>We understand that navigating the complexities of the modern business landscape requires innovative solutions &amp; a personalised approach. Our AI-powered tools &amp; services are designed to empower your business. Whether you're looking to optimise your processes, enhance customer engagement, or drive data-driven decision-making, we can support you.</p>
                            <p>Our Ai approach is to enhance business workflows, develop teams &amp; create a brighter working environment. Our solutions are not developed to encourage retrenchment, only the mundane daily or outsourced tasks can be effected. We guarantee our systems will save time &amp; money while increasing productivity with a heavy focus on customer/client and team working experience.</p>
                        </div>
                    </div>
                    <img src={morf} alt="morfbot" className="logo" />
                </section>
                <section className="first">
                    <div className={`info ${first ? "animFirst" : "none"}`}>
                        <h2>More info on our services.</h2>
                        <p>Our business model is retainer based, We create the solutions on our platform, maintain, and update any changes or suggestions required as part of the monthly fee and include a monthly audit to ensure everything is still as it should be, This gives you piece of mind knowing if anything was to go wrong we can fix and get you going with minimal disruption. The monthly retainer fee is payable upon starting any work we commence.</p>
                        <p>The first step is to book a consultation call with our team, in the consult we have a friendly discussion about how your business runs and make suggestions, 50% off your consultation fee is deducted from your first bill. We work with start-ups and existing businesses.</p>
                    </div>
                </section>
                <section className="section">
                    <div className="section-inner">
                        <div className="textbox">
                            <img
                                src={chatbot}
                                alt="chatbots and automation"
                                className={`service-img ${second ? "animLeft" : "none"}`} />
                            <div className={`text ${second ? "animRight" : "none"}`}>
                                <h1>Chatbots &amp; Automation</h1>
                                <h2>Starting at £495 p/m</h2>
                                <p>First step is a consultation call, If you decide to work with us, 50% of the consultation fee will be deducted from your first month retainer. Our Ai systems are created, implemented and maintained by Morfbot Ai Business Solutions, Please see below a short list of services provided.</p>
                                <ul>
                                    <li>Chatbots: (Website, WhatsApp and social media) </li>
                                    <li>Front end receptionist solutions.</li>
                                    <li>Custom CRM solutions</li>
                                    <li>Automation and workflow: Lead capture, Appointment setting, non payment receipt, product API integration, feedback/survey forms and customer reviews and more.</li>
                                </ul>
                                <div className="button-container">
                                    <Button text="Book a call" link="https://calendly.com/morfbot/120mins?back=1&month=2024-05" target="_blank"/>
                                    <Button text="Contact us" background="var(--secondary)" color="var(--button)" link="contact-us" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="section-inner">
                        <div className="textbox">
                            <img
                                src={web}
                                alt="websites"
                                className={`service-img ${third ? "animLeft" : "none"}`} />
                            <div className={`text ${third ? "animRight" : "none"}`}>
                                <h1>Website design</h1>
                                <h2>Starting from £695</h2>
                                <p>Our 4 page web design starts from £695 with free hosting for the first year, Our website and chatbot solution is £1195 for a 4 page website and chatbot, this price may increase depending on your chatbot requirements, for larger websites please a quote will be given, a charge of £50 per month will be added to maintain your website and chatbot hosting, Website hosting is free for one year.</p>
                                <div className="button-container">
                                    <Button text="Book a call" link="https://calendly.com/morfbot/120mins?back=1&month=2024-05" target="_blank"/>
                                    <Button text="Contact us" background="var(--secondary)" color="var(--button)" link="contact-us" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="section-inner">
                        <div className="textbox">
                            <img
                                src={chat}
                                alt="consultation"
                                className={`service-img ${fourth ? "animLeft" : "none"}`} />
                            <div className={`text ${fourth ? "animRight" : "none"}`}>
                                <h1>Consultation</h1>
                                <p>We always strongly recommend a consultation, This gives both parties an opportunity to build a relationship from day one while gaining insight and knowledge on how you operate, Most business owners already have a good idea on how they would like their business to run so we listen to your ideas before suggesting our own, Don't worry if your unsure, Morfbot Ai Business Solutions are here to assist, we look forward to working with you. All consultations are online we use Google Meets.</p>
                                <div className="button-container">
                                    <Button text="Book a call" link="https://calendly.com/morfbot/120mins?back=1&month=2024-05" target="_blank"/>
                                    <Button text="Contact us" background="var(--secondary)" color="var(--button)" link="contact-us"/>
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
            <div>
                <Helmet>
                    <title>Services | AI Solutions and Automation Agency</title>
                </Helmet>
            </div>
          
            <Loader type="ball-spin-fade-loader" color="white" />
        </>
        
     );
}
 
export default Services;