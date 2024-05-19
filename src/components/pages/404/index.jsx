import './index.scss';
import notFound from "../../../assets/images/404.png"
import Button from '../../button';

const NotFound = () => {
    return (
        <div className="container">
            <h1>ERROR 404!</h1>
            <h2>PAGE NOT FOUND</h2>
            <Button
                text="go back"
                link="/"
                background="var(--secondary)"
                color="#fff"
            />
            <img src={notFound} alt="page not found" />
        </div>
    );
}

export default NotFound;