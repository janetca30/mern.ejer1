import React from 'react';
import Place from '../Place'
import Essaouira from '../../assets/Images/ImgCarousel/essaouira33.jpg'
import Giza from '../../assets/Images/ImgCarousel/giza33.jpg'
import Tunez from '../../assets/Images/ImgCarousel/tunez33.jpg'
import Venice from '../../assets/Images/ImgCarousel/venice33.jpg'
import './style.css'

function SlideThree() {
  let data = [
    {name:'Essaouira', location:'Morocco', imagePlace:Essaouira},
    {name:'Giza', location:'Egypt', imagePlace:Giza},
    {name:'Tunez', location:'Tunez', imagePlace:Tunez},
    {name:'Venice', location:'Italy', imagePlace:Venice}
  ]
  return (
    <div className='slide'>
      {data.map((each,key)=><Place key={key} name={each.name} location={each.location} imagePlace={each.imagePlace} />)}
    </div>
  )
}

export default SlideThree;
