import PropTypes from 'prop-types';

function Link({ children }) {

    return (
        <li className="nav-item px-3">
            <a className="nav-link text-dark" href="/">
                <span className="fw-medium">{children}</span>
            </a>
        </li>
    );
}

// Prop type validation
Link.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Link;