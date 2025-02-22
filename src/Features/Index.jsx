import React from 'react'
import Navbar from '../modules/Navbar'
import Products from '../pages/Products'

const Layout = () => {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Products/>
    </div>
  )
}

export default Layout
