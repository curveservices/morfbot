import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./index.scss";

const Socials = (props) => {
    return ( 
        <>
            <ul className="iconList">
                <li className="icons">
                    <Link to={props.instaLink} target="_blank" rel="noreferer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </li>
                <li className="icons">
                    <Link to={props.lilink} target="_blank" rel="noreferer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                </li>
                
            </ul>
        </>
     );
}
 
export default Socials;