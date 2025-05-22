import PropTypes from 'prop-types';
import '../assets/css/CardImage.css';

function CardImage({ imgSrc, imgTitle }) {
    return (
        <a href="/" className="card card-img-container">
            <img src={imgSrc} alt={imgTitle} className="card-img-custom" />
            <div className="card-img-overlay d-flex justify-content-between align-items-baseline p-5">
                <h4 className="card-title text-center">{imgTitle}</h4>
                <button type="button" className="btn btn-outline-dark">Acquista</button>
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