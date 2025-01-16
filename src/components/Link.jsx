function Link({ children }) {
    return (
        <li className="nav-item">
            <button className="nav-link" type="button">
                {children}
            </button>
        </li>
    );
}

export default Link;