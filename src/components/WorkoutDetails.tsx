import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Paper,
  Button,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { NavLink } from 'react-router';

export default function WorkoutDetail() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2,
          borderBottom: '1px solid #ddd',
          backgroundColor: '#fff',
        }}
      >
        <Button
          component={NavLink}
          to="/"
          variant="outlined"
          size="small"
        >
          Back
        </Button>
      </Box>

      {/* Center panel */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          mt: 2,
          mb: 2,
          ml: 2,
          mr: 2,
          border: '1px solid #ccc',
          borderRadius: 1,
          backgroundColor: '#fafafa',
          px: 2,
          py: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Bench Press
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          2025-06-18
        </Typography>

        <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
          <Typography variant="subtitle2" gutterBottom>
            Set 1
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={2}>
            {/* Reps group */}
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              sx={{
                border: '1px solid #ccc',
                borderRadius: 1,
                px: 1.5,
                py: 1,
                backgroundColor: '#fff',
              }}
            >
              <Typography>Reps:</Typography>
              <IconButton size="small"><Remove /></IconButton>
              <Typography>10</Typography>
              <IconButton size="small"><Add /></IconButton>
            </Box>

            {/* Kg group */}
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              sx={{
                border: '1px solid #ccc',
                borderRadius: 1,
                px: 1.5,
                py: 1,
                backgroundColor: '#fff',
              }}
            >
              <Typography>Kg:</Typography>
              <IconButton size="small"><Remove /></IconButton>
              <Typography>60</Typography>
              <IconButton size="small"><Add /></IconButton>
            </Box>
          </Box>
        </Paper>

        <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
          <Typography variant="subtitle2" gutterBottom>
            Set 2
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={2}>
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              sx={{
                border: '1px solid #ccc',
                borderRadius: 1,
                px: 1.5,
                py: 1,
                backgroundColor: '#fff',
              }}
            >
              <Typography>Reps:</Typography>
              <IconButton size="small"><Remove /></IconButton>
              <Typography>8</Typography>
              <IconButton size="small"><Add /></IconButton>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={1}
              sx={{
                border: '1px solid #ccc',
                borderRadius: 1,
                px: 1.5,
                py: 1,
                backgroundColor: '#fff',
              }}
            >
              <Typography>Kg:</Typography>
              <IconButton size="small"><Remove /></IconButton>
              <Typography>65</Typography>
              <IconButton size="small"><Add /></IconButton>
            </Box>
          </Box>
        </Paper>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          p: 2,
          borderTop: '1px solid #ddd',
          backgroundColor: '#fff',
        }}
      >
        <Button variant="contained" fullWidth>
          Add Set
        </Button>
      </Box>
    </Box>
  );
}
