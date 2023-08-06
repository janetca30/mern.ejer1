import React from 'react'
import Place from '../Place'
import Paris from '../../assets/Images/ImgCarousel/paris11.jpg'
import Malaga from '../../assets/Images/ImgCarousel/malaga11.jpg'
import Atenas from '../../assets/Images/ImgCarousel/atenas11.jpg'
import Antalia from '../../assets/Images/ImgCarousel/antalia11.jpg'
import './style.css'

function SlideOne() {
  let data = [
    {name:'Paris', location:'Francia', imagePlace:Paris},
    {name:'Malaga', location:'España', imagePlace:Malaga},
    {name:'Atenas', location:'Grecia', imagePlace:Atenas},
    {name:'Antalia', location:'Turquia', imagePlace:Antalia}
  ]
  return (
    <div className='slide'>
      {data.map((each,key)=><Place key={key} name={each.name} location={each.location} imagePlace={each.imagePlace} />)}
    </div>
  )
}

export default SlideOne