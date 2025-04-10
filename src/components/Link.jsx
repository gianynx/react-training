import PropTypes from 'prop-types';

function Link({ children }) {

    return (
        <li className="nav-item px-3">
            <button className="nav-link text-dark" type="button">
                <span className="fw-medium">{children}</span>
            </button>
        </li>
    );
}

// Prop type validation
Link.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Link;