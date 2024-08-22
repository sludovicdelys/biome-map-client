import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Box,
} from "@mui/material";
import { MapConfig, Biome } from "../types";

const BIOMES: Biome[] = [
  { type: "plain", color: "#90EE90" },
  { type: "desert", color: "#FFD700" },
  { type: "forest", color: "#228B22" },
  { type: "ocean", color: "#1E90FF" },
];
interface Props {
  onSubmit: (config: MapConfig) => void;
}

export const MapForm: React.FC<Props> = ({ onSubmit }) => {
  const [baseBiome, setBaseBiome] = useState<Biome>(BIOMES[3]);
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  const [numberOfBiomes, setNumberOfBiomes] = useState(4);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const config: MapConfig = {
      availableBiomes: BIOMES,
      baseBiome,
      numberOfBiomes,
      width,
      height,
    };
    onSubmit(config);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        width: "100%",
        maxWidth: 500,
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="base-biome-label">Base Biome</InputLabel>
        <Select
          labelId="base-biome-label"
          value={baseBiome.type}
          label="Base Biome"
          onChange={(e) =>
            setBaseBiome(
              BIOMES.find((b) => b.type === e.target.value) || BIOMES[0],
            )
          }
        >
          {BIOMES.map((biome) => (
            <MenuItem key={biome.type} value={biome.type}>
              {biome.type.charAt(0).toUpperCase() + biome.type.slice(1)}
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
        value={numberOfBiomes}
        onChange={(e) => setNumberOfBiomes(Number(e.target.value))}
        InputProps={{ inputProps: { min: 1 } }}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Generate Map
      </Button>
    </Box>
  );
};
