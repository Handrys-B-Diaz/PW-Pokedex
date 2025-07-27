const Slide = (
    {
        imgMobile,
        imgTablet,
        imgDesktop,
        children
    }
) => {
    return (
        <div className="carousel-slide">
            <picture>
                <source srcSet={imgDesktop} media="(min-width:1025px)" />
                <source srcSet={imgTablet} media="(min-width:720px)" />
                <img src={imgMobile} alt="Pokemon slide" />
            </picture>
            <section className="carousel-action">
                {children}
            </section>
        </div>
    );
}

export default Slide;