import React,{ useState, useEffect } from "react";
import data from "../datas.json"

    
const Services = () => {
    const [ServicesData, setServicesData] = useState([]);

    useEffect(() => {
      const filteredData = data.filter(item => item.category === "Services");
      setServicesData(filteredData);
    }, []);
  
    return (
        <section>
            <div className="containeurServices">
                <h2 className="text-center">Artisans spécialisés dans les Services</h2>
                <div className="row text-center justify-content-center">
                {ServicesData.map(item => (
                <div className="cardStyle row py-2 ms-2" key={item.id} style={{width: '35rem'}}>
                <div class="cardColor col border border-dark">
                <div className="card-body text-center">
                    <h5 className="card-title">{item.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Note : {item.note}/5 <i className="fa-solid fa-star text-warning"></i></h6>
                    <p className="card-text">{item.specialty}</p>
                    <p className="card-text">{item.location}</p>
                </div>
                </div>
                </div>
                ))}
            </div>
        </div>
    </section>

  );
};

export default Services;