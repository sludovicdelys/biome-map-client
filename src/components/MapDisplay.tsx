import React from 'react';
import { Box, Paper } from '@mui/material';
import { Biome } from '../types';

interface Props {
  map: Biome[][];
}

const biomeColors: Record<Biome, string> = {
  plain: '#90EE90',
  desert: '#FFD700',
  forest: '#228B22',
  ocean: '#1E90FF'
};

export const MapDisplay: React.FC<Props> = ({ map }) => {
  return (
    <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(${map[0].length}, 1fr)`,
          gap: 0,
          border: '1px solid #ccc',
          width: 'fit-content',
          margin: 'auto',
          maxWidth: 'fit-content'
        }}
      >
        {map.map((row, rowIndex) =>
          row.map((biome, colIndex) => (
            <Box
              key={`${rowIndex}-${colIndex}`}
              sx={{
                width: 25,
                height: 25,
                backgroundColor: biomeColors[biome],
                border: '1px solid rgba(0,0,0,0.1)'
              }}
            />
          ))
        )}
      </Box>
    </Paper>
  );
};