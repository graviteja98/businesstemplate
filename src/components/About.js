import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Box sx={{
       backgroundImage : 'url("https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")'
      ,top : 0,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100vh',
        backgroundRepeat : 'no-repeat',
        backgroundSize : 'cover'
    }}>
    <Container maxWidth="md" sx={{ 
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color :'white',
    mt : 9
    }}>
      <Typography variant="h4" gutterBottom sx={{ backgroundColor : 'secondary.lightest', color : 'black' }} align="center">
        About Us
      </Typography>
      <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', p: 2, }}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at dignissim nisi. Nunc vel
          ultricies nulla, quis convallis nisi. Integer iaculis, risus at malesuada scelerisque,
          est nisl eleifend elit, eu aliquam libero ex eget nibh.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Aenean ut fermentum dui, et rhoncus sapien. Vivamus sagittis dolor et lorem maximus, vel
          lacinia neque cursus. Sed id nisi finibus, interdum lectus ac, consequat enim. Sed in
          turpis at justo gravida convallis in nec purus.
        </Typography>
      </Box>
    </Container>
    </Box>
  );
};

export default About;
