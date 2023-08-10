import React, { useState, useEffect, useCallback } from 'react';
import SlideOne from '../SlideOne';
import SlideTwo from '../SlideTwo';
import SlideThree from '../SlideThree';
import Prev from '../../assets/Images/ImgCarousel/prev.png'
import Next from '../../assets/Images/ImgCarousel/next.png' 
import './style.css';

function Carousel () {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNextSlide = useCallback(() => {
    if (currentSlide === 3) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide]);

  const handlePrevSlide = () => {
    if (currentSlide === 1) {
      setCurrentSlide(3);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    },5000);
    return () => clearInterval(interval);
  }, [currentSlide, handleNextSlide]);

  return (
    <>
      <h3 className='title text-3xl font-bold text-center mt-20'>Popular My Tineraries</h3>
      <div className='carousel-container '>
        <button className='prev' onClick={handlePrevSlide}>
          <img className='prev1' src={Prev} />
        </button>
      
        {currentSlide === 1 && <SlideOne />}
        {currentSlide === 2 && <SlideTwo />}
        {currentSlide === 3 && <SlideThree />}
                  
        <button className='next' onClick={handleNextSlide}>
          <img className='next1' src={Next} />
        </button>
      </div>
      
    </>
  );
}

export default Carousel;

