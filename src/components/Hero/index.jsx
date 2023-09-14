import React from 'react';
import './style.css'

function Hero (){
  return (
    <>
      <div>
        <div className='justify-center'>
          <h2 className='titleh2 text-5xl font-bold '>
            My Tinerary
          </h2>
        </div>
        <div className='justify-center mt-4'>
          <h4 className='slogan text-2xl font-bold '>
          "Find your perfect trip, designed by insiders who know and love their cities!"
          </h4>
        </div>
      </div>
    </>
  );
}

export default Hero;
