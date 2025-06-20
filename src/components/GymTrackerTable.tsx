import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Stack,
} from '@mui/material';
import { NavLink } from 'react-router';

export default function GymTrackerTable() {
  const workouts = [
    { id: '1', name: 'Bench Press', latestReps: 10, latestSets: 3, latestDate: '2025-06-15' },
    { id: '2', name: 'Deadlift', latestReps: 5, latestSets: 4, latestDate: '2025-06-13' },
    { id: '3', name: 'Squat', latestReps: 8, latestSets: 3, latestDate: '2025-06-14' },
  ];

  const columns = ['Workout', 'Reps', 'Sets', 'Date', 'Actions'];

  const latestDate = workouts.reduce((latest, w) => {
    const d = new Date(w.latestDate);
    return d > latest ? d : latest;
  }, new Date(workouts[0].latestDate));

  return (
    <Box>

      <TableContainer
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }}
      >
        <Table size="small">
          <TableHead>
            <TableRow
              sx={{
                border: '1px solid #ccc',
                backgroundColor: '#f0f0f0',
              }}
            >
              {columns.map((heading, index) => (
                <TableCell
                  key={index}
                  align={index > 0 ? 'right' : 'left'}
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '0.875rem',
                    py: 1,
                    borderRight: index < columns.length - 1 ? '1px solid #ccc' : 'none',
                  }}
                >
                  {heading}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {workouts.map((w) => {
              const isDue = new Date(w.latestDate) < latestDate;

              return (
                <TableRow
                  key={w.id}
                  sx={{
                    borderLeft: isDue ? '4px solid red' : '4px solid transparent',
                  }}
                >
                  <TableCell sx={{ borderRight: '1px solid #ccc' }}>{w.name}</TableCell>
                  <TableCell align="right" sx={{ borderRight: '1px solid #ccc' }}>{w.latestReps}</TableCell>
                  <TableCell align="right" sx={{ borderRight: '1px solid #ccc' }}>{w.latestSets}</TableCell>
                  <TableCell align="right" sx={{ borderRight: '1px solid #ccc' }}>{w.latestDate}</TableCell>
                  <TableCell align="center">
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <Button
                        variant="outlined"
                        component={NavLink}
                        to={`/workout/${w.id}/history`}
                        size="small"
                      >
                        History
                      </Button>
                      <Button
                        variant="outlined"
                        component={NavLink}
                        to={`/workout/${w.id}`}
                        size="small"
                      >
                        Add
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
