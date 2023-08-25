import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyleLink = styled(Link)`
  color: #4BA3C3;
  text-decoration: none;
  line-height: 2rem;
`;

const Footer = () => {
    return ( 
        <footer>
            <div>
            <StyleLink href="https://www.instagram.com/wessltoft/">My personal Instagram</StyleLink>
            <StyleLink href="https://www.instagram.com/inwesstation/">My art Instagram</StyleLink>
            </div>
            <article>
            <div>
                <p>Mobile Number:</p>
                <p> +45 27 83 55 59</p>
            </div>
            <div>
                <p>Email:</p>
                <p> weslyn-l-toft@gmail.com</p>
            </div>
            </article>
        </footer>
     );
}
 
export default Footer;