import React from 'react'
import './style.css'

function Anchor ({href,content}) {
  return (
    <>
      <a href={href}>{content}</a>
    </>
  )
}

export default Anchor;
