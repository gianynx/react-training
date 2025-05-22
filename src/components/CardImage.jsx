import PropTypes from 'prop-types';

function CardImage({ imgSrc, imgTitle }) {
    return (
        <div className="card" style={{ width: "46rem", overflow: "hidden" }}>
            <a href="/">
                <img src={imgSrc} alt={imgTitle} className="img-fluid" style={{ width: "100%", height: "28rem", objectFit: "cover" }} />
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