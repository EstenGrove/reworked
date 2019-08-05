import React, { useContext } from "react";
import styles from "../css/Day.module.scss";
import { StateContext, ActiveContext } from "../state/StateContext";
import Shift from "./Shift";

const Day = ({ day, modalHandler }) => {
  const { state, dispatch } = useContext(StateContext);
  const { active, setActive } = useContext(ActiveContext);

  const Grooming = state.filter(
    (task, index) => task.adl === "Grooming" && task.day === "Mon"
  );
  const Bathing = state.filter(
    (task, index) => task.adl === "Bathing" && task.day === "Monday"
  );
  const Toileting = state.filter(
    (task, index) => task.adl === "Toileting" && task.day === "Monday"
  );
  const Laundry = state.filter(
    (task, index) => task.adl === "Laundry" && task.day === "Monday"
  );
  const Meals = state.filter(
    (task, index) => task.adl === "Meals" && task.day === "Monday"
  );
  const Meds = state.filter(
    (task, index) => task.adl === "Meds" && task.day === "Monday"
  );
  const Health = state.filter(
    (task, index) => task.adl === "Health" && task.day === "Monday"
  );

  console.log(Grooming);

  return (
    <>
      <div className={styles.Day}>
        <div className={styles.Day_Shift}>
          {Grooming &&
            Grooming.map((item, index) => (
              <Shift
                adl={item.adl}
                day={item.day}
                shift={item.shift}
                openModal={() => modalHandler(item)}
                index={item.id}
                status={item.status}
              />
            ))}
        </div>
        <div className={styles.Day_Shift}>
          {Bathing &&
            Bathing.map((item, index) => (
              <Shift
                adl={item.adl}
                day={item.day}
                shift={item.shift}
                openModal={() => modalHandler(item)}
                index={item.id}
                status={item.status}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Day;
