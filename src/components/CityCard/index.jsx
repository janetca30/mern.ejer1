import React from 'react';
import './style.css';

function CityCard({ name, country, photo, description }) {
  return (
    <>
      <div className='tcard-container'>
        <img className='tcard-img' src={photo} />
        <div>
          <h3 className='tcard-name tex-lg font-bold text-white'>{name}</h3>
          <p className='tcard-country'>{country}</p>
        </div>
        <div className='tcard-info'>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default CityCard;
