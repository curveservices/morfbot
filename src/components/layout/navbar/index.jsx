import { faBars, faClose, faEnvelopeOpen, faHouse, faToolbox, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/Logo.png";
import Button from "../../button";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);
    return (
        <header>
            <NavLink to="/">
                <div className="title-container">
                    <img src={logo} alt="MorfBot" className="logo" />
               </div>
            </NavLink>
            <nav className={showNav ? "mobile-show" : ""}>
                <NavLink
                    to="/"
                    title="Home"
                    className="link"
                    activeclassname="active"
                    exact="true"
                    onClick={() => setShowNav(false)}
                >
                    <div className="menu-container">
                        <FontAwesomeIcon icon={faHouse} className="mobile-icon" />
                        <div className="text">Home</div>
                    </div>
                </NavLink>
                <NavLink
                    to="services"
                    title="Services"
                    className="link"
                    activeclassname="active"
                    exact="true"
                    onClick={() => setShowNav(false)}
                >
                    <div className="menu-container">
                        <FontAwesomeIcon icon={faToolbox} className="mobile-icon" />
                        <div className="text">Services</div>
                    </div>
                </NavLink>
                <NavLink
                    to="about-us"
                    title="About Us"
                    className="link"
                    activeclassname="active"
                    exact="true"
                    onClick={() => setShowNav(false)}
                >
                    <div className="menu-container">
                        <FontAwesomeIcon icon={faUserAlt} className="mobile-icon" />
                        <div className="text">About Us</div>
                    </div>
                </NavLink>
                <NavLink
                    to="contact-us"
                    title="Contact Us"
                    className="link"
                    activeclassname="active"
                    exact="true"
                    onClick={() => setShowNav(false)}
                >
                    <div className="menu-container">
                        <FontAwesomeIcon icon={faEnvelopeOpen} className="mobile-icon" />
                        <div className="text">Contact Us</div>
                    </div>
                </NavLink>
                <FontAwesomeIcon
                    icon={faClose}
                    size="1x"
                    className="close-icon"
                    onClick={() => setShowNav(false)}
                />
                <Button
                    link="https://calendly.com/morfbot/120mins?back=1&month=2024-05"
                    text="Book a Call"
                    background="var(--button)"
                    target="_blank"
                />
            </nav>
            <FontAwesomeIcon
                icon={faBars}
                size="1x"
                className="hamburger"
                onClick={() => setShowNav(true)}
            />
        </header>
    );
}

export default Navbar;