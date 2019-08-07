import React from "react";
import styles from "../css/PlusButton.module.scss";
import sprite from "../assets/all.svg";

const PlusButton = ({ handleNewTask, handleModal }) => {
  return (
    <div className={styles.PlusButton}>
      <button className={styles.PlusButton_iconBtn} onClick={handleNewTask}>
        <svg className={styles.PlusButton_icon}>
          <use xlinkHref={`${sprite}#icon-plus`} />
        </svg>
      </button>
      {/* TOOLTIP SECTION */}
      <div className={styles.PlusButton_tooltip}>
        <h6 className={styles.PlusButton_tooltip_text}>Add a task</h6>
      </div>
    </div>
  );
};

export default PlusButton;
