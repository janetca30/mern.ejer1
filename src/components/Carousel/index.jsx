import React, { useState } from 'react';
import SlideOne from '../SlideOne';
import SlideTwo from '../SlideTwo';
import SlideThree from '../SlideThree';
import './style.css';

function Carousel () {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNextSlide = () => {
    if (currentSlide === 3) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide === 1) {
      setCurrentSlide(3);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="carousel-container">
      {currentSlide === 1 && <SlideOne />}
      {currentSlide === 2 && <SlideTwo />}
      {currentSlide === 3 && <SlideThree />}
      <div className="controls">
        <button className='prev' onClick={handlePrevSlide}>Prev</button>
        <button className='next' onClick={handleNextSlide}>Next</button>
      </div>
    </div>
  );
}

export default Carousel;

