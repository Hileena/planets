import { usePlanets } from "../hooks/usePlanets";
import styles from "./planet.details.module.css";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import { LoadingSpinner } from "../components/loadingSpinner";

export function PlanetDetails({ planet }: { planet: string }) {
  const planets = usePlanets();
  const planetData = planets.find(
    (p) => p.name.toLowerCase() === planet.toLowerCase(),
  );

  return (
    <div className={styles.planetDetailsContainer}>
      <Typography variant="h5">{planet}</Typography>
      {planetData ? (
        <List dense sx={{ color: "white" }}>
          <ListItem>
            <ListItemText
              primary="Mass"
              secondary={`${planetData.mass} Earth masses`}
              slotProps={{
                secondary: { sx: { color: "rgba(255,255,255,0.7)" } },
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Radius"
              secondary={`${planetData.radius} Earth radii`}
              slotProps={{
                secondary: { sx: { color: "rgba(255,255,255,0.7)" } },
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Orbital Period"
              secondary={`${planetData.period} days`}
              slotProps={{
                secondary: { sx: { color: "rgba(255,255,255,0.7)" } },
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Semi-Major Axis"
              secondary={`${planetData.semi_major_axis} AU`}
              slotProps={{
                secondary: { sx: { color: "rgba(255,255,255,0.7)" } },
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Temperature"
              secondary={`${planetData.temperature} K`}
              slotProps={{
                secondary: { sx: { color: "rgba(255,255,255,0.7)" } },
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Distance from Earth"
              secondary={`${planetData.distance_light_year} light years`}
              slotProps={{
                secondary: { sx: { color: "rgba(255,255,255,0.7)" } },
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Host Star Mass"
              secondary={`${planetData.host_star_mass} Solar masses`}
              slotProps={{
                secondary: { sx: { color: "rgba(255,255,255,0.7)" } },
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Host Star Temperature"
              secondary={`${planetData.host_star_temperature} K`}
              slotProps={{
                secondary: { sx: { color: "rgba(255,255,255,0.7)" } },
              }}
            />
          </ListItem>
        </List>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
