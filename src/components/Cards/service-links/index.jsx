import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const ServiceLinks = ({ link, title, text, img }) => (
  <Link to={`/services#${link}`} className="card-link">
    <div className="card">
      <img src={img} alt={title} className="card-img" loading="lazy" />
      <h3 className="card-title">{title}</h3>
      <div className="divider" />
      <p className="card-text">{text}</p>
    </div>
  </Link>
);

const ServiceLinksGrid = ({ services = [] }) => {
  return (
    <section className="services-grid">
      {services.map((service, index) => (
        <ServiceLinks
          key={index}
          link={service.link}
          title={service.title}
          text={service.text}
          img={service.img}
        />
      ))}
    </section>
  );
};

export default ServiceLinksGrid;
