import React from 'react'
import Nav from '../Nav'
import Login from '../Login'
import Logo from '../../assets/Images/logo.png'
import './style.css'

function Header () {
  return (
    <>
      <header >
        <div className='header-container'>
          <img src={Logo} className='logotravel '/>
          <Nav />  
          <Login />
        </div>
      </header>
    </>
  )
}

export default Header;


