import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import Socials from "../../socials";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="link-container">
                <div className="links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="services">Services</NavLink>
                    <NavLink to="/" className="home-link">MorfBot</NavLink>
                    <NavLink to="about-us">About</NavLink>
                    <NavLink to="contact-us">Contact</NavLink>
                </div>
            </div>
            <hr className="div-line"></hr>
            <div className="socials-container">
                <Socials />
            </div>
            <div className="copy-container">
                <p className="copy">Copyright <Link to="https://immutable-studio.co.uk/">Immutable Studio &copy;{year}</Link></p>
                <div className="small-print">
                    <p className="copy"><Link to="privacy-policy">Privacy</Link></p>
                    <p className="copy"><Link to="terms">Terms</Link></p>
                </div>

            </div>

        </footer>
    );
}

export default Footer;