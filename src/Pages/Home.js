

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

        <section className="grid">
        <img className='' src="/img/moterbike-2.png" alt="Artiwork of a moterbike cyclist" />
          <img className='' src="/img/eye.png" alt="Artiwork of a blue eye" />
          <img className='' src="/img/sundown-2.png" alt="Artwork of a sundown" />
          <img className='' src="/img/city-me.png" alt="Artwork of creator" />
        </section>
        </>
     );
}
 
export default Home;