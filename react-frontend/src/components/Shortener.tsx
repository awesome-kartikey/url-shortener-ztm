import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Typography, Box } from '@mui/material';

const Shortener: React.FC = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would make an API call here.
    // For this example, we'll just simulate a shortened URL.
    setShortenedUrl(`https://linkly.com/${Math.random().toString(36).substring(2, 8)}`);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Shorten a long URL
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Enter your URL"
            variant="outlined"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Shorten
          </Button>
        </form>
        {shortenedUrl && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Shortened URL:</Typography>
            <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
              {shortenedUrl}
            </a>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Shortener;
