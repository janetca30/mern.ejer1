import React from 'react'
import Card from '../Card'
import Hero from '../Hero'
import './style.css'

function Main () {
  let data = [
    {title:'Find the perfect destination', 
    text:'Our app will help you find perfect path for you next trip. With an easy to-use interface and a host of itinerary option, planning your next trip has never been easier.'}
  ]
  return (
    <>
      <main>
        <Hero />
        <div className='main-card'>
          {data.map((each,index)=><Card key={index} title={each.title} text={each.text}></Card>)}
        </div>
      </main>
    </>
    
  );
}

export default Main;
