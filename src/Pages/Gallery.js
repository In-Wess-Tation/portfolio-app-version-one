

const Gallery = () => {
    return ( 
        <>
        <section className="gallery_png_w">
            <img src="/img/Animation_Day_.png" alt="Artwork" />
            <img src="/img/Wings.png" alt="Artwork" />
            <img src="/img/me-lofi.png" alt="Artwork" />
        </section>

        <section className="gallery_png">
                <img src="/img/pink-me-2.png" alt="Pink artwork" />
                <img src="/img/bubblegum-2.png" alt="Bubblegum artwork" />
                <img src="/img/dis-tattoo-2.png" alt="Tattoo artwork" />
                <img src="/img/Azrael1.png" alt="D&D artwork" />
        </section>

        <section className="gallery_png grid">
            <img src="/img/eye-2.png" alt="Blue eye artwork" />
            <img src="/img/DND.png" alt="D&D drawing" />
            <img src="/img/tzekel-kan-2.png" alt="Tzekel Kan drawing" />
            <img src="/img/pan-me-2.png" alt="Pansexual drawing" />
        </section>

        <section className="gallery_png grid_two">
            <div className="flex">
                <img src="/img/albino.png" alt="Realistic artwork of an albino girl" />
                <img src="/img/pride-me.png" alt="Pride drawing of creator" /> 
            </div>
            <div className="flex">
                <img src="/img/siren.png" alt="Realistic artwork of an siren girl" />
                <img src="/img/lightning-2.png" alt="Lightning drawing" />
            </div>
            <img src="/img/green-me-2.png" alt="Drawing of one of my original characters" />
        </section>

        <section className="gallery_png grid">
            <img src="/img/art-me.png" alt="Drawing of Weslyn" />
            <img src="/img/book-shop.png" alt="Bookshop artwork" />
            <img src="/img/route66.jpg" alt="Drawing of route 66" />
            <img src="/img/city-me.png" alt="City drawing" />
        </section>

        <section className="gallery_png flex">
            <img src="/img/dragon-2.png" alt="Dragon tattoo" />
            <img src="/img/tettoo-sleeve-2.png" alt="Tattoo sleeve" />
        </section>        
        
        </>
     );
}
 
export default Gallery;