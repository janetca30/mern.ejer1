import React from 'react'
import Place from '../Place'
import Paris from '../../assets/Images/ImgCarousel/paris11.jpg'
import Malaga from '../../assets/Images/ImgCarousel/malaga11.jpg'
import Athens from '../../assets/Images/ImgCarousel/athens11.jpg'
import Antalya from '../../assets/Images/ImgCarousel/antalya11.jpg'
import './style.css'

function SlideOne() {
  let data = [
    {name:'Paris', location:'France', imagePlace:Paris},
    {name:'Malaga', location:'Spain', imagePlace:Malaga},
    {name:'Athens', location:'Greece', imagePlace:Athens},
    {name:'Antalya', location:'Turkey', imagePlace:Antalya}
  ]
  return (
    <div className='slide'>
      {data.map((each,key)=><Place key={key} name={each.name} location={each.location} imagePlace={each.imagePlace} />)}
    </div>
  )
}

export default SlideOne