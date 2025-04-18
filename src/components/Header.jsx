import Dropdown from './Dropdown';
import '../assets/css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top px-5 p-2">
      <div className="container-fluid d-flex justify-content-between">
        <div>
          <a className="navbar-brand" href="/">
            <img src="/images/swoosh.jpg" id="logo-nike" alt="Nike logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Dropdown />
          <div className="d-flex align-items-center gap-1">
            <form className="d-flex mx-2" role="search" onSubmit={(e) => { e.preventDefault() }}>
              <input className="form-control me-2" type="search" placeholder="Cerca" aria-label="Search" />
              <button className="btn btn-dark px-2" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
            <a href="/">
              <FontAwesomeIcon icon={faHeart} className="text-dark icon-link fs-5" />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faCartShopping} className="text-dark icon-link fs-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;