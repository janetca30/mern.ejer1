import React from 'react'
import user from '/Images/user.png'
import './style.css'

function Login () {
  return (
    <>
      <button className='login-button bg-blue-900 rounded' type="button">
        <img className='login-user' src={user} alt="User" />
        login 
      </button> 
    </>
    
  );
}

export default Login;
