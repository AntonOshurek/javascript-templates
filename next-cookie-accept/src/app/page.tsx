//STYLES
import styles from "./page.module.css";
//COMPONENTS
import { CookieNotification } from "./components";

export default function Home() {
  return (
    <div className={styles.page}>
      <CookieNotification />
    </div>
  );
}
