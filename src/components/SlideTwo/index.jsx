import React from 'react'
import Place from '../Place'
import Tokio from '../../assets/Images/ImgCarousel/tokio22.jpg'
import Pekin from '../../assets/Images/ImgCarousel/pekin22.jpg'
import Seul from '../../assets/Images/ImgCarousel/seul22.jpg'
import Siam from '../../assets/Images/ImgCarousel/siam22.jpg'
import './style.css'

function SlideTwo() {
  let data = [
    {name:'Tokio', location:'Japon', imagePlace:Tokio},
    {name:'Pekin', location:'China', imagePlace:Pekin},
    {name:'Seul', location:'Corea del Sur', imagePlace:Seul},
    {name:'Siam', location:'Tailandia', imagePlace:Siam}
  ]
  return (
    <div className='slide'>
      {data.map((each,key)=><Place key={key} name={each.name} location={each.location} imagePlace={each.imagePlace} />)}
    </div>
  )
}


export default SlideTwo;
