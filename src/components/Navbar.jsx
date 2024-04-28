import { Link } from "react-router-dom";
import "../styles/Navbar.css"

const Navbar = () => {
    return (
            <div className="Navbar__Container">
                <Link id="atags" to="/">Home</Link>
                <Link id="atags" to="/Movies">Movies</Link>
            </div>
    );
}
 
export default Navbar;