import styles from "./app-header.module.css";

export function AppHeader() {
  return (
    <header className={styles.header}>
      <span className={styles.language} role="img" aria-label="Language: English">
        <img src="/assets/flag-en.png" alt="" />
      </span>
    </header>
  );
}
