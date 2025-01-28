import Link from './Link';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          React Navbar
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Services</Link>
            <Link>Contact</Link>
          </ul>
          <form className="d-flex mx-5" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-dark px-2" type="submit">
              Click
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;