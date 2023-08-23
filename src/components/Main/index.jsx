import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card'
import Hero from '../Hero'
import Card1 from '/Images/card1.jpg'
import Card2 from '/Images/card2.jpg'
import Airplane from '/Images/airplane.png'
import './style.css'

function Main() {
  let data = [
    {
      title: 'Trajectory',
      text: 'More than 40 years of experience and the constant professionalism of our staff and services ensure that your travel experience is unique.',
      imageCard: Card1,
      isImageRight: false,
    },
    {
      title: 'Find the perfect destination',
      text: 'Our app will help you find perfect path for you next trip. With an easy to-use interface and a host of itinerary option, planning your next trip has never been easier.',
      imageCard: Card2,
      isImageRight: true,
    },
  ];

  return (
    <main className='main-container'>
      <Hero />
      <div className='main-card'>
        {data.map((each, index) => (
          <Card key={index} title={each.title} text={each.text} imageCard={each.imageCard} isImageRight={each.isImageRight} />
        ))}
      </div>
      <div className='button-container'>
        <Link to='/Cities'>
          <button className='my-button text-blue-800 text-2xl font-bold '  style={{ backgroundImage: `url(${Airplane})` }}>
            <img className='airplane '  src={Airplane} />
            View More
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Main;

