import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Helmet from "helmet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import "./index.scss";

const Contact = () => {
    return (
        <>
            <div className="contact-page">
                <section className="text-box">
                    <h1>Contact Us</h1>
                    <p>  Ready to transform your business with AI-driven solutions? Contact us today to discuss your needs and find out how Morfbot AI Business Solutions can help you achieve your goals</p>
                    
                    <div className="contact-form">
                        <form >
                            <ul>
                                <li className="half">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        required
                                    />
                                </li>
                                <li className="half">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email address"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        name="message"
                                        placeholder="Your message"
                                        cols="30"
                                        rows="10"
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="send" />
                                </li>
                                <li>
                                    <Link
                                        className="call-button"
                                        target="_blank"
                                        noreferer
                                        to="https://calendly.com/morfbot/120mins?back=1&month=2024-05"
                                    >
                                        <FontAwesomeIcon icon={faCalendarWeek} /> Book a call
                                    </Link>
                                </li>
                            </ul>
                        </form>
                    </div>
                </section>
                <div className="info-map">
                    MorfBot
                    <br />
                    Leicester, 
                    <br />
                    United Kingdom
                    <br />
                    <span><a href="mailto:hello@immutable-studio.com" >info@morfbot.com</a></span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[52.5389, - 1.37613]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[52.5389, - 1.37613]}>
                            <Popup>We're here</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Helmet>
                <title>Contact Us | AI Solutions and Automation Agency</title>
            </Helmet>
            <Loader type="ball-spin-fade-loader" color="white" />
        </>
    );
}

export default Contact;