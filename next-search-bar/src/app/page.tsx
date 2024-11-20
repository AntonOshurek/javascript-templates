//STYLES
import styles from "./page.module.css";
//COMPONENTS
import { SearchBar } from "./components";

export default function Home() {
  return (
    <div className={styles.page}>
      <SearchBar />
    </div>
  );
}
