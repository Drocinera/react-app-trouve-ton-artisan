import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../datas.json";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filteredData = data.filter(item => {
      return (
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setSearchResults(filteredData);
  }, [searchTerm]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <header className="header-containeur" id="Top">
      <nav className="navbar navbar-expand-lg nav-pills ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="../Logo.png"
              alt="Bootstrap"
              title="CV Logo"
              width="40"
              height="34"
            />
          </Link>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="nav justify-content-end "
            id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-underline text-uppercase">
              <li className="nav-item">
                <Link className="nav-link" to="/" aria-current="page">
                  Acceuil
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Bâtiment">
                  Bâtiment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Alimentation">
                  Alimentation
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Fabrication">
                  Fabrication
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Services">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="formContaineur">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={handleSearchChange}
                aria-label="Search"
              />
              {searchTerm && (
                <ul className="search-results">
                  {searchResults.map(item => (
                    <li key={item.id}>
                      <Link to={`/${item.category}`} className="searchList" onClick={clearSearch}>
                        {item.name} - {item.specialty} - {item.location}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
//Recherche probleme : Soit retirer le bouton et obliger utilisateur a entrer 3 lettre pour avoir correspondance.
//Soit laisser mais lorsque personne appuye sur "entrer", il y a une liste de recherche la plus probable 