import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const { cityId } = useParams();
  const [city, setCity] = useState(null);

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/cities/${cityId}`);
        setCity(response.data.message);
      } catch (error) {
        console.error('Error fetching city data:', error);
        setCity(null);
      }
    };

    fetchCity();
  }, [cityId]);

  if (!city) {
    return <p>No city found for the given ID</p>;
  }

  return (
    <>
      <div className="city-detail inline-flex mt-5">
        <img src={city.photo} alt={city.name} className="w-7/12 h-96" /> 
        <div className='ml-10'>
          <div className='flex justify-around'>
          <h2 className="text-3xl font-bold Font text-cyan-300 ">{city.name}</h2>
          <h2 className="text-3xl font-bold text-center text-blue-700 ">{city.country}</h2>
          </div>
          <p className='mt-3 '>{city.description}</p>
          <Link to="/Cities" className='btn bg-cyan-300 mt-4 '>
            Back to Cities
          </Link></div>
        </div>
      <div>
        <p className="mt-4">Under construction</p>
      </div>
    </>
  );
};

export default Detail;




