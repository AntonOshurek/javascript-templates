"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useTheme } from "next-themes";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.wrap}>
      <section className={styles.section}>
        <h1 className={styles.text}>Theme switcher in next.js</h1>

        <div>
          The current theme is: {theme}
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="system">System</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
      </section>
    </div>
  );
}
