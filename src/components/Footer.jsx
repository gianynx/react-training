import '../assets/css/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {

    return (
        <footer className="footer text-center">
            <div className="container">
                <p>&copy; 2025 Your Company. All rights reserved.</p>
                <div className="social-icons">
                    <a href="/">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;