import React from "react";
import styles from "../css/Tab.module.scss";

const Tab = ({ label, tabIndex, isActive, children }) => {
  return (
    <div
      className={isActive ? `${styles.Tab} ${styles.active}` : styles.Tab}
      data-id={tabIndex}
    >
      <h1>{label}</h1>
      {children}
    </div>
  );
};
export default Tab;
