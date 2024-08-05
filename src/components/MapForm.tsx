import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Box } from '@mui/material';
import { MapConfig, Biome } from '../types';

interface Props {
    onSubmit: (config: MapConfig) => void;
  }
  
const BIOMES: Biome[] = ["plain", "desert", "forest", "ocean"];

export const MapForm: React.FC<Props> = ({ onSubmit }) => {
    const [baseBiome, setBaseBiome] = useState<Biome>("ocean");
    const [width, setWidth] = useState(10);
    const [height, setHeight] = useState(10);
    const [numBiomes, setNumBiomes] = useState(4);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const config: MapConfig = {
        availableBiome: BIOMES,
        baseBiome,
        numberOfBiomes: numBiomes,
        width,
        height
      };
      onSubmit(config);
    };
  
    return (
      <Box component="form" onSubmit={handleSubmit} sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: 2,
        width: '100%', 
        maxWidth: 500 
      }}>
        <FormControl fullWidth>
          <InputLabel id="base-biome-label">Base Biome</InputLabel>
          <Select
            labelId="base-biome-label"
            value={baseBiome}
            label="Base Biome"
            onChange={(e) => setBaseBiome(e.target.value as Biome)}
          >
            {BIOMES.map((biome) => (
              <MenuItem key={biome} value={biome}>
                {biome.charAt(0).toUpperCase() + biome.slice(1)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Width"
          type="number"
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
          InputProps={{ inputProps: { min: 1 } }}
          fullWidth
        />
        <TextField
          label="Height"
          type="number"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          InputProps={{ inputProps: { min: 1 } }}
          fullWidth
        />
        <TextField
          label="Number of Biomes"
          type="number"
          value={numBiomes}
          onChange={(e) => setNumBiomes(Number(e.target.value))}
          InputProps={{ inputProps: { min: 1 } }}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Generate Map
        </Button>
      </Box>
    );
  };