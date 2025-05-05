import Button from "../../components/button";
import heroImg from "../../assets/images/home-hero.webp";
import secondImg from "../../assets/images/second.webp";
import thirdImg from "../../assets/images/home-services.webp";
import img1 from "../../assets/images/2.webp";
import img2 from "../../assets/images/1.webp";
import img3 from "../../assets/images/4.webp";
import CTA from "../../components/CTA";
import scrollState from "../../components/scrollState";
import ServiceLinksGrid from "../../components/Cards/service-links";
import Metrics from "../../components/metrics";
import "./index.scss";

const Home = () => {
  const { second, third, fourth } = scrollState();
  const services = [
    {
      link: "1",
      title: "CHAT ASSISTANTS",
      text: "Chat assistants integrated into your website. Automated workflow integrations",
      img: img1,
    },
    {
      link: "2",
      title: "AI AUTOMATION",
      text: "Automated workflows integrated into your website. Automated workflow integrations",
      img: img2,
    },
    {
      link: "3",
      title: "CONSULTATION",
      text: "Virtual call with no time limit, based on your business. Objectives and planning",
      img: img3,
    },
  ];
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="text-box">
          <div className="subtitle">we are morfbot</div>
          <h1 className="title">
            <span>Automate</span> the Ordinary. Accelerate the
            <span> Extraordinary. </span>
          </h1>
          <div className="divider" />
          <p className="box-text">
            We are a team of experts in the field of AI and automation. We help
            businesses like yours to automate their processes and accelerate
            their growth.
          </p>
          <Button
            text="Book a Call"
            link="https://calendly.com/morfbot/120mins?back=1&month=2024-05"
            target="_blank"
          />
        </div>
        <img src={heroImg} alt="Expert AI angency UK" className="image" />
      </section>

      <section className="second-section">
        <div className={`second-inner ${second ? "anim" : "none"}`}>
          <img
            src={secondImg}
            alt="Expert AI angency UK"
            className="about-img"
          />
          <div className="text-box">
            <div className="subtitle">about us</div>
            <h2 className="title">
              We Bring <span>Creative </span> ideas to life.
            </h2>
            <div className="divider" />
            <p className="box-text">
              At MorfBot, we turn bold ideas into powerful AI-driven solutions.
              From custom chat assistants to automated workflows, we help
              businesses streamline operations, boost productivity, and deliver
              better customer experiences—all through intelligent, easy-to-use
              technology built for growth.
            </p>
            <p className="box-text">
              Our mission is simple: make advanced AI accessible, so your
              business runs smarter, faster, and with less effort.
            </p>
            <Button text="about us" link="/about-us" />
          </div>
        </div>
      </section>
      <section className="third-section">
        <div className={`third-inner ${third ? "anim" : "none"}`}>
          <div className="text-box reverse">
            <div className="subtitle">our services</div>
            <h2 className="title">
              Experience The Power Of <span>Innovation.</span>
            </h2>
            <div className="divider" />
            <p className="box-text">
              Discover smart AI solutions built to simplify your operations.
              From intelligent chat assistants to seamless workflow automation,
              our services are designed to save time, reduce costs, and help
              your business deliver faster, more consistent customer experiences
              at scale.
            </p>
            <Button text="all services" link="/services" />
          </div>
          <img
            src={thirdImg}
            alt="Expert AI angency UK"
            className="about-img"
          />
        </div>
        <ServiceLinksGrid services={services} />
      </section>
      <section className="cta">
        <CTA />
      </section>
      <section className="fourth-section">
        <Metrics />
      </section>
    </div>
  );
};

export default Home;
