import { NavLink } from "react-router-dom";
import "./components.css";


const Header = () => {
    return ( 
        <header>
            <div>
            <img className="header_img logo" src="/img/pink-me-2.png" alt="Logo" />
            <img className="header_img" src="/img/navn.png" alt="Name" />
            </div>
            <nav id="navbar">
                <NavLink
                    to="/"
                    style={({ isActive }) => {
                        return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "#4BA3C3" : "white",
                        textDecoration: isActive ? "none" : "none"
                        };
                    }}
                >
                Home
                </NavLink>
                <NavLink
                    to="/gallery"
                    style={({ isActive }) => {
                        return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "#4BA3C3" : "white",
                        textDecoration: isActive ? "none" : "none"
                        };
                    }}
                >
                View Artworks
                </NavLink>
                <NavLink
                    to="/info"
                    style={({ isActive }) => {
                        return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "#4BA3C3" : "white",
                        textDecoration: isActive ? "none" : "none"
                        };
                    }}
                >
                About Weslyn
                </NavLink>
            </nav>
        </header>
     );
}
 
export default Header;