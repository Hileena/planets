import styles from "./App.module.css";
import { useState } from "react";
import { SidePanel } from "./sideBar";
import { MainView } from "./mainView/index";

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);

  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <SidePanel selectedPlanet={selectedPlanet} />
      </div>
      <MainView onPlanetClick={setSelectedPlanet} />
    </div>
  );
}

export default App;
