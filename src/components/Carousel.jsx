import PropTypes from 'prop-types';
import '../assets/css/Carousel.css';

function Carousel({ media }) {

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div id="carouselSlidesOnly" className="carousel slide carousel-fade vw-100" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {media.map((item, index) => (
                        <div key={item.src} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            {item.type === 'video' ? (
                                <video src={item.src} className="d-block w-100 object-fit-cover" autoPlay loop muted playsInline />
                            ) : (
                                <img src={item.src} className="d-block object-fit-cover" alt={item.alt} />)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Prop type validation 
Carousel.propTypes = {
    media: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Carousel;