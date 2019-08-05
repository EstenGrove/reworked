import React from "react";
import styles from "../css/TimeBlockDropdown.module.scss";

const TimeBlockDropdown = ({
  id,
  label,
  name,
  placeholder,
  handleChange,
  options
}) => {
  return (
    <div className={styles.DropdownWrapper}>
      <label htmlFor="dropdown" className={styles.DropdownWrapper_label}>
        {label}
      </label>
      <input
        list={id}
        name={name}
        className={styles.DropdownWrapper_input}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <datalist id={id} className={styles.DropdownWrapper_datalist}>
        {options.map((option, index) => (
          <option value={option} key={index} className={styles.option} />
        ))}
      </datalist>
    </div>
  );
};

export default TimeBlockDropdown;
