import React from "react";
import { Link} from "react-router-dom";

    
const Header = () => {
  return (
    <header className="header-containeur" id="Top">
    <nav className="navbar navbar-expand-lg nav-pills ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="./Logo.png" alt="Bootstrap" title="CV Logo" width="40" height="34"/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className="nav justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-underline text-uppercase">
            <li className="nav-item">
              <Link className="nav-link"to="/" aria-current="page">Acceuil</Link>
            </li>
          <li className="nav-item">
            <Link className="nav-link" to="/bâtiment" >Bâtiment</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/alimentation" >Alimentation</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/fabrication" >Fabrication</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services" >Services</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Rechercher" aria-label="Search"/>
          <button className="searchButton btn btn-outline-success" type="submit">Rechercher</button>
        </form>
      </div>
    </div>
  </nav>
  </header>
  );
};

export default Header;

//Tenter de faire fonctionner le .json

