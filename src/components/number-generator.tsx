"use client";

import { useState } from "react";
import { generateUniqueDigits } from "@/lib/generate-unique-digits";
import cardStyles from "./auth-card.module.css";
import styles from "./number-generator.module.css";

export function NumberGenerator() {
  const [numbers, setNumbers] = useState<number[]>([]);

  return (
    <section className={`${cardStyles.card} ${styles.card}`} aria-labelledby="generator-title">
      <div className={styles.intro}>
        <h1 id="generator-title">Zahlen generieren</h1>
        <p>Generiere 6 Zahlen zwischen 0 und 9, wobei keine Zahl doppelt vorkommen darf.</p>
      </div>

      <div className={styles.actions}>
        <div className={styles.numbers} aria-live="polite" aria-label="Generated numbers">
          {Array.from({ length: 6 }, (_, index) => (
            <output className={styles.numberBox} key={index}>
              {numbers[index] ?? ""}
            </output>
          ))}
        </div>

        <button className={styles.generateButton} type="button" onClick={() => setNumbers(generateUniqueDigits())}>
          Generieren
        </button>
        <a className={styles.backLink} href="/">
          <img src="/assets/chevron.svg" alt="" aria-hidden="true" />
          Zurück
        </a>
      </div>
    </section>
  );
}
