import React from 'react';
import { Box, Button } from '@mui/material';

export default function AddWorkoutButton() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingY: 2,
        width: '100%',
      }}
    >
      <Button variant="contained" color="primary" size="large">
        Add Workout Type
      </Button>
    </Box>
  );
}
