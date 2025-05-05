import Button from "../../button";
import "./index.scss";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.src} alt={props.alt} className="cardImg" />
      <div className="text-box">
        <div className="title">{props.title}</div>
        <div className="price">{props.price}</div>
        <ul>
          <li>{props.li1}</li>
          <li>{props.li2}</li>
          <li>{props.li3}</li>
        </ul>
      </div>
      <div className="btn-container">
        <Button
          text="Buy Now"
          background="var(--button)"
          link={props.stripe}
          target="_blank"
        />
        <Button
          text="Contact Us"
          background="var(--opposite)"
          link="contact-us"
        />
      </div>
    </div>
  );
};

export default Card;
