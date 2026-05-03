import ThreeScene from "./threeScene";
import styles from "./App.module.css";
import PeopleInSpace from "./peopleInSpace";
import { useState } from "react";
import Button from "@mui/material/Button";

function App() {
  const [peopleInSpaceButtonClicked, setPeopleInSpaceButtonClicked] =
    useState(false);

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        {peopleInSpaceButtonClicked === false && (
          <>
            <span className={styles.sidebarHeader}>
              How many people are in space right now?
            </span>
            <Button
              variant="contained"
              onClick={() => setPeopleInSpaceButtonClicked(true)}
              disabled={peopleInSpaceButtonClicked}
            >
              Show me!
            </Button>
          </>
        )}

        {peopleInSpaceButtonClicked && <PeopleInSpace />}
      </aside>
      <main className={styles.main}>
        <h1 className={styles.title}>Milky Way Galaxy</h1>
        <div className={styles.sceneContainer}>
          <ThreeScene />
        </div>
      </main>
    </div>
  );
}

export default App;
