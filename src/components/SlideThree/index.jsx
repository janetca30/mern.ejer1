import React from 'react';
import Place from '../Place'
import Marruecos from '../../assets/Images/ImgCarousel/essaouira33.jpg'
import Giza from '../../assets/Images/ImgCarousel/giza33.jpg'
import Tunez from '../../assets/Images/ImgCarousel/tunez33.jpg'
import Venecia from '../../assets/Images/ImgCarousel/venecia33.jpg'
import './style.css'

function SlideThree() {
  let data = [
    {name:'Essaouira', location:'Marruecos', imagePlace:Marruecos},
    {name:'Giza', location:'Egipto', imagePlace:Giza},
    {name:'Tunez', location:'Tunez', imagePlace:Tunez},
    {name:'Venecia', location:'Italia', imagePlace:Venecia}
  ]
  return (
    <div className='slide'>
      {data.map((each,key)=><Place key={key} name={each.name} location={each.location} imagePlace={each.imagePlace} />)}
    </div>
  )
}

export default SlideThree;
