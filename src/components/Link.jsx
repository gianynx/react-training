import PropTypes from 'prop-types';
import '../assets/css/Link.css';

function Link({ children }) {

    return (
        <li className="nav-item px-3">
            <a className="nav-link hover-underline" href="/">
                <span className="fw-medium text-dark">{children}</span>
            </a>
        </li>
    );
}

// Prop type validation
Link.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Link;