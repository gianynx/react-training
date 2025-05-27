import PropTypes from 'prop-types';

function CarouselCaption({ media }) {

    return (
        <div id="manualCarousel" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="7" aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="8" aria-label="Slide 9"></button>
            </div>
            <div className="carousel-inner">
                {media.map((item, index) => (
                    <div key={item.src} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <a href="/">
                            <img src={item.src} className="d-block object-fit-cover mx-auto w-75" alt={item.alt} />
                        </a>
                        <div className="carousel-caption d-none d-md-block">
                            <h2><span className="badge text-bg-dark">{item.title}</span></h2>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#manualCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#manualCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

// Prop type validation
CarouselCaption.propTypes = {
    media: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string,
            title: PropTypes.string,
        })
    ).isRequired,
};

export default CarouselCaption;