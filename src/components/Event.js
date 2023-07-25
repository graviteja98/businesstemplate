import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
const Event = () => {
  console.log('red')
  return (
    <Container
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
     maxWidth="100%"
      sx={{
        top : 0,
        left : 0,
   
        p: 2,
      
     backgroundRepeat : 'no-repeat',
     backgroundSize : 'cover',
     backgroundImage : 'url("https://images.unsplash.com/photo-1510511233900-1982d92bd835?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")'
        }}
    >
       <Typography variant="h4" align="center" fontFamily="verdana" color="primary" marginTop={9} sx={{backgroundColor : 'rgba(0, 0, 0, 0.5)'}}>
        Event details
      </Typography>
      <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      maxWidth={'80%'}
      sx={{
        mt : 9,
        pl : 20, 
      }}>
     
      <Grid container spacing={4}>
        {/* Card 1 */}
        <Grid item xs={12} sm={12}>
        <motion.div
   initial={{ x: -100 }} // Initial position to the left (off-screen)
   animate={{ x: 0 }}>
          <Card
            sx={{
              backgroundColor : 'primary.main',
              display: "flex",
              flexDirection: { xs: "column", sm: "row-reverse" },
            }}
          >
            <CardMedia
              component="img"
              image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Image 1"
              sx={{ height: 200, width: { xs: "100%", sm: 200 } }}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Event Title 1
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis libero in sollicitudin vehicula.
              </Typography>
            </CardContent>
          </Card>
          </motion.div>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={12}>
        <motion.div
   initial={{ x: 100 }} // Initial position to the left (off-screen)
   animate={{ x: 0 }}>
          <Card
            sx={{ backgroundColor : 'primary.main', display: "flex", flexDirection: { xs: "column", sm: "row" } }}
          >
            <CardMedia
              component="img"
              image="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Image 2"
              sx={{ height: 200, width: { xs: "100%", sm: 200 } }}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Event Title 2
              </Typography>
              <Typography variant="body1">
                Nunc eget elit nec libero facilisis finibus. Donec nec ex sed
                nulla tristique tincidunt.
              </Typography>
            </CardContent>
          </Card>
          </motion.div>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={12}>
        <motion.div
   initial={{ x: -100 }} // Initial position to the left (off-screen)
   animate={{ x: 0 }}>
          <Card
            sx={{ backgroundColor : 'primary.main',
              display: "flex",
              flexDirection: { xs: "column", sm: "row-reverse" },
            }}
          >
            <CardMedia
              component="img"
              image="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
              alt="Image 3"
              sx={{ height: 200, width: { xs: "100%", sm: 200 } }}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Event Title 3
              </Typography>
              <Typography variant="body1">
                Vestibulum eget purus a ipsum dictum bibendum eu vel quam. Duis
                nec commodo sapien.
              </Typography>
            </CardContent>
          </Card>
          </motion.div>
        </Grid>
      </Grid>
      </Box>
    </Container>
  );
};

export default Event;
