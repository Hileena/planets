import styles from "./index.module.css";
import SolarSystem from "./solarSystem";

export function MainView({
  onPlanetClick,
}: {
  onPlanetClick: (planet: string) => void;
}) {
  return (
    <main className={styles.main}>
      <div className={styles.sceneContainer}>
        <SolarSystem onPlanetClick={onPlanetClick} />
      </div>
    </main>
  );
}
