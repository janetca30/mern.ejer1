import React, { useState, useEffect, useCallback } from 'react';
import Prev from '/Images/prev.png';
import Next from '/Images/next.png';
import './style.css';
import axios from 'axios';

const Carousel = () => {
  const [firstSlide, setFirstSlide] = useState(0);
  const [slidesData, setSlidesData] = useState([]);

  const getSlidesData = useCallback(async (slideIndex) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/cities`);
      const data = response.data.message;
      const currentSlides = data.slice(slideIndex, slideIndex + 4);
      const nextSlides = slideIndex + 8 >= data.length
        ? data.slice(0, 8 - data.length + slideIndex)
        : data.slice(slideIndex + 4, slideIndex + 8);
      return { currentSlides, nextSlides };
    } catch (error) {
      console.error('Error fetching data:', error);
      return { currentSlides: [], nextSlides: [] };
    }
  }, []);

  useEffect(() => {
    getSlidesData(firstSlide).then(({ currentSlides }) => {
      setSlidesData(currentSlides);
    });

    const interval = setInterval(() => {
      setFirstSlide((slideIndex) => (slideIndex === 8 ? 0 : slideIndex + 4));
    }, 5000);

    return () => clearInterval(interval);
  }, [getSlidesData, firstSlide]);

  return (
    <>
      <div className="title">
        <h3 className='text text-3xl font-bold flex justify-center mt-4'>My Popular Itineraries</h3>
      </div>
      <div className="carousel-container">
        <button className='prev' onClick={() => setFirstSlide((slideIndex) => (slideIndex === 0 ? 8 : slideIndex - 4))}>
          <img src={Prev} alt="Previous" />
        </button>
        <div className="slides-container mt-5 rounded-xl bg-blue-950">
          {slidesData.map((slide) => (
            <div key={slide._id} className="slide">
              <img className="photo p-3 " src={slide.photo} alt={slide.name} />
              <div className="slide-details font-semibold text-white">
                <h2>{slide.name}</h2>
                <p>{slide.country}</p>
              </div>
            </div>
          ))}
        </div>
        <button className='next' onClick={() => setFirstSlide((slideIndex) => (slideIndex === 8 ? 0 : slideIndex + 4))}>
          <img src={Next} alt="Next" />
        </button>
      </div>
    </>
  );
};

export default Carousel;









