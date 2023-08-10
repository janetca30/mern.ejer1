import React from 'react';
import Networks from '../Networks'
import Facebook from '../../assets/Images/ImgNetworks/facebook.png'
import Whatsapp from '../../assets/Images/ImgNetworks/Whatsapp.png'
import Contact from '../../assets/Images/ImgNetworks/contact.png'
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
