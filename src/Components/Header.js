import { Link } from "react-router-dom";


const Header = () => {
    return ( 
        <header>

            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/info"}>Info Page</Link>
                <Link to={"/gallery"}>Gallery</Link>
            </nav>
        </header>
     );
}
 
export default Header;