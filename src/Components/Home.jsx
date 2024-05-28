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
      <div className=" text-left pt-4">
      <h2 className="trouveMonArtisan">Comment trouver mon artisan ?</h2>
      <ul className="py-4">
        <li className="listArtisan">
          <h3>1- Choisir la catégorie d’artisanat dans le menu</h3>
          <p>Dans l'en tête, choissisez la catégorie entre "Bâtiment", "Alimentation", "Fabrication" ou "Service" </p>
        </li>
        <li className="listArtisan">
          <h3>2- Choisir un artisan</h3>
          <p>Cliquez sur une des fiche artisan présente pour accéder à sa présentation complète</p>
        </li>
        <li className="listArtisan">
          <h3>3- Le contacter via le formulaire de contact</h3>
          <p>Lorsque vous êtes sûr d'avoir trouver votre artisan, remplissez le formulaire situer dans la fiche complète de l'artisan pour le contacter</p>
        </li>
        <li className="listArtisan">
          <h3>4- Une réponse sera apportée sous 48h</h3>
          <p>Tout les artisans présent sur ce site s'engage à vous répondre sous 24h</p>
        </li>
      </ul>  
      </div>
      <div className="container py-4">
        <div>
        <h2 className="artisanDuMois text-left">Les artisans du mois !</h2>
        </div>
        <div className="alignCard">
        {topData.map(item => (
          <div>
            <div className="cardStyle  py-1 " key={item.id}>
              <Link to={`/fiche-artisan/${item.id}`}>
              <div class="cardColor  border border-dark" style={{width: '18rem'}}>
                 <div className="card-body text-center">
                  <h5 className="card-title text-uppercase">{item.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary"> {item.note}/5 <i className="fa-solid fa-star text-warning"></i></h6>
                  <p className="card-text">
                  <i className="fa-solid fa-briefcase"></i> {item.specialty}
                  </p>
                  <p className="card-text">
                  <i className="fa-solid fa-location-dot"></i>{item.location}
                  </p>
                </div>
              </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</main>
  );
};

  //Attention ! LEs cardes n'ont pas de breakpoint, a ajouter pour responsive mobile et mettre en colonne

export default Home; //Vérifiez orthographe