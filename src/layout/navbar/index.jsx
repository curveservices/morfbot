import {
  faEnvelopeOpen,
  faHouse,
  faToolbox,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/morfbot.webp";
import MenuToggle from "../../components/menuToggle";
import "./index.scss";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    setHasMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const links = (
    <>
      <NavLink
        to="/"
        onClick={() => setShowNav(false)}
        title="Home"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <div className="menu-container">
          <FontAwesomeIcon icon={faHouse} className="mobile-icon" />
          <div className="text">Home</div>
        </div>
      </NavLink>
      <NavLink
        to="services"
        onClick={() => setShowNav(false)}
        title="Services"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <div className="menu-container">
          <FontAwesomeIcon icon={faToolbox} className="mobile-icon" />
          <div className="text">Services</div>
        </div>
      </NavLink>
      <NavLink
        to="about-us"
        onClick={() => setShowNav(false)}
        title="About Us"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <div className="menu-container">
          <FontAwesomeIcon icon={faUserAlt} className="mobile-icon" />
          <div className="text">About Us</div>
        </div>
      </NavLink>
      <NavLink
        to="contact-us"
        onClick={() => setShowNav(false)}
        title="Contact Us"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <div className="menu-container">
          <FontAwesomeIcon icon={faEnvelopeOpen} className="mobile-icon" />
          <div className="text">Contact Us</div>
        </div>
      </NavLink>
    </>
  );

  return (
    <header
      className={`${isScrolled ? "navbar-scroll navbar-hidden" : ""} ${showNav ? "menu-open" : ""}`}
    >
      <NavLink to="/" aria-label="home page">
        <div className="title-container">
          <img
            src={logo}
            alt="Ai and automation agency UK"
            className="mobile-logo"
          />
        </div>
        <img src={logo} alt="Ai and automation agency UK" className="logo" />
      </NavLink>

      {hasMounted &&
        (isMobile ? (
          <AnimatePresence>
            {showNav && (
              <motion.nav
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="mobile-show"
              >
                {links}
              </motion.nav>
            )}
          </AnimatePresence>
        ) : (
          <nav>{links}</nav>
        ))}

      <MenuToggle showNav={showNav} setShowNav={setShowNav} />
    </header>
  );
};

export default Navbar;
