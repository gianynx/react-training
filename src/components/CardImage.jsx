import PropTypes from 'prop-types';
import '../assets/css/CardImage.css';

function CardImage({ imgSrc, imgTitle }) {
    return (
        <a href="/" className="card card-img-container">
            <img src={imgSrc} alt={imgTitle} className="card-img-custom" />
            <div className="card-img-overlay">
                <h4 className="card-title text-center pt-4">{imgTitle}</h4>
            </div>
        </a>
    );
}

// Prop type validation
CardImage.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgTitle: PropTypes.string.isRequired,
};

export default CardImage;