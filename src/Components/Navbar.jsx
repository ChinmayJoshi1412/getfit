import React from 'react'
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';
import { red } from '@mui/material/colors';
const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" alignItems={'center'} sx={{gap:{sm:"122px", xs:"40px"},mt:{sm:"32px",xs:"20px"}, justifyContent:"none"}} px="20px" bgcolor={red}>
      <Link to="/">
      <img src={Logo} alt="logo" style={{
        width:'150px',
      }}/>
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end"
      >
        <Link to="/" style={{
          textDecoration:'none', color:'#3A1212', borderBottom:'3px solid #FF2625',
        }}><Typography variant='h5' fontWeight={600}>Home</Typography></Link>
        <a href='/#exercises' style={{
          textDecoration:'none', color:'#3A1212', borderBottom:'3px solid #FF2625'
        }}><Typography variant='h5' fontWeight={600}>Exercises</Typography></a>
      </Stack>
    </Stack>
  )
}

export default Navbar