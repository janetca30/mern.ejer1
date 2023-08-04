import React from 'react'
import Larcomar from '../../assets/img/larcomar.jpg'
import './style.css'

function Card ({title,text}) {
  return (
    <>
      <div>
        <h3 className='text-2xl font-semibold text-center mt-5'>{title}</h3>
        <p className='text-m text-justify mt-3 mr-10'>{text}</p>
        <button className='more-button bg-teal-600 font-semibold mt-5 ml-20'>
          View More
        </button>
      </div>
      <img src={Larcomar} alt="Larcomar" />
    </>
  );
}

export default Card;
