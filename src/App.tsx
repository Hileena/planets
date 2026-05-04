import styles from "./App.module.css";
import { useState } from "react";
import { SidePanel } from "./sideBar/sidePanel";
import { MainView } from "./mainView/index";

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <SidePanel selectedPlanet={selectedPlanet} />
      </aside>
      <MainView onPlanetClick={setSelectedPlanet} />
    </div>
  );
}

export default App;
