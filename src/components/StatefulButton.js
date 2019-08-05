import React, { useState, useEffect } from "react";
import styles from "../css/StatefulButton.module.scss";

const StatefulButton = ({ action, text, callback, bgcolor, margins }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const loginTimer = setTimeout(() => {
      setIsLoading(false);
      setIsDisabled(true);
    }, 2000);

    return () => clearTimeout(loginTimer);
  });

  const handleClick = e => {
    setIsLoading(true);
    if (!callback) {
      return;
    }
    callback(e); // optional callback
  };

  return (
    <button
      onClick={handleClick}
      className={isLoading ? styles.disabled : styles.btn}
      isdisabled={isDisabled.toString()}
      style={{ backgroundColor: `${bgcolor}`, margin: `${margins}` }}
    >
      {isLoading ? action : text}
    </button>
  );
};
export default StatefulButton;
