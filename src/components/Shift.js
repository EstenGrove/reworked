import React, { useContext } from "react";
import styles from "../css/Shift.module.scss";
import { ActiveContext, StateContext } from "../state/StateContext";

const Shift = ({ status, shift, day, ADL, openModal, id }) => {
  const { state, dispatch } = useContext(StateContext);
  const { active, setActive } = useContext(ActiveContext);

  return (
    <span
      className={
        status ? `${styles.Shift} ${styles[`${status}`]}` : styles.Shift
      }
      onClick={openModal}
      data-day={day}
      data-adl={ADL}
      data-shift={shift}
      key={id}
    >
      {shift}
    </span>
  );
};

export default Shift;
