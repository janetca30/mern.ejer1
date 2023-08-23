import React from 'react';
import Networks from '../Networks'
import Facebook from '/Images/ImgNetworks/facebook.png'
import Whatsapp from '/Images/ImgNetworks/whatsapp.png'
import Contact from '/Images/ImgNetworks/contact.png'
import './style.css'

function NavFooter () {
  let data = [
    {to: '', imgNet: Facebook},
    {to: '', imgNet: Whatsapp},
    {to: '', imgNet: Contact}
  ]
  return (
    <nav>
      {data.map((each,key)=><Networks key={key} to={each.to} imgNet={each.imgNet} />)}
    </nav>
  );
}

export default NavFooter;
