import React from 'react';
import { QueryClient, QueryClientProvider, useMutation } from '@tanstack/react-query';
import { Container, Typography, Box, Paper } from '@mui/material';
import { MapForm } from './components/MapForm';
import { MapDisplay } from './components/MapDisplay';
import { MapConfig, Biome } from './types';
import { generateMap } from './api/mapApi';

const queryClient = new QueryClient();

const MapGenerator: React.FC = () => {
  const [map, setMap] = React.useState<Biome[][] | null>(null);

  const mutation = useMutation({
    mutationFn: generateMap, 
    onSuccess: (data) => {
      console.log('returnedData')
      console.log(data)
      setMap(data);
    },
  });

  const handleSubmit = (config: MapConfig) => {
    mutation.mutate(config);
  };

  return (
    <Container maxWidth="md" sx={{ 
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      padding: 2
      }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Map Generator
      </Typography>
      <MapForm onSubmit={handleSubmit} />
      <Box sx={{
        mt: 4,
        width: '100%',
        display: 'flex',
        justifyContent: 'center' }}>
        {mutation.isPending && <Typography>Generating map...</Typography>}
        {mutation.isError && (
          <Typography color="error">An error occurred: {(mutation.error as Error).message}</Typography>
        )}
        {mutation.isSuccess && <MapDisplay map={mutation.data} />}
      </Box> 
    </Container>
  );
};

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <MapGenerator />
  </QueryClientProvider>
);

export default App;
