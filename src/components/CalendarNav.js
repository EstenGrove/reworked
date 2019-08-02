import React from "react";
import styles from "../css/CalendarNav.module.scss";
import { default as sprite } from "../assets/all.svg";

const CalendarNav = ({ month, dateChangeHandler }) => {
  console.log(sprite);
  return (
    <nav className={styles.CalendarNav}>
      <ul className={styles.CalendarNav_list}>
        <li
          className={`${styles.CalendarNav_list_item} ${
            styles.CalendarNav_list_item__icon
          }`}
        >
          <svg className={styles.icon}>
            <use xlinkHref={`${sprite}#icon-chevron-small-left`} />
          </svg>
        </li>
        <li className={styles.CalendarNav_list_month}>{month}</li>
        <li
          className={`${styles.CalendarNav_list_item} ${
            styles.CalendarNav_list_item__icon
          }`}
        >
          <svg className={styles.icon}>
            <use xlinkHref={`${sprite}#icon-chevron-small-right`} />
          </svg>
        </li>
      </ul>
    </nav>
  );
};

export default CalendarNav;
