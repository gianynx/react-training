import PropTypes from 'prop-types';
import '../assets/css/CardImage.css';

function CardImage({ imgSrc, imgTitle }) {
    return (
        <div className="card card-img-container">
            <a href="/">
                <img src={imgSrc} alt={imgTitle} className="card-img-custom" />
            </a>
        </div>
    );
}

// Prop type validation
CardImage.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgTitle: PropTypes.string.isRequired,
};

export default CardImage;