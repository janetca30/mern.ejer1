import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'

function Networks ({ to, imgNet }) {
  return (
    <>
      <Link className='menu-net' to={to}>
        <img src={imgNet} alt= 'network'/>
      </Link>
    </>
  );
}

export default Networks;
