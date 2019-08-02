import React from "react";
import styles from "../css/Modal.module.scss";

const Modal = ({ isOpen, handleClose, children }) => {
  return (
    <div className={isOpen ? `${styles.Modal} ${styles.isOpen}` : styles.Modal}>
      <div className={styles.Modal_top}>
        <span className={styles.Modal_top_heading}>Task Status</span>
        <h2 onClick={handleClose} className={styles.closeBtn}>
          ×
        </h2>
      </div>
      <div className={styles.Modal_outerWrapper}>
        <div className={styles.Modal_innerWrapper}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
