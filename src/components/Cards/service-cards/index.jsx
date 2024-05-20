import "./index.scss";

const ServiceCard = (props) => {
    return ( 
        <div className="card">
            <img src={props.src} alt="services" />
            <h3>{props.title}</h3>
            <p>{props.p}</p>
        </div>
     );
}
 
export default ServiceCard;