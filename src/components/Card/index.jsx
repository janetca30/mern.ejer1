import React from 'react';
import './style.css';

function Card({ title, text, imageCard, isImageRight }) {
  const containerClass = `card-pr flex items-center ${isImageRight ? 'flex-row-reverse' : ''}`;

  return (
    <div className={containerClass}>
      <div>
        <h3 className='title text-3xl font-bold text-center mt-5'>{title}</h3>
        <p className='textp text-lg text-justify mt-3 ml-20 mr-20'>{text}</p>
      </div>
      <img className='card-img' src={imageCard} alt="Card Image" />
    </div>
  );
}

export default Card;


