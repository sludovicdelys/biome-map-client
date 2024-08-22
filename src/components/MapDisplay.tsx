import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";
import { GeneratedMap } from "../types";

interface Props {
  map: GeneratedMap;
}

export const MapDisplay: React.FC<Props> = ({ map }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const canvasContext = canvas.getContext("2d");
    if (!canvasContext) return;

    const cellSize = 20;
    canvas.width = cellSize * map.width;
    canvas.height = cellSize * map.height;

    const baseBiome = map.baseBiome;
    canvasContext.fillStyle = baseBiome.color;
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    map.biomePlacements.forEach((placement) => {
      canvasContext.fillStyle = placement.biome.color;
      const x = placement.x * cellSize;
      const y = placement.y * cellSize;
      const size = placement.size * cellSize;
      canvasContext.fillRect(x, y, size, size);
    });
  }, [map]);

  return (
    <Box sx={{ overflowX: "auto", overflowY: "auto", mt: 2 }}>
      <canvas ref={canvasRef} />
    </Box>
  );
};
