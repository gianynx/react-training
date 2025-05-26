import PropTypes from 'prop-types';

function CarouselCaption({ media }) {

    return (
        <div id="manualCarousel" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                {media.map((item, index) => (
                    <div key={item.src} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img src={item.src} className="d-block object-fit-contain" alt={item.alt} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{item.title}</h5>
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