import { Link } from "react-router-dom";
import "./components.css";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4BA3C3;
`;


const Header = () => {
    return ( 
        <header>
            <div>
            <img className="header_img logo" src="/img/pink-me-2.png" alt="Logo" />
            <img className="header_img" src="/img/navn.png" alt="Name" />
            </div>
            <nav>
                <StyledLink to={"/"}>Home</StyledLink>
                <StyledLink to={"/info"}>Info Page</StyledLink>
                <StyledLink to={"/gallery"}>Gallery</StyledLink>
            </nav>
        </header>
     );
}
 
export default Header;