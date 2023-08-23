import React, { useState, useEffect, useCallback } from 'react';
import Prev from '/Images/prev.png';
import Next from '/Images/next.png';
import './style.css';

const data = [ 
  { id: 0, name: 'Paris', country: 'France', photo: './ImgCarousel/paris11.jpg' },
  { id: 1, name: 'Malaga', country: 'Spain', photo: './ImgCarousel/malaga11.jpg' }, 
  { id: 2, name: 'Athens', country: 'Greece', photo: './ImgCarousel/athens11.jpg' }, 
  { id: 3, name: 'Antalya', country: 'Turkey', photo: './ImgCarousel/antalya11.jpg' },
  { id: 4, name: 'Tokyo', country: 'Japan', photo: './ImgCarousel/tokyo22.jpg' },
  { id: 5, name: 'Beijing', country: 'China', photo: './ImgCarousel/beijing22.jpg' },
  { id: 6, name: 'Seoul', country: 'South Korea', photo: './ImgCarousel/seoul22.jpg' },
  { id: 7, name: 'Siam', country: 'Thailand', photo: './ImgCarousel/siam22.jpg' },
  { id: 8, name: 'Essaouira', country: 'Morocco', photo: './ImgCarousel/essaouira33.jpg' },
  { id: 9, name: 'Giza', country: 'Egypt', photo: './ImgCarousel/giza33.jpg' },
  { id: 10, name: 'Tunez', country: 'Tunez', photo: './ImgCarousel/tunez33.jpg' },
  { id: 11, name: 'Venice', country: 'Italy', photo: './ImgCarousel/venice33.jpg' }
];

const Carousel = () => {
  const [firstSlide, setFirstSlide] = useState(0);
  const [slidesData, setSlidesData] = useState([]);

  const getSlidesData = useCallback((slideIndex) => {
    const currentSlides = data.slice(slideIndex, slideIndex + 4);
    const nextSlides = slideIndex + 4 >= data.length ? data.slice(0, 4) : data.slice(slideIndex + 4, slideIndex + 8);
    return { currentSlides, nextSlides };
  }, [data]);

  useEffect(() => {
    setSlidesData(getSlidesData(firstSlide).currentSlides);
    const interval = setInterval(() => {
      setFirstSlide((slideIndex) => slideIndex === 8 ? 0 : slideIndex + 4);
    }, 5000);
    return () => clearInterval(interval);
  }, [getSlidesData, firstSlide]);

  return (
    <>
      <div className="title">
        <h3 className='text-3xl font-bold flex justify-center mt-4'>My Popular Itineraries</h3>
      </div>
      <div className="carousel-container">
      <button onClick={() => setFirstSlide((slideIndex) => slideIndex === 0 ? 8 : slideIndex - 4)}>
          <img src={Prev} alt="Previous" />
      </button>
      <div className="slides-container mt-5 gap-4 flex ">
        {slidesData.map((slide) => (
          <div key={slide.id} className="slide">
            <img className="photo" src ={slide.photo} alt={slide.name} />
            <div className="slide-details">
              <h2>{slide.name}</h2>
              <p>{slide.country}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => setFirstSlide((slideIndex) => slideIndex === 8 ? 0 : slideIndex + 4)}>
        <img src={Next} alt="Next" />
      </button>
      </div>
    </>
  );
};

export default Carousel;








