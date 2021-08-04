import React from "react";
import styles from "./Button.module.css";

export default function Button({ fetchImages }) {
  return (
    <div className={styles.ButtonContainer}>
      <button type="button" className={styles.Button} onClick={fetchImages}>
        Load more...
      </button>
    </div>
  );
}
