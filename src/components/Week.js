import React, { useState, useContext } from "react";
import styles from "../css/Week.module.scss";
import { StateContext, ActiveContext } from "../state/StateContext";
import ADL from "./ADL";
import Sunday from "./days/Sunday";
import Monday from "./days/Monday";
import Tuesday from "./days/Tuesday";
import Wednesday from "./days/Wednesday.js";
import Thursday from "./days/Thursday.js";
import Friday from "./days/Friday.js";
import Saturday from "./days/Saturday";
import Shift from "./Shift";

const Week = () => {
  const { state, dispatch } = useContext(StateContext);
  const { active, setActive } = useContext(ActiveContext);
  const [isOpen, setIsOpen] = useState(false);

  // handles opening the modal
  const modalHandler = (e, shift) => {
    console.log(e, shift);

    return setIsOpen(!isOpen);
  };

  const findDaBullShit = (condition, el) => {
    const shit = state.filter(
      (item, index) =>
        item.day === "Sat" && item.shift === "A" && item.adl === "Laundry"
    );

    if (condition) {
      return el;
    }

    state.findIndex();
  };

  console.log(
    state.filter(
      (item, index) =>
        item.day === "Sat" && item.shift === "A" && item.adl === "Laundry"
    )
  );

  return (
    <>
      <div className={styles.Week}>
        <ADL />
        <Monday originalTasks={state} modalHandler={modalHandler} />
        <Tuesday originalTasks={state} modalHandler={modalHandler} />
        <Wednesday originalTasks={state} modalHandler={modalHandler} />
        <Thursday originalTasks={state} modalHandler={modalHandler} />
        <Friday originalTasks={state} modalHandler={modalHandler} />
        <Saturday originalTasks={state} modalHandler={modalHandler} />
        <Sunday originalTasks={state} modalHandler={modalHandler} />
      </div>
      <hr style={{ marginTop: "3rem", opacity: ".6" }} />
    </>
  );
};

export default Week;
