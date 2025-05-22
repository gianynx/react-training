import PropTypes from 'prop-types';
import '../assets/css/CardImage.css';

function CardImage({ imgSrc, imgTitle }) {
    return (
        <div className="card card-img-container">
            <a href="/">
                <img src={imgSrc} alt={imgTitle} className="card-img-custom" />
            </a>
            <div className="card-img-overlay">
                <h4 className="card-title text-center pt-4">{imgTitle}</h4>
            </div>
        </div>
    );
}

// Prop type validation
CardImage.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgTitle: PropTypes.string.isRequired,
};

export default CardImage;