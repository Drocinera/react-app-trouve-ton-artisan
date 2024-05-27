import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import NotFound from "./Components/NotFound.jsx";
import Bâtiment from "./Components/Bâtiment.jsx";
import Alimentation from "./Components/Alimentation.jsx";
import Fabrication from "./Components/Fabrication.jsx";
import Services from "./Components/Services.jsx";
import Accesibilite from "./Components/Accessibilite.jsx";
import MentionLegal from "./Components/MentionLégal.jsx";
import DonneesPersonnelles from "./Components/DonneesPersonnelles.jsx";
import Cookies from "./Components/Cookies.jsx";
import FicheArtisan from "./Components/FicheArtisan.jsx";
import './App.css';



function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Bâtiment" element={<Bâtiment />} />
          <Route path="/Alimentation" element={<Alimentation />} />
          <Route path="/Fabrication" element={<Fabrication />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/accessibilite" element={<Accesibilite />} />
          <Route path="/donneePersonnelles" element={<DonneesPersonnelles />} />
          <Route path="/mentionLegal" element={<MentionLegal />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path='*' element={<NotFound />}/>
          <Route path="/fiche-artisan/:id" Component={FicheArtisan} />
          

          
        </Routes>

        <Footer />
    </div>
  );
}

export default App;