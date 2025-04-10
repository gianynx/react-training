import Link from './Link';
import '../assets/css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top px-5 p-2">
      <div className="container-fluid d-flex justify-content-between">
        <div>
          <a className="navbar-brand" href="/">
            <img src="/swoosh.jpg" alt="Nike logo" id="logoNike" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <Link>Novità e in evidenza</Link>
            <Link>Uomo</Link>
            <Link>Donna</Link>
            <Link>Kids</Link>
            <Link>Outlet</Link>
          </ul>
          <div className="d-flex align-items-center gap-2">
            <form className="d-flex mx-2" role="search" onSubmit={handleSubmit}>
              <input className="form-control me-2" type="search" placeholder="Cerca" aria-label="Search" />
              <button className="btn btn-dark px-2" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
            <a href="/" className="text-decoration-none text-dark">
              <FontAwesomeIcon icon={faHeart} className="fs-5" />
            </a>
            <a href="/" className="text-decoration-none text-dark">
              <FontAwesomeIcon icon={faCartShopping} className="fs-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;