import React from 'react'
import Larcomar from '../../assets/Images/larcomar.jpg'
import './style.css'

function Card ({title,text}) {
  return (
    <>
      <div className='card-pr inline-flex'>
        <div>
          <h3 className='title text-2xl font-bold text-center mt-5'>{title}</h3>
          <p className='textp text-m text-justify mt-3 mr-10'>{text}</p>
          <button className='more-button bg-teal-600 font-semibold rounded mt-5 ml-20'>
            View More
          </button>
        </div>
        <img src={Larcomar} alt="Larcomar" />
      </div>
    </>
  );
}

export default Card;
