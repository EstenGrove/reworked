import React from "react";
import styles from "../css/CalendarHeading.module.scss";

const CalendarHeading = () => {
  return (
    <div className={styles.CalendarHeading}>
      <section className={styles.headings}>
        <div className={styles["headings_category"]}>
          <h4 className={styles["headings_category__Text"]}>Category</h4>
        </div>

        <div className={styles["headings_date"]}>
          1<span className={styles["headings_day"]}>Mon.</span>
        </div>
        <div className={styles["headings_date"]}>
          2<span className={styles["headings_day"]}>Tues.</span>
        </div>
        <div className={styles["headings_date"]}>
          3<span className={styles["headings_day"]}>Weds.</span>
        </div>
        <div className={styles["headings_date"]}>
          4<span className={styles["headings_day"]}>Thurs.</span>
        </div>
        <div className={styles["headings_date"]}>
          5<span className={styles["headings_day"]}>Fri.</span>
        </div>
        <div className={styles["headings_date"]}>
          6<span className={styles["headings_day"]}>Sat.</span>
        </div>
        <div className={styles["headings_date"]}>
          7<span className={styles["headings_day"]}>Sun.</span>
        </div>
      </section>
    </div>
  );
};

export default CalendarHeading;
