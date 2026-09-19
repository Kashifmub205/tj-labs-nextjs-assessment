import type { ReactNode } from "react";
import { AppHeader } from "./app-header";
import styles from "./auth-page-shell.module.css";

type AuthPageShellProps = {
  children: ReactNode;
  language?: "de" | "en";
  label: string;
  showSettings?: boolean;
};

export function AuthPageShell({ children, label, language, showSettings = false }: AuthPageShellProps) {
  return (
    <main className={styles.page}>
      <div className={styles.background} aria-hidden="true" />
      <AppHeader language={language} showSettings={showSettings} />
      <section className={styles.formArea} aria-label={label}>
        {children}
      </section>
    </main>
  );
}
