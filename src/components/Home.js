import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function Home() {
  return (
   <>
       <Box
      sx={{
        top : 0,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100vh', // Adjust the height as needed
        backgroundImage: 'url("https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
    <Box sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height : 500,
        p : 2,
        maxWidth : 500
    }}>
    <Typography variant="h4" color="primary" fontWeight={600}>
        {'We are the creative'.toUpperCase()}
      </Typography>
      <Typography  variant="h3" color="secondary" fontWeight={600}>
      {'Marketing'.toUpperCase()}
      </Typography>
      <Typography  variant="h3" color="secondary" fontWeight={600}>
      {'Agency'.toUpperCase()}
      </Typography>
      <Typography variant="body2" color="primary">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
      <Button variant='outlined' sx={{
        borderRadius : '2em',
        mt: 5,
        borderWidth : '0.2em'
      }}>
        <Typography variant="body1" fontWeight={600}>See More</Typography>
      </Button>
    </Box>
     
    </Box>
   </>
  )
}

export default Home