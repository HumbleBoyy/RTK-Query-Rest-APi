import React from 'react'
import Navbar from '../modules/Navbar'
import Products from '../pages/Products'
import { Route, Routes } from 'react-router-dom'
import { PATH } from '../hooks/usePath'
import SinglePage from '../pages/SinglePage'
import AddCrud from '../pages/AddCrud'

const Layout = () => {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Routes>
         <Route path={PATH.home} element={<Products/>}/>
         <Route path={PATH.more} element={<SinglePage/>}/>
         <Route path={PATH.addCar} element={<AddCrud/>}/>
      </Routes>
    </div>
  )
}

export default Layout
