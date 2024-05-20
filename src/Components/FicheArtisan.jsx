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
      <div>
        <div className="cardStyle row py-3 ">
          <div className="card col border border-dark" style={{width: '18rem'}}>
            <div className="cardColor card-body text-center">
              <h5 className="card-title text-uppercase">{artisan.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Note :{artisan.note}/5 <i className="fa-solid fa-star text-warning"></i></h6>
              <p className="card-text">{artisan.specialty}</p>
              <p className="card-text">{artisan.location}</p>
              <p className="card-text">{artisan.about}</p>
              <p className="card-text">{artisan.website}</p>
            </div>
        </div>
      </div>
        <h2 className="ficheArtisanTitle text-dark py-2 text-center ">Une demande ? Remplissez le formulaire pour contacter l'artisan !</h2>
          <div>
            <form>
              <div class="row g-3">
                <div class="col mb-3">
                  <label for="inputFirstName" class="col-sm-2 col-form-label">Nom :</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="Nom" aria-label="First name"/>
                  </div>
                </div>
                <div class="col mb-3">
                  <label for="inputLastName" class="col-sm-2 col-form-label">Prénom :</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="Prénom" aria-label="Last name"/>
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email :</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="exemple@exemple.com"/>
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputSujet" class="col-sm-2 col-form-label">Sujet du message:</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputSujet" placeholder="Objet de votre message"/>
                </div>
              </div>
              <div class="mb-3">
                <label for="formControlTextarea1" class="form-label">Message :</label>
                <textarea class="form-control" id="formControlTextarea1" rows="3" placeholder="Entrez votre message ici"></textarea>
              </div>
              <div class="row mb-3">
                <div class="col-sm-10 offset-sm-2">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                    <label class="form-check-label" for="gridCheck1">
                      En cochant cette case vous affirmez que toutes les informations sont exactes
                    </label>
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
          </div>
        </div>
    );
};

export default FicheArtisan;

//Modifier Remettre en ordre le formulaire et le rendre plus attrayant et ordonner