import React, { useState, useEffect, useCallback } from 'react';
import SlideOne from '../SlideOne';
import SlideTwo from '../SlideTwo';
import SlideThree from '../SlideThree';
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
      <h3 className='title text-2xl font-bold text-center mt-5'>Popular My Tineraries</h3>
      <div className="carousel-container">
        {currentSlide === 1 && <SlideOne />}
        {currentSlide === 2 && <SlideTwo />}
        {currentSlide === 3 && <SlideThree />}
        <div className="controls">
          <button className='prev' onClick={handlePrevSlide}>Prev</button>
          <button className='next' onClick={handleNextSlide}>Next</button>
        </div>
      </div>
    </>
  );
}

export default Carousel;

