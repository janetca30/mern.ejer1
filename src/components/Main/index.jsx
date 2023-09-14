import { Link } from 'react-router-dom'
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
      text: 'Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.',
      imageCard: Card2,
      isImageRight: true,
    },
  ];

  return (
    <main className='main-container '>
      <Hero />
      <div className='main-card  '>
        {data.map((each, index) => (
          <div key={index} className={`card-pr p-2 bg-blue-950 rounded-xl mt-3 flex items-center ${each.isImageRight ? 'flex-row-reverse' : ''}`}>
            <div className='container-card p-4'>
              <h3 className='title text-3xl font-bold text-center'>{each.title}</h3>
              <p className='textp text-lg text-white flex mt-3'>{each.text}</p>
            </div>
            <img className='card-img  rounded-xl p-4' src={each.imageCard} alt="Card Image" />
          </div>
        ))}
      </div>
      <div className='button inline-flex justify-center '>
        <Link to='/Cities'>
          <button className='my-button rounded-xl mt-4 text-blue-800 inline-flex ' >
            <img className='airplane w-28' src={Airplane} alt="Airplane" />
            <h5 className='text-3xl font-bold '>View More</h5>
          </button>
          
        </Link>
      </div>
    </main>
  );
}

export default Main;


