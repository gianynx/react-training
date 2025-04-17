import Link from './Link';

function Dropdown() {

    return (
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
                <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <Link>Novità e in evidenza</Link>
                </button>
                <ul className="dropdown-menu">
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
                <ul className="dropdown-menu">
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
                <ul className="dropdown-menu">
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
                <ul className="dropdown-menu">
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
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Offerte</a></li>
                    <li><a className="dropdown-item" href="/">Outlet - Uomo</a></li>
                    <li><a className="dropdown-item" href="/">Outlet - Donna</a></li>
                    <li><a className="dropdown-item" href="/">Outlet - Kids</a></li>
                    <li><a className="dropdown-item" href="/">Outlet per sport</a></li>
                </ul>
            </li>
        </ul>
    );
}

export default Dropdown;