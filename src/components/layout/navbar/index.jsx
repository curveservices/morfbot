import { faEnvelopeOpen, faHouse, faToolbox, faUserAlt } from "@fortawesome/free-solid-svg-icons";
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
                <img src={logo} alt="MorfBot" className="logo" />
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
                    <FontAwesomeIcon icon={faHouse} className="mobile-icon" />
                    <div className="text">Home</div>
                </NavLink>
                <NavLink
                    to="services"
                    title="Services"
                    className="link"
                    activeclassname="active"
                    exact="true"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faToolbox} className="mobile-icon" />
                    <div className="text">Services</div>
                </NavLink>
                <NavLink
                    to="about-us"
                    title="About Us"
                    className="link"
                    activeclassname="active"
                    exact="true"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faUserAlt} className="mobile-icon" />
                    <div className="text">About Us</div>
                </NavLink>
                <NavLink
                    to="contact-us"
                    title="Contact Us"
                    className="link"
                    activeclassname="active"
                    exact="true"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faEnvelopeOpen} className="mobile-icon" />
                    <div className="text">Contact Us</div>
                </NavLink>
                <Button
                    to=""
                    text="Book a Call"
                />
            </nav>

        </header>
    );
}

export default Navbar;