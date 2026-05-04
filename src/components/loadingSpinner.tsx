import { RingLoader } from "react-spinners";
import styles from "./loadingSpinner.module.css";

export function LoadingSpinner() {
  return (
    <div className={styles.wrapper}>
      <RingLoader color="white" size={80} />
    </div>
  );
}
