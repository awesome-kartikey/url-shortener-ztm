import React from 'react';
import { Container, Typography } from '@mui/material';

const Admin: React.FC = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Page
      </Typography>
      <Typography variant="body1">
        This is the admin page. You can manage your links here.
      </Typography>
    </Container>
  );
};

export default Admin;
