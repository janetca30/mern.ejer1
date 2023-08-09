import React from 'react'
import Place from '../Place'
import Tokyo from '../../assets/Images/ImgCarousel/tokyo22.jpg'
import Beijing from '../../assets/Images/ImgCarousel/beijing22.jpg'
import Seoul from '../../assets/Images/ImgCarousel/seoul22.jpg'
import Siam from '../../assets/Images/ImgCarousel/siam22.jpg'
import './style.css'

function SlideTwo() {
  let data = [
    {name:'Tokyo', location:'Japan', imagePlace:Tokyo},
    {name:'Beijing', location:'China', imagePlace:Beijing},
    {name:'Seoul', location:'South Korea', imagePlace:Seoul},
    {name:'Siam', location:'Thailand', imagePlace:Siam}
  ]
  return (
    <div className='slide'>
      {data.map((each,key)=><Place key={key} name={each.name} location={each.location} imagePlace={each.imagePlace} />)}
    </div>
  )
}


export default SlideTwo;
