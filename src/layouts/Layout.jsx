import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'

function Layout({children}) {
  return (
    <>
      <Header />
      {children}
      <Home />
      <Footer />  
    </>
  )
}

export default Layout;
