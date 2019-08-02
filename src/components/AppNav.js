import React from "react";
import styles from "../css/AppNav.module.scss";
import { default as sprite } from "../assets/all.svg";
import { default as nav } from "../assets/login.svg";
import logo from "../assets/LOGO-ONLY-TITLE.png";

const AppNav = ({ activeUser }) => {
  console.log(sprite);
  return (
    <nav className={styles.Nav}>
      <ul className={styles.Nav_list}>
        <li className={styles.Nav_list_item}>
          <img
            src={logo}
            className={styles.Nav_list_item_logo}
            alt="AL Advantage logo"
          />
        </li>

        <li className={`${styles.Nav_list_item} ${styles.user}`}>
          <span className={styles.Nav_list_item_user}>{activeUser}</span>
          <svg className={styles.Nav_list_item_icon}>
            <use xlinkHref={`${sprite}#icon-person_outline`} />
          </svg>
          <svg
            className={styles.Nav_list_item_logout}
            style={{
              width: "2rem",
              height: "2rem",
              marginTop: ".5rem",
              opacity: ".4"
            }}
          >
            <use xlinkHref={`${nav}#icon-log-out`} />
          </svg>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
