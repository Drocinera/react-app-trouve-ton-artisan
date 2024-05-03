import React from "react";
import { Link} from "react-router-dom";

    
const Footer = () => {
  return (
  <footer>
  <div class="container text-center">
  <div class="column">
    <div class="footerImage col-4 row justify-content-start">
      <img src=".\Logo.png" alt="Logo du site" />
    </div>
    <div class="footerContact col align-self-center border-bottom">
    <h3 className="text-uppercase">Lyon</h3>
          <address>
            <p class="fa-solid fa-location-dot pe-1"> 101 cours Charlemagne</p>
            <p>CS 20033</p>
            <p>69269 LYON CEDEX 02</p>
            <p>France</p>
            <a href="+330426734000" className="telFooter fa-solid fa-phone text-light">+33 ( 0 )4 26 73 40 00</a>
          </address>
    </div>
    <div class="PageLegal col justify-content-center py-4">
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

/*  <div>
    <div className="footerContaineur">
      <div className="FooterImage">
        <img src=".\Logo.png" alt="Logo du site" />
      </div>
      <div className="footerContact">
        <h3>Lyon</h3>
          <address>
            <p>101 cours Charlemagne</p>
            <p>CS 20033</p>
            <p>69269 LYON CEDEX 02</p>
            <p>France</p>
            <a href="+330426734000">+33 (0)4 26 73 40 00</a>
          </address>
      </div>
      </div>
      <div className="PageLegal">
        <Link to="/mentionLegal">mentions légales</Link>
        <Link to="/donneePersonnelles">données personnelles</Link>
        <Link to="/accessibilite">accessibilité</Link>
        <Link to="/cookies">cookies</Link>
      </div>
    </div>*/