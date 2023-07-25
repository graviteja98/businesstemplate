import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { motion, useAnimation  } from 'framer-motion'
function Home() {

  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const handleScroll = () => {
    const scrolledHeight = window.scrollY;
    const windowHeight = window.innerHeight;
    const elementOffset = document.getElementById('testimonial').offsetTop;

    // Calculate the distance from the top of the viewport to the target element
    const distanceFromTop = elementOffset - scrolledHeight;

    // Set isVisible to true when the target element is visible in the viewport
    setIsVisible(distanceFromTop < windowHeight / 2);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    // If the element is visible, animate it
    if (isVisible) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    }
  }, [isVisible, controls]);
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
        maxWidth : 500,
        mt : 9,
    }}>
       <motion.div
   initial={{ x: -100 }} // Initial position to the left (off-screen)
   animate={{ x: 0 }} // Animation to move the element to its original position
  // whileHover={{ x: -10, transition: { type: 'spring', duration: 1 } }} // Bounce effect on hover
   style={{
    maxWidth : 500,
    p : 2,
     borderRadius: 8,
     mt : 9,
   }}
 ><>
    <Typography variant="h4" color="primary" fontWeight={600}>
        {'We are the creative'.toUpperCase()}
      </Typography>
      <Typography  variant="h3" color="secondary" fontWeight={600}>
      {'Marketing'.toUpperCase()}
      </Typography>
      <Typography  variant="h3" color="secondary" fontWeight={600}>
      {'Agency'.toUpperCase()}
      </Typography>
      </>  </motion.div>
      <motion.div
      id = "testimonial"
      initial={{ opacity: 0 }} // Initial opacity set to 0 (completely transparent)
      animate={{ opacity: 1 }} // Animation to increase opacity to 1 (fully visible)
      transition={{ duration: 2 }} // Duration of the fade-in animation (in seconds)
      style={{
        width: 450,
        height: 100,
        borderRadius: 8,
        m : 2
      }}
    >
      <Typography variant="body2" color="primary">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
      </motion.div>
      <motion.div whileHover={{scale:1.1, x : 20}}>
      <Button variant='outlined' sx={{
        borderRadius : '2em',
        mt: 10,
        borderWidth : '0.2em'
      }}>
        <Typography variant="body1" fontWeight={600}>See More</Typography>
      </Button></motion.div>
    </Box>
    <motion.div
     initial={{ opacity: 0, y: 100 }} // Initial position below the viewport
     animate={controls}
    >
    <Box
      sx={{
        borderRadius: 8,
        padding: 8,
        maxHeight : '60vh',
        backgroundColor: 'rgba(255, 255, 255, 0.6)', // Add a semi-transparent white background for the etched glass effect
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Apply a subtle shadow for the etched glass effect
       maxWidth : '60%',
        wordWrap: 'break-word',
        margin : '0 auto'
      }}
    >
      <Box
        sx={{
          backdropFilter: 'blur(8px)', // Apply background blur effect
          borderRadius: 8,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1, // Set the z-index to place the background behind the content
        }}
      />

      <Typography variant="h6" gutterBottom>
        Company Testimonial
      </Typography>
      <Typography variant="body1" fontWeight={600} sx={{ textShadow: '2px 2px 8px rgba(255, 255, 255, 01)'}} gutterBottom>
        "I have been working with this company for years, and they have consistently
        delivered outstanding results. Their expertise and dedication to their work
        are truly impressive. I highly recommend them for any project."
      </Typography>
      <Typography variant="subtitle1"  sx={{ textShadow: '2px 2px 8px rgba(255, 255, 255, 01)'}}>- Sam Cruise</Typography>
    </Box>
    </motion.div>
    </Box> 
   
   </>
  )
}

export default Home