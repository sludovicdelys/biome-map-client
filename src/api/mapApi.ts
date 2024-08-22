import { MapConfig } from "../types";
import { GeneratedMap } from "../types";

const API_URL = import.meta.env.VITE_API_URL;

export const generateMap = async (config: MapConfig): Promise<GeneratedMap> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(config),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
