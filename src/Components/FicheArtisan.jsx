import React from "react";
import { useParams } from "react-router-dom";
import data from "../datas.json";

const FicheArtisan = () => {
  const { id } = useParams();
  const artisan = data.find(item => item.id === id);

  if (!artisan) {
    return <div>Artisan non trouvé</div>;
  }

  return (
        <div className="cardStyle row py-1 ">
          <div class="card col border border-dark" style={{width: '18rem'}}>
            <div className="card-body text-center">
              <h5 className="card-title">{artisan.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Note :{artisan.note}/5 <i className="fa-solid fa-star text-warning"></i></h6>
              <p className="card-text">{artisan.specialty}</p>
              <p className="card-text">{artisan.location}</p>
              <p className="card-text">{artisan.about}</p>

              <form className="formulaire"/>
              <div className="mb-3">
                <label for="inputName" className="form-label">Votre nom et prénom</label>
                <input type="name" className="form-control" id="inputName" placeholder="Entrez votre nom et prénom"/>
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Adressse Mail</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="exemple@exemple.com"/>
              </div>
              <div>
                <label for="inputTel" className="form-label">Votre numéro de téléphone</label>
                <input type="tel" className="form-control" id="inputTel" placeholder="00 00 00 00 00"/>
              </div>
              <div className="mb-3">
                <label for="inputsujet" className="form-label">Sujet du message</label>
                <input type="sujet" className="form-control" id="inputsujet" placeholder="L'objet de votre message"/>
              </div>
              <div className="mb-3">
                <label for="inputMessage" className="form-label">Message</label>
                <input type="message" className="form-control" id="inputMessage" placeholder="Votre message..."/>
              </div>
              <div className="mb-3 form-check text-light">
                <input type="checkbox" className="form-check-input" id="Check" aria-describedby="infoform"/>
                <label className="form-check-label" for="Check">En cochant la case vous certifié que toute les données du formulaire sont correcte</label>
              </div>
              <button type="submit" className="btn btn-success">Envoyer</button>

              <p>{artisan.website}</p>
          </div>
        </div>
      </div>
    );
};

export default FicheArtisan;