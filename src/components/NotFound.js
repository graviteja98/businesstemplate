// src/components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', marginTop : 20 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you are looking for does not exist.
      </Typography>
      <Button variant="contained" color="secondary" component={Link} to="/mainpage">
        Go back to Home
      </Button>
    </div>
  );
};

export default NotFound;
