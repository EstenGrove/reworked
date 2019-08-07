import React from "react";
import styles from "../css/OtherTask.module.scss";

const OtherTask = ({ task }) => {
  return (
    <div className={styles.OtherTask}>
      <div className={styles.OtherTask_List}>{/* tasks */}</div>
    </div>
  );
};

export default OtherTask;
