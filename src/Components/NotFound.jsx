import React from "react";
import { Link} from "react-router-dom";
    
const NotFound = () => {
  return (
  <div className="text-center py-4">
    <img src="./Image/erreur-404.jpg" alt="Erreur 404" />
    <h2 className="text-uppercase">Erreur 404</h2>
    <p>La page demandée n'as pas été trouvée</p>
    <button className="backButton"><Link to="/" className="linkNotFound text-light">Retourner à la page d'acceuil</Link></button>
  </div>
  );
};

export default NotFound;