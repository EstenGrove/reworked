import React from "react";
import styles from "../css/Calendar.module.scss";
import ResidentDetails from "./ResidentDetails";
import CalendarHeading from "./CalendarHeading";
import CalendarNav from "./CalendarNav";

import { resDetails } from "../mockdata/data";

const Calendar = ({ children }) => {
  const dateChangeHandler = () => console.log("Date Change Handler clicked");

  return (
    <div className={styles.Calendar}>
      <ResidentDetails resident={resDetails} />
      <CalendarNav month="July" dateChangeHandler={dateChangeHandler} />
      <CalendarHeading />
      {children}
    </div>
  );
};

export default Calendar;
