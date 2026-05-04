import styles from "./sidePanel.module.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import { PeopleInSpaceGame } from "./peopleInSpaceGame";

export function SidePanel() {
  const [guessingGameStarted, setGuessingGameStarted] = useState(false);

  return (
    <div className={styles.container}>
      <h2>Solar System</h2>
      <p>Click on a planet to learn more about it</p>

      <div className={styles.guessingGameContainer}>
        <Button variant="outlined" onClick={() => setGuessingGameStarted(true)}>
          How many walked the moon?
        </Button>
      </div>
      {guessingGameStarted && (
        <PeopleInSpaceGame onClose={() => setGuessingGameStarted(false)} />
      )}
    </div>
  );
}
