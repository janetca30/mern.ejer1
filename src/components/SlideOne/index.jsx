import React from 'react'
import Place from '../Place'
import Paris from '../../assets/Images/ImgCarousel/paris11.jpg'
import Malaga from '../../assets/Images/ImgCarousel/malaga11.jpg'
import Athens from '../../assets/Images/ImgCarousel/athens11.jpg'
import Antalya from '../../assets/Images/ImgCarousel/antalya11.jpg'
import Tokyo from '../../assets/Images/ImgCarousel/tokyo22.jpg'
import Beijing from '../../assets/Images/ImgCarousel/beijing22.jpg'
import Seoul from '../../assets/Images/ImgCarousel/seoul22.jpg'
import Siam from '../../assets/Images/ImgCarousel/siam22.jpg'
import Essaouira from '../../assets/Images/ImgCarousel/essaouira33.jpg'
import Giza from '../../assets/Images/ImgCarousel/giza33.jpg'
import Tunez from '../../assets/Images/ImgCarousel/tunez33.jpg'
import Venice from '../../assets/Images/ImgCarousel/venice33.jpg'




import './style.css'

function SlideOne() {
  let data = [
    {name:'Paris', location:'France', imagePlace:Paris},
    {name:'Malaga', location:'Spain', imagePlace:Malaga},
    {name:'Athens', location:'Greece', imagePlace:Athens},
    {name:'Antalya', location:'Turkey', imagePlace:Antalya},
    {name:'Tokyo', location:'Japan', imagePlace:Tokyo},
    {name:'Beijing', location:'China', imagePlace:Beijing},
    {name:'Seoul', location:'South Korea', imagePlace:Seoul},
    {name:'Siam', location:'Thailand', imagePlace:Siam},
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

export default SlideOne