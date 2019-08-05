import React from "react";
import styles from "../css/Checkbox.module.scss";

const Checkbox = ({ label, name, id, handleCheckbox, margins }) => {
  return (
    <div
      className={styles.FancyCheckboxWrapper}
      style={{ margin: `${margins}` }}
    >
      <input type="checkbox" name={name} id={id} onChange={handleCheckbox} />
      <label className={styles["FancyCheckboxWrapper_label"]} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
