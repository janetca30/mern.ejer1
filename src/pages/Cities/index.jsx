import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TravelCard from '../../components/TravelCard/index.jsx'; // Ajusta la ruta según la ubicación del componente


function App() {
  const [citiesData, setCitiesData] = useState([]);

  useEffect(() => {
    async function fetchCitiesData() {
      try {
        const response = await axios.get('http://localhost:4000/api/cities');
        setCitiesData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching travel data:', error);
      }
      
    }

    fetchCitiesData();

    
  }, []);

  return (
    <div>
      <h1>Travel Destinations</h1>
      <div className="travel-card-list">
      {console.log(citiesData.name)}
        {citiesData.map(destination => (
          <TravelCard
            key={destination.id}
            name={destination.name}
            country={destination.country}
            photo={destination.photo}
            description={destination.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;



