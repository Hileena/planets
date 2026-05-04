import styles from "./index.module.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import { PeopleInSpaceGame } from "./moonwalkGuessingGame/peopleInSpaceGame";
import { Typography } from "@mui/material";
import { PlanetDetails } from "./planetDetails";

export function SidePanel({
  selectedPlanet,
}: {
  selectedPlanet: string | null;
}) {
  const [guessingGameStarted, setGuessingGameStarted] = useState(false);

  return (
    <div className={styles.container}>
      <Typography variant="h3">Solar System</Typography>
      {selectedPlanet ? (
        <PlanetDetails planet={selectedPlanet} />
      ) : (
        <p>Click on a planet to learn more about it</p>
      )}

      <div className={styles.guessingGameContainer}>
        <Button
          variant="contained"
          onClick={() => setGuessingGameStarted(true)}
        >
          How many walked the moon?
        </Button>
      </div>
      {guessingGameStarted && (
        <PeopleInSpaceGame onClose={() => setGuessingGameStarted(false)} />
      )}
    </div>
  );
}
