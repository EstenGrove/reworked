import React from "react";
import styles from "../css/ADL.module.scss";

// may need to write as a "map()"

const ADL = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ADL}>
        <h4 className={styles.ADL_title}>Grooming</h4>
      </div>
      <div className={styles.ADL}>
        <h4 className={styles.ADL_title}>Bathing</h4>
      </div>
      <div className={styles.ADL}>
        <h4 className={styles.ADL_title}>Toileting</h4>
      </div>
      <div className={styles.ADL}>
        <h4 className={styles.ADL_title}>Laundry</h4>
      </div>
      <div className={styles.ADL}>
        <h4 className={styles.ADL_title}>Meals</h4>
      </div>
      <div className={styles.ADL}>
        <h4 className={styles.ADL_title}>Meds</h4>
      </div>
      <div className={styles.ADL}>
        <h4 className={styles.ADL_title}>Health</h4>
      </div>
    </div>
  );
};

export default ADL;
