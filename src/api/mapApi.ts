import { MapConfig } from '../types';
import { Biome } from '../types';

export const generateMap = async (config: MapConfig): Promise<Biome[][]> => {
  const response = await fetch('http://localhost:5000/map/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(config),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};