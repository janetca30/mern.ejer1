import React from 'react'
import Cardp from '../../assets/Images/cardp.png'
import './style.css'

function Footer () {
  return (
    <>
      <footer>
        <img src={Cardp} className='cardp w-20'/>
        <h6>
          &copy Copyright by Janet Calderón Acuña de Denis - 2023
        </h6>
      </footer>
    </>
  )
}

export default Footer;


