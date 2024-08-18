import {Box} from '@mui/material';
import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
const MainLayout = () => {
  return (
    <>
    <Box width="400px" sx={{width: {xl:'1488px'}}} m='auto'>
        <Navbar/>
        <Outlet/>
    </Box>
    <Footer/>
    </>
  )
}

export default MainLayout