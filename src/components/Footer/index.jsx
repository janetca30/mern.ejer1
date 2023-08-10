import React from 'react'
import Logo from '../../assets/Images/logo.png'
import Cardp from '../../assets/Images/cardp.png'
import './style.css'
import NavFooter from '../NavFooter'

function Footer () {
  return (
    <>
      <footer className='footer'>
        <div className='travel-net inline-flex'>
          <img src={Logo} className='logotravel2 '/>
          <NavFooter />
        </div>
        <div className='copyright d-xxl-inline-flex'>
          <img src={Cardp} className='cardp'/>
          <h6>
            Copyright by Janet Calderón Acuña de Denis - 2023
          </h6>
        </div>
      </footer>
    </>
  )
}

export default Footer;


