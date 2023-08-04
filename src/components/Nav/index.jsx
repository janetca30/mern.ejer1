import React from 'react'
import Anchor from '../Anchor'
import './style.css'

function Nav () {
  let data = [
    {href:'' , content:'Home'},
    {href:'' , content :'Cities'},
  ]

  return (
    <>
      <nav>
        {data.map((each,key)=><Anchor key={key}href={each.href} content={each.content} />)}
      </nav>
      
    </>
    
  )
}

export default Nav;
