import React from 'react'
import Anchor from '../Anchor'

import './style.css'

function Nav () {
  let data = [
    {to:'/' , content:'Home'},
    {to:'/cities' , content :'Cities'},
  ]

  return (
    <>
      <nav>
        {data.map((each,key)=><Anchor key={key}to={each.to} content={each.content} />)}
      </nav>
      
    </>
    
  )
}

export default Nav;
