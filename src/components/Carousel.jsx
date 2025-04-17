import PropTypes from 'prop-types';

function Carousel({ images }) {

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div id="carouselSlidesOnly" className="carousel slide vw-100" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div key={image.src} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={image.src} className="d-block object-fit-cover" alt={image.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Prop type validation 
Carousel.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Carousel;