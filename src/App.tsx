import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import { NavLink } from 'react-router';
import GymTrackerTable from './components/GymTrackerTable';

export default function App() {
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
        <Typography variant="h6">Gym Tracker</Typography>
      </Box>

      {/* Center panel: bordered, scrollable, inset table */}
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
        <GymTrackerTable />
      </Box>

      {/* Footer: Add Workout Type */}
      <Box
        sx={{
          p: 2,
          borderTop: '1px solid #ddd',
          backgroundColor: '#fff',
        }}
      >
        <Button
          component={NavLink}
          to="/add-workout-type"
          variant="contained"
          fullWidth
        >
          Add Workout Type
        </Button>
      </Box>
    </Box>
  );
}
