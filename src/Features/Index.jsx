import React from 'react'
import Navbar from '../modules/Navbar'
import Products from '../pages/Products'
import { Route, Routes } from 'react-router-dom'
import { PATH } from '../hooks/usePath'
import SinglePage from '../pages/SinglePage'

const Layout = () => {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Routes>
         <Route path={PATH.home} element={<Products/>}/>
         <Route path={PATH.more} element={<SinglePage/>}/>
      </Routes>
    </div>
  )
}

export default Layout
