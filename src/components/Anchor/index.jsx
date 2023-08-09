import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Anchor ({to,content}) {
  return (
    <>
      <Link className='menu-link' to={to}>
        {content}
      </Link>
    </>
  )
}

export default Anchor;
