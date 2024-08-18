import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/images/Logo.png'
const Footer = () => {
  return (
    <Box mt="80px" bgcolor={"#FF2625"}>
      <Stack gap="40px" alignItems={"center"} px="40px" pt="24px">
        <Typography variant='h6' pb="40px" mt="40px" color={'white'}>
          Made with love by Chinmay Joshi
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer