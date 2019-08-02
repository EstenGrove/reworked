import React from "react";
import styles from "../css/Dropdown.module.scss";

const Dropdown = ({
  id,
  label,
  options,
  name,
  handleChange,
  handleClick = null,
  defaultValue,
  placeholder,
  customWidth = null,
  hideLabel = false,
  borderCol
}) => {
  return (
    <div className={styles.dropdown} style={{ width: `${customWidth}` }}>
      <label
        htmlFor="dropdown"
        className={hideLabel ? styles.hide : styles.dropdown_label}
      >
        {label}
      </label>
      <input
        list={id}
        name={name}
        onChange={handleChange}
        onClick={handleClick}
        defaultValue={defaultValue}
        placeholder={placeholder}
        style={{ borderColor: `${borderCol}` }}
        className={styles.dropdown_input}
      />
      <datalist id={id} className={styles.dropdownList}>
        {options.map((option, index) => (
          <option
            value={option}
            key={index}
            className={styles.dropdown_option}
          />
        ))}
      </datalist>
    </div>
  );
};
export default Dropdown;
