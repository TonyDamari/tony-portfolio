import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
      <Box>
          {/* <Navbar /> */}
          <Outlet/>
    </Box>
  )
}

export default Layout