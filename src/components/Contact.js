import React from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from '@mui/material';
import { Facebook, Instagram, Mail, Twitter } from '@mui/icons-material';

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, backgroundColor : 'secondary.lightest', p: 4 }}>
      <Grid container spacing={4}>
        {/* Contact Information */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom>
            Contact Information
          </Typography>
          <Box>
            <Typography variant="subtitle1">Address:</Typography>
            <Typography variant="body1">1234 Elm Street</Typography>
            <Typography variant="body1">City, State ZIP</Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1">Email:</Typography>
            <Typography variant="body1" >
              <Link href="mailto:example@gmail.com" sx={{ color : 'primary.darkest'}}>example@gmail.com</Link>
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1">Phone:</Typography>
            <Typography variant="body1">123-456-7890</Typography>
          </Box>
        </Grid>

        {/* Sidebar with Social Media Links */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom>
            Connect with Us
          </Typography>
          <List>
            <ListItem button component={Link} href="https://www.facebook.com">
              <ListItemIcon>
                <Facebook />
              </ListItemIcon>
              <ListItemText primary="Facebook" />
            </ListItem>
            <ListItem button component={Link} href="https://www.instagram.com">
              <ListItemIcon>
                <Instagram />
              </ListItemIcon>
              <ListItemText primary="Instagram" />
            </ListItem>
            <ListItem button component={Link} href="mailto:example@gmail.com">
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary="Email" />
            </ListItem>
            <ListItem button component={Link} href="https://www.twitter.com">
              <ListItemIcon>
                <Twitter />
              </ListItemIcon>
              <ListItemText primary="Twitter" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
