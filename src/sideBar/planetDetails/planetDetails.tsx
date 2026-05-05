import { usePlanets } from "../../hooks/usePlanets";
import styles from "./planetDetails.module.css";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import { LoadingSpinner } from "../../components/loadingSpinner";

export function PlanetDetails({ planet }: { planet: string }) {
  const planets = usePlanets();

  if (planets.length === 0) {
    return <LoadingSpinner />;
  }

  const planetData = planets.find(
    (p) => p.name.toLowerCase() === planet.toLowerCase(),
  );

  if (!planetData) {
    return (
      <Typography data-testid="planet-error">
        Planet not found. Please click on a valid planet to see its details.
      </Typography>
    );
  }

  return (
    <div className={styles.planetDetailsContainer}>
      <Typography variant="h5">{planet}</Typography>
      <List dense sx={{ color: "white" }} data-testid="planet-details-list">
        <ListItem>
          <ListItemText
            primary="Mass"
            secondary={`${planetData.mass} Earth masses`}
            slotProps={{
              secondary: { sx: { color: "white" } },
            }}
            data-testid="mass-detail"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Radius"
            secondary={`${planetData.radius} Earth radii`}
            slotProps={{
              secondary: { sx: { color: "white" } },
            }}
            data-testid="radius-detail"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Orbital Period"
            secondary={`${planetData.period} days`}
            slotProps={{
              secondary: { sx: { color: "white" } },
            }}
            data-testid="period-detail"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Semi-Major Axis"
            secondary={`${planetData.semi_major_axis} AU`}
            slotProps={{
              secondary: { sx: { color: "white" } },
            }}
            data-testid="semi-major-axis-detail"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Temperature"
            secondary={`${planetData.temperature} K`}
            slotProps={{
              secondary: { sx: { color: "white" } },
            }}
            data-testid="temperature-detail"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Distance from Earth"
            secondary={`${planetData.distance_light_year} light years`}
            slotProps={{
              secondary: { sx: { color: "white " } },
            }}
            data-testid="distance-detail"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Host Star Mass"
            secondary={`${planetData.host_star_mass} Solar masses`}
            slotProps={{
              secondary: { sx: { color: "white " } },
            }}
            data-testid="host-star-mass-detail"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Host Star Temperature"
            secondary={`${planetData.host_star_temperature} K`}
            slotProps={{
              secondary: { sx: { color: "white" } },
            }}
            data-testid="host-star-temperature-detail"
          />
        </ListItem>
      </List>
    </div>
  );
}
