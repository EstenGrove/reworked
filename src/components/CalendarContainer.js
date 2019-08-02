import React from "react";
import styles from "../css/CalendarContainer.module.scss";

const CalendarContainer = ({ children }) => {
  return <div className={styles.CalendarContainer}>{children}</div>;
};

export default CalendarContainer;
