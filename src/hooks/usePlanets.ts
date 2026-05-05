import { useEffect, useState } from "react";

export type Planet = {
  name: string;
  mass: number;
  radius: number;
  period: number;
  semi_major_axis: number;
  temperature: number;
  distance_light_year: number;
  host_star_mass: number;
  host_star_temperature: number;
};

const solarSystemPlanets = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
];

// Custom hook to fetch planet data from the API
// fetches all planets in the solar system on mount using Promise.all rather than sequentially
export const usePlanets = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await Promise.all(
          solarSystemPlanets.map((planet) =>
            fetch(`/api/v1/planets?name=${planet}`, {
              headers: {
                "X-Api-Key": import.meta.env.VITE_NINJA_PLANETS_API_KEY,
              },
            }),
          ),
        );
        const data = await Promise.all(response.map((res) => res.json()));
        setPlanets(data.flat());
      } catch (error) {
        console.error("Error fetching planets:", error);
        setError("Failed to fetch planet data.");
      }
    };

    fetchPlanets();
  }, []);

  return planets;
};
