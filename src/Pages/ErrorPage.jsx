import ErrorRobot from "../assets/ErrorRobot.webp"
import "../styles/ErrorPage.css"
const ErrorPage = () => {
    return (
        <div className="ErrorPageMovies">
            <div className="Context">
                <div className="content">
                    <p >Houston</p>
                    <p >We Have a Problem</p>
                    <h1>404</h1>
                    <h3>Page Not Found</h3>
                </div>

                <div className="right__content">
                    <img src={ErrorRobot} alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default ErrorPage;