import PropTypes from 'prop-types';

function CardImage({ imgSrc, imgTitle }) {
    return (
        <div className="card" style={{ width: "44rem" }}>
            <img src={imgSrc} alt={imgTitle} className="img-fluid" style={{ height: "27rem", objectFit: "cover" }} />
        </div>
    );
}

// Prop type validation
CardImage.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgTitle: PropTypes.string.isRequired,
};

export default CardImage;