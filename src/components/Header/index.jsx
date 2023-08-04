import React from 'react'
import Nav from '../Nav'
import Login from '../Login'
import './style.css'

function Header () {
  return (
    <>
      <header >
        <div className='header-container'>
          <h2 className='text-3xl font-bold'>
            My Tinerary
          </h2>
          <Nav />  
          <Login />
        </div>
      </header>
    </>
  )
}

export default Header;


