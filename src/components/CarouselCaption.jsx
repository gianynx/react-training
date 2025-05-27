import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/CarouselCaption.css';

function CarouselCaption({ media }) {

    return (
        <div id="manualCarousel" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1" className="active px-2"></button>
                <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="px-2"></button>
                <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="px-2"></button>
                <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="3" aria-label="Slide 4" className="px-2"></button>
                <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="4" aria-label="Slide 5" className="px-2"></button>
                <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="5" aria-label="Slide 6" className="px-2"></button>
                <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="6" aria-label="Slide 7" className="px-2"></button>
                <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="7" aria-label="Slide 8" className="px-2"></button>
                <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="8" aria-label="Slide 9" className="px-2"></button>
            </div>
            <div className="carousel-inner">
                {media.map((item, index) => (
                    <div key={item.src} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <a href="/">
                            <img src={item.src} className="d-block object-fit-cover mx-auto w-75" alt={item.alt} />
                        </a>
                        <div className="carousel-caption">
                            <h2><span className="badge text-bg-dark">{item.title}</span></h2>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#manualCarousel" data-bs-slide="prev">
                <FontAwesomeIcon icon={faBackward} className="text-dark fs-2" />
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#manualCarousel" data-bs-slide="next">
                <FontAwesomeIcon icon={faForward} className="text-dark fs-2" />
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