import React from "react";
import styles from "../css/OtherTask.module.scss";

const OtherTask = ({ task }) => {
  return <div className={styles.OtherTask}>{task.text}</div>;
};

export default OtherTask;
