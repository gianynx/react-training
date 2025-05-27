import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import '../assets/css/Footer.css';

function Footer() {

    return (
        <footer className="footer text-center">
            <div className="container">
                <div className="up-footer mt-2 mb-5">
                    <div className="row">
                        <div className="col-3">
                            <h5>Scarpe</h5>
                            <ul className="list-unstyled">
                                <li><a href="/" className="text-decoration-none text-body-secondary">Scarpe da running nere</a></li>
                                <li><a href="/" className="text-decoration-none text-body-secondary">Scarpe da running nere</a></li>
                                <li><a href="/" className="text-decoration-none text-body-secondary">Scarpe Nike P-6000</a></li>
                                <li><a href="/" className="text-decoration-none text-body-secondary">Scarpe Initiator</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h5>Abbigliamento</h5>
                            <ul className="list-unstyled">
                                <li><a href="/" className="text-decoration-none text-body-secondary">Pantaloni da yoga</a></li>
                                <li><a href="/" className="text-decoration-none text-body-secondary">Pantaloni jogger Tech Fleece</a></li>
                                <li><a href="/" className="text-decoration-none text-body-secondary">Tech Fleece</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h5>Bambini</h5>
                            <ul className="list-unstyled">
                                <li><a href="/" className="text-decoration-none text-body-secondary">Scarpe nere per bambina</a></li>
                                <li><a href="/" className="text-decoration-none text-body-secondary">Scarpe nere kids</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h5>Bambini</h5>
                            <ul className="list-unstyled">
                                <li><a href="/" className="text-decoration-none text-body-secondary">Squadre di calcio</a></li>
                                <li><a href="/" className="text-decoration-none text-body-secondary">Calcio</a></li>
                                <li><a href="/" className="text-decoration-none text-body-secondary">Nike Inghilterra</a></li>
                                <li><a href="/" className="text-decoration-none text-body-secondary">Nike Run Club</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="down-footer">
                    <hr />
                    <p>&copy; 2025 Nike, Inc. Tutti i diritti riservati</p>
                    <div className="social-icons">
                        <a href="/" className="text-decoration-none text-dark">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="/" className="text-decoration-none text-dark">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="/" className="text-decoration-none text-dark">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;