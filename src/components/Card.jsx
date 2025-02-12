import PropTypes from 'prop-types';
import '../assets/css/Card.css';

function Card({ title, imgSrc, children, isPopular, removeTechnology }) {

    const handleDelete = () => {
        removeTechnology();
    }

    const popularLabel = isPopular ? <span className="text-success">&#10003; Popular</span> : <span className="text-danger"> &#10007; Popular</span>

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="d-flex justify-content-center align-items-center mb-3" style={{ height: "12rem" }}>
                <img src={imgSrc} className="card-img-top" alt={title} />
            </div>
            <h5 className="card-title fw-bold text-center mt-3">{title}</h5>
            <div className="text-center mt-4">
                <p className="fw-bold">{popularLabel}</p>
            </div>
            <hr />
            <div className="card-body text-center p-2">
                <p className="card-text">{children}</p>
            </div>
            <button type="button" onClick={handleDelete} className="btn btn-outline-danger w-75 mx-auto px-5 mt-3">Delete</button>
        </div>
    );
}

// Prop type validation
Card.propTypes = {
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    children: PropTypes.node,
    isPopular: PropTypes.bool,
    removeTechnology: PropTypes.func,
};

export default Card;