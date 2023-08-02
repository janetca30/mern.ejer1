import React from 'react'
import Image from './assets/img/loginblack.png'
import Larcomar from './assets/img/larcomar.jpg'
import Tarjeta from './assets/img/tarjeta.png'
import './App.css'

function App() {
    return (
    <>
      <header>
        <nav>
          <h2>
            My Tinerary
          </h2>
          <a>Home</a>
          <a>Cities</a>
          <button type="button">
            <img src={Image} id='i01'></img>
            <p>login</p>
          </button>
        </nav>
      </header>
      <main>
        <div>
          <h3>
            Find the perfect destination
          </h3>
          <p>
            Our app will help you find perfect path for you next trip. With an easy to-use interface and a host of itinerary option, planning your next trip has never been easier.
          </p>
          <button type="button" id='more'>
            View More
          </button>
        </div>
        <div>
          <img src={Larcomar} id='i02'></img>
        </div>       
      </main>
      <footer>
        <img src={Tarjeta} id='i03'></img>
        <h6>
          &copy Copyright by Janet Calderón Acuña de Denis - 2023
        </h6>
      </footer>
    </>
  )
}

export default App
