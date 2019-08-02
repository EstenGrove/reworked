import React from "react";
import styles from "../css/AppHeader.module.scss";
import { default as sprite } from "../assets/all.svg";

const AppHeader = () => {
  return (
    <div className={styles.AppHeader}>
      <aside className={styles.AppHeader_icons}>
        <svg className={styles.icon}>
          <use xlinkHref={`${sprite}#icon-help-with-circle`} />
        </svg>
      </aside>
    </div>
  );
};

export default AppHeader;
