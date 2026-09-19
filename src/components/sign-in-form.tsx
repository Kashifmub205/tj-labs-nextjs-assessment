import styles from "./sign-in-form.module.css";

export function SignInForm() {
  return (
    <form className={styles.card}>
      <div className={styles.intro}>
        <h1>Sign in</h1>
        <p className={styles.signUpPrompt}>
          <span>Don&apos;t have an account?</span>
          <span className={styles.signUpLink}>Get started</span>
        </p>
      </div>

      <div className={styles.fields}>
        <div className={styles.field}>
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" />
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <div className={styles.passwordInput}>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="6+ characters"
              autoComplete="current-password"
            />
            <img src="/assets/eye-closed.svg" alt="" aria-hidden="true" />
          </div>
        </div>

        <p className={styles.generateNumbers}>Generate numbers</p>
        <button type="button">Sign in</button>
      </div>
    </form>
  );
}
