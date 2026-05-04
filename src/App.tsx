import ThreeScene from "./threeScene";
import styles from "./App.module.css";
import { useState } from "react";
import { SidePanel } from "./sideBar/sidePanel";

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <SidePanel />
      </aside>

      <main className={styles.main}>
        <h1 className={styles.title}>Milky Way Galaxy</h1>
        <div className={styles.sceneContainer}>
          <ThreeScene onPlanetClick={setSelectedPlanet} />
        </div>
      </main>
    </div>
  );
}

export default App;
