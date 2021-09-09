import { Navigation } from "../Navigation/Navigation";
import styles from "./Appbar.module.css";

export default function Appbar({ clearQuery }) {
  return (
    <header className={styles.header}>
      <Navigation changeQuery={clearQuery} />
    </header>
  );
}
