import PropTypes from 'prop-types';

function Link({ children }) {

    return (
        <li className="nav-item">
            <button className="nav-link" type="button">
                {children}
            </button>
        </li>
    );
}

// Prop type validation
Link.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Link;