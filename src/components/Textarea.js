import React, { useState, useEffect } from "react";
import styles from "../css/Textarea.module.scss";

const Textarea = ({
  name,
  label,
  rows,
  cols,
  placeholder,
  handleChange,
  wrap = "soft",
  disabled = false,
  readOnly = false,
  minLength = 0,
  maxLength = 250,
  required = true,
  resizeable = "none"
}) => {
  const [txtKey, setTxtKey] = useState(null);

  const keyGenerator = () => {
    return setTxtKey(
      Math.random()
        .toString(36)
        .substr(2, 5)
    );
  };

  useEffect(() => {
    window.addEventListener("onload", keyGenerator);

    return () => window.removeEventListener("onload", keyGenerator);
  });

  return (
    <React.Fragment>
      <label className={styles["custom-textarea-label"]} htmlFor={name}>
        {label}
      </label>
      <textarea
        key={txtKey}
        className={styles["custom-textarea"]}
        name={name}
        style={{ resize: `${resizeable}` }}
        rows={rows}
        cols={cols}
        wrap={wrap}
        disabled={disabled}
        readOnly={readOnly}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
      />
    </React.Fragment>
  );
};

export default Textarea;
