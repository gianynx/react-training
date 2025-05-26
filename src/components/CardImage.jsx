import PropTypes from 'prop-types';
import '../assets/css/CardImage.css';

function CardImage({ imgSrc, imgTitle, imgSubTitle, isFullWidth, isCustomLayout }) {
    return (
        <a href="/" className={`card ${isFullWidth ? 'full-width' : 'custom-width'}`}>
            <img src={imgSrc} alt={imgTitle} className="card-img-custom" />
            <div className={`card-img-overlay d-flex ${isCustomLayout ? 'flex-column align-items-end p-4' : 'justify-content-between align-items-baseline p-5'}`}>
                <h4 className="card-title">{imgTitle}</h4>
                <h6>{imgSubTitle}</h6>
                <button type="button" className="btn btn-outline-dark">Acquista</button>
            </div>
        </a>
    );
}

// Prop type validation
CardImage.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgTitle: PropTypes.string.isRequired,
    imgSubTitle: PropTypes.string,
    isFullWidth: PropTypes.bool,
    isCustomLayout: PropTypes.bool,
};

export default CardImage;