import React,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../datas.json"

    
const Bâtiment = () => {
    const [buildingData, setBuildingData] = useState([]);

    useEffect(() => {
      const filteredData = data.filter(item => item.category === "Bâtiment");
      setBuildingData(filteredData);
    }, []);
  
    return (
        <section>
            <div className="containeurBatiment">
                <h2 className="text-center">Artisans spécialisés dans le bâtiment</h2>
                <div className="row text-center justify-content-center">
                <div className="alignCard">
                {buildingData.map(item => (
                    <Link to={`/fiche-artisan/${item.id}`}>
                <div className="cardStyle row py-2 ms-2" key={item.id} style={{width: '35rem'}}>
                <div className="cardColor col border border-dark">
                <div className="card-body text-center">
                    <h5 className="card-title text-uppercase">{item.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Note : {item.note}/5 <i className="fa-solid fa-star text-warning"></i></h6>
                    <p className="card-text">{item.specialty}</p>
                    <p className="card-text">{item.location}</p>
                </div>
                </div>
                </div>
                </Link>
                ))}
                </div>
            </div>
        </div>
    </section>

  );
};
export default Bâtiment;