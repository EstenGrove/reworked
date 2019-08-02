import React from "react";
import styles from "../css/OtherTaskList.module.scss";
import OtherTask from "./OtherTask";

const OtherTaskList = ({ otherTasks }) => {
  return (
    <div className={styles.OtherTaskList}>
      <ul className={styles.OtherTaskList_list}>
        {otherTasks.map((task, index) => (
          <OtherTask task={task} />
        ))}
      </ul>
    </div>
  );
};

export default OtherTaskList;
