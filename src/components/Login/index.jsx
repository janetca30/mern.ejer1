import React from 'react'
import user from '../../assets/img/user.png'
import './style.css'

function Login () {
  return (
    <>
      <button className='login-button bg-black rounded-lg inline-flex items-center' type="button">
        <img className='login-user' src={user} alt="User" />
        login 
      </button> 
    </>
    
  );
}

export default Login;
