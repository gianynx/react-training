import Link from './Link';
import '../assets/css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top px-5 p-2">
      <div className="container-fluid d-flex justify-content-between">
        <div>
          <a className="navbar-brand" href="/">
            <img src="/swoosh.jpg" id="logo-nike" alt="Nike logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <Link>Novità e in evidenza</Link>
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="/">In evidenza</a></li>
                <li><a className="dropdown-item" href="/">Scopri le icone</a></li>
                <li><a className="dropdown-item" href="/">Jordan</a></li>
                <li><a className="dropdown-item" href="/">Scopri lo sport</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <Link>Uomo</Link>
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="/">In evidenza</a></li>
                <li><a className="dropdown-item" href="/">Scarpe</a></li>
                <li><a className="dropdown-item" href="/">Abbigliamento</a></li>
                <li><a className="dropdown-item" href="/">Scopri lo sport</a></li>
                <li><a className="dropdown-item" href="/">Accessori</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <Link>Donna</Link>
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="/">In evidenza</a></li>
                <li><a className="dropdown-item" href="/">Scarpe</a></li>
                <li><a className="dropdown-item" href="/">Abbigliamento</a></li>
                <li><a className="dropdown-item" href="/">Scopri lo sport</a></li>
                <li><a className="dropdown-item" href="/">Accessori</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <Link>Kids</Link>
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="/">In evidenza</a></li>
                <li><a className="dropdown-item" href="/">Scarpe</a></li>
                <li><a className="dropdown-item" href="/">Abbigliamento</a></li>
                <li><a className="dropdown-item" href="/">Kids per età</a></li>
                <li><a className="dropdown-item" href="/">Accessori</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <Link>Outlet</Link>
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="/">Offerte</a></li>
                <li><a className="dropdown-item" href="/">Outlet - Uomo</a></li>
                <li><a className="dropdown-item" href="/">Outlet - Donna</a></li>
                <li><a className="dropdown-item" href="/">Outlet - Kids</a></li>
                <li><a className="dropdown-item" href="/">Outlet per sport</a></li>
              </ul>
            </li>
          </ul>
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