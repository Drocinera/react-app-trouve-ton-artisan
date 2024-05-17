import React from "react";
import { Link} from "react-router-dom";

    
const Footer = () => {
  return (
  <footer>
  <div className="container text-center">
  <div className="column">
    <div className="footerImage col-4 row justify-content-start">
      <img src="./Logo.png" alt="Logo du site" />
    </div>
    <div className="footerContact col align-self-center border-bottom">
    <h4 className="text-uppercase text-light">Lyon</h4>
          <address>
            <p className="fa-solid fa-location-dot pe-1"> 101 cours Charlemagne</p>
            <p>CS 20033</p>
            <p>69269 LYON CEDEX 02</p>
            <p>France</p>
            <a href="+330426734000" className="telFooter fa-solid fa-phone text-light">+33 ( 0 )4 26 73 40 00</a>
          </address>
    </div>
    <div className="PageLegal col justify-content-center py-4">
      <Link to="/mentionLegal" className="navFooter px-3 ">mentions légales</Link>
      <Link to="/donneePersonnelles" className="navFooter px-3">données personnelles</Link>
      <Link to="/accessibilite" className="navFooter px-3">accessibilité</Link>
      <Link to="/cookies" className="navFooter px-3">cookies</Link>
    </div>
  </div>
</div>
  </footer>
  );
};

export default Footer;
