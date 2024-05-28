import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../datas.json";



const FicheArtisan = () => {
  const { id } = useParams();
  const artisan = data.find(item => item.id === id);

  const [formValues, setFormValues] = useState({
    nom: '',
    prénom: '',
    email: '',
    sujet: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

    // Initialisation de la validation du formulaire
    React.useEffect(() => {
      const forms = document.querySelectorAll('.needs-validation');
  
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
  
          form.classList.add('was-validated');
        }, false);
      });
    }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { ...formValues, artisanEmail: artisan.email };

    console.log('Form data:', formData);

    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  if (!artisan) {
    return <div>Artisan non trouvé</div>;
  }


  return (
    <div className="colorTest">
      <div className="cardStyle row py-3">
        <div className="card col border border-dark" style={{ width: '18rem' }}>
          <div className="cardColor card-body text-center">
            <h5 className="card-title text-uppercase">{artisan.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Note : {artisan.note}/5 <i className="fa-solid fa-star text-warning"></i>
            </h6>
            <p className="card-text">{artisan.specialty}</p>
            <p className="card-text">{artisan.location}</p>
            <p className="card-text">{artisan.about}</p>
            <a href={artisan.website} className="card-text">{artisan.website}</a>
          </div>
        </div>
      </div>
      <h2 className="ficheArtisanTitle text-dark py-2 mx-4 text-center">
        Une demande ? Remplissez le formulaire pour contacter l'artisan !
      </h2>
      <div className="colorTest2">
        <form id="contactForm" className="row g-3 needs-validation px-4" onSubmit={handleSubmit} noValidate>
          <div className="row g-3">
            <div className="col mb-3">
              <label htmlFor="inputFirstName" className="col-sm-2 col-form-label">Nom :</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputFirstName" name="nom" placeholder="Nom" required value={formValues.nom} onChange={handleChange} />
                <div class="invalid-feedback">
                  Veuillez entrer un nom valide
                </div>
                <div class="valid-feedback">
                  C'est bon 
                </div>
              </div>
            </div>
            <div className="col mb-3">
              <label htmlFor="inputLastName" className="col-sm-2 col-form-label">Prénom :</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputLastName" name="prénom" placeholder="Prénom" required value={formValues.prénom} onChange={handleChange} />
                <div class="invalid-feedback">
                  Veuillez entrer un Prénom valide
                </div>
                <div class="valid-feedback">
                  C'est bon 
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email :</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" name="email" placeholder="exemple@exemple.com" required value={formValues.email} onChange={handleChange} />
              <div class="invalid-feedback">
                  Veuillez entrer une adresse mail valide
                </div>
                <div class="valid-feedback">
                  C'est bon 
                </div>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputSujet" className="col-sm-2 col-form-label">Sujet du message :</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputSujet" name="sujet" placeholder="Objet de votre message" required value={formValues.sujet} onChange={handleChange} />
              <div class="invalid-feedback">
                 Veuillez entrer l'objet de votre message
                </div>
                <div class="valid-feedback">
                  C'est bon 
                </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="formControlTextarea1" className="form-label">Message :</label>
            <textarea className="form-control" id="formControlTextarea1" name="message" rows="3" placeholder="Entrez votre message ici" required value={formValues.message} onChange={handleChange}></textarea>
            <div class="invalid-feedback">
                 Un message est demandé
                </div>
                <div class="valid-feedback">
                  C'est bon 
                </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck1" required />
                <label className="form-check-label" htmlFor="gridCheck1">
                  En cochant cette case vous affirmez que toutes les informations sont exactes
                </label>
                <div class="invalid-feedback">
                  Veuillez cocher la case 
                </div>
                <div class="valid-feedback">
                  C'est bon 
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary m-3">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default FicheArtisan;

/*envoie de mail indique "undefined" . A regler. 
premier terminal : maildev
troisieme terminal : cd react-app-trouve-ton-artisan puis node server.js */