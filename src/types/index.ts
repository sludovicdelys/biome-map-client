export interface Biome {
  type: "plain" | "desert" | "forest" | "ocean";
  color: string;
}

export interface MapConfig {
  availableBiomes: Biome[];
  baseBiome: Biome;
  numberOfBiomes: number;
  width: number;
  height: number;
}

export interface GeneratedMap {
  baseBiome: Biome;
  width: number;
  height: number;
  biomePlacements: Array<{
    biome: Biome;
    x: number;
    y: number;
    size: number;
  }>;
}
