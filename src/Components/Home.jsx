import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../datas.json";

const Home = () => {
  const [topData, setTopData] = useState([]);

  useEffect(() => {
    const filteredData = data.filter(item => item.top);
    setTopData(filteredData);
  }, []);

  return (
    <main>
      <div className="flex-wrap">
        <div className="mainSectionContaineur text-left pt-4">
          <div className="mainSectionContaineurText">
            <h2 className="trouveMonArtisan">Comment trouver mon artisan ?</h2>
            <ul className="py-4">
              <li className="listArtisan">
                <h3>1- Choisir la catégorie d’artisanat dans le menu</h3>
                <p>Dans l'en-tête, choisissez la catégorie entre "Bâtiment", "Alimentation", "Fabrication" ou "Service" </p>
              </li>
              <li className="listArtisan">
                <h3>2- Choisir un artisan</h3>
                <p>Cliquez sur une des fiches artisan présentes pour accéder à sa présentation complète</p>
              </li>
              <li className="listArtisan">
                <h3>3- Le contacter via le formulaire de contact</h3>
                <p>Lorsque vous êtes sûr d'avoir trouvé votre artisan, remplissez le formulaire situé dans la fiche complète de l'artisan pour le contacter</p>
              </li>
              <li className="listArtisan">
                <h3>4- Une réponse sera apportée sous 48h</h3>
                <p>Tous les artisans présents sur ce site s'engagent à vous répondre sous 24h</p>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-colum homeImgContaineur">
            <img src="../Image/image-home.png" alt="plan de travail par Megan Rexazin Conde" className="homeImg" />
          </div>
        </div>
        <div className="container py-4 text-center">
          <div>
            <h2 className="artisanDuMois text-left">Les artisans du mois !</h2>
          </div>
          <div className="alignCard">
            {topData.map(item => (
              <div className="cardStyle py-1" key={item.id}>
                <Link to={`/fiche-artisan/${item.id}`}>
                  <div className="cardColor border border-dark" style={{ width: '18rem' }}>
                    <div className="card-body text-center">
                      <h5 className="card-title text-uppercase">{item.name}</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">{item.note}/5 <i className="fa-solid fa-star text-warning"></i></h6>
                      <p className="card-text">
                        <i className="fa-solid fa-briefcase"></i> {item.specialty}
                      </p>
                      <p className="card-text">
                        <i className="fa-solid fa-location-dot"></i> {item.location}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
