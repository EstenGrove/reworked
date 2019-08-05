import React from "react";
import styles from "../css/TextInput.module.scss";

const TextInput = ({
  name,
  label,
  type = "text",
  required = false,
  placeholder,
  handleChange,
  overrideClass,
  overrideWidth,
  fontSize,
  defaultValue = null
}) => {
  return (
    <React.Fragment>
      <label
        htmlFor={name}
        className={styles["TextInput_label"]}
        style={{ fontSize: `${fontSize}` }}
      >
        {label}
      </label>
      <input
        className={
          overrideClass ? styles[`${overrideClass}`] : styles["TextInput_input"]
        }
        style={{ width: `${overrideWidth}` }}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        onChange={handleChange}
        defaultValue={defaultValue}
      />
    </React.Fragment>
  );
};

export default TextInput;
