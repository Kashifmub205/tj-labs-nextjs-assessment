import styles from "./app-header.module.css";

type AppHeaderProps = {
  language?: "de" | "en";
  showSettings?: boolean;
};

export function AppHeader({ language = "en", showSettings = false }: AppHeaderProps) {
  const flagSource = language === "de" ? "/assets/flag-de.svg" : "/assets/flag-en.png";

  return (
    <header className={styles.header}>
      <div className={styles.actions}>
        <span className={styles.language} role="img" aria-label={language === "de" ? "Sprache: Deutsch" : "Language: English"}>
          <img src={flagSource} alt="" />
        </span>
        {showSettings ? (
          <span className={styles.settings} role="img" aria-label="Settings">
            <img src="/assets/settings.svg" alt="" />
          </span>
        ) : null}
      </div>
    </header>
  );
}
