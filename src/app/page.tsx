import { AppHeader } from "@/components/app-header";
import { SignInForm } from "@/components/sign-in-form";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.background} aria-hidden="true" />
      <AppHeader />
      <section className={styles.formArea} aria-label="Sign in">
        <SignInForm />
      </section>
    </main>
  );
}
