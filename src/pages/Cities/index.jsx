import { useState, useEffect } from 'react';
import CityCard from '../../components/CityCard/index.jsx';
import { getAllCities } from '../../services/citiesQueries.js';

const Cities =()=> {
  const [citiesList , setCitiesList] = useState([]);
  useEffect(() =>{
    getAllCities()
    .then((data) => setCitiesList(data))
    .catch((err) => console.log(err));
  }, [] );


  return (
    <div>
      <h1>Travel </h1>
      <div className="travel-card-list">
      
        {citiesList.map((city) => (
          <CityCard
            key={city._id}
            name={city.name}
            country={city.country}
            photo={city.photo}
            description={city.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Cities;



