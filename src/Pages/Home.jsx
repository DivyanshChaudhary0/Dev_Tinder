
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full min-h-screen'>
        <Navbar/>
        <Outlet/>
        {/* <Footer/> */}
    </div>
  )
}

export default Home
