import React from 'react'
import './style.css'

function Place({name,location,imagePlace}) {
  
  return (
    <>
      <div className='place inline-flex' >
        <img className='place-img' src={imagePlace} alt='Place Image'/>
        <div className='place-info'>
          <h3 className='name-place tex-lg font-bold text-white '>{name}</h3>
          <p className='name-location'>{location}</p>
        </div>  
      </div>
    </>
  )
}

export default Place