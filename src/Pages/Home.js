import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  color: #4BA3C3;
`;
const HomeLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: black;
`;



const Home = () => {
    return ( 
        <>
        <section>
            <h1>Meet the Artist</h1>
            <article>
                <p>Greetings! My name is Weslyn Lundberg Toft and I’m a 22-year-old Web Developer / artist. This is my very own portfolio that I’ve created using Next.js and Tailwind CSS. In this portfolio you will be able to see some of my previous works and websites that I’ve created. There will also be a link to my GitHub, so you will be able to see my other works that aren’t currently online. </p>
                <p>I’ve been drawing and making art since I was about nine years old, and I newly started my journey as a Web Developer last year (2022). Before I started, I had no idea the passion and fun I would have and get for this industry and for this work. To me, websites are like learning a new language. A new way to see and understand the world and that’s an amazing aspect to me. </p>
            </article>
        </section>

        <section>
            <h1>Dazzling Masterpieces</h1>
            <article className="grid">
                <img className='' src="/img/moterbike-2.png" alt="Artiwork of a moterbike cyclist" />
                <img className='' src="/img/eye.png" alt="Artiwork of a blue eye" />
                <img className='' src="/img/sundown-2.png" alt="Artwork of a sundown" />
                <img className='' src="/img/city-me.png" alt="Artwork of creator" />
            </article>
        </section>

        <section>
            <h1>Websites</h1>
            <article>
                <article className="card">
                    <img className='website_img' src="/img/MyMovie.png" alt="MY movie Website" />
                    <h2>My Movie Webpage</h2>
                    <p>This website was my first attempt at using an API fully on a whole website. It's made with clean JavaScript and normal CSS.</p>
                    <StyledLink href="https://mymovies-wess.netlify.app/">Link to MyMovie</StyledLink>
                </article>
                <article className="card">
                    <img className='website_img' src="/img/movibes.png" alt="Movie Website" />
                    <h2>Movibes Webpage</h2>
                    <p>This website is a sequal to my first movie site, MyMovie. This site is made with Next.js and Tailwind CSS.</p>
                    <StyledLink href="https://weslyn-movibes.netlify.app/">Link to Movibes</StyledLink>
                </article>
                <article className="card">
                    <img className='website_img' src="/img/Portfolio4.png" alt="Fourth portfolio Website" />
                    <h2>My 4th Portolio</h2>
                    <p>This is my fourth attempt at makin my portfolio. This webpage is made with vanilla React and CSS components.</p>
                    <StyledLink href="https://weslyn-portfolio-4.netlify.app/">Link to 4th Portfolio</StyledLink>
                </article>
            </article>
        </section>

        <section>
        <article>
          <h1>Ready to Dive into Weslyn's World?</h1>
          <div className='home_btn'>
          <button><HomeLink to={"/info"}>Info Page</HomeLink></button>
          <button className="blue_btn"><HomeLink to={"/gallery"}>Gallery</HomeLink></button>
          </div>
        </article>
      </section>
        </>
     );
}
 
export default Home;