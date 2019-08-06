import React, { useState } from "react";
import styles from "../css/TabsController.module.scss";
import Tab from "./Tab";

const TabController = ({ labels = "", children }) => {
  const [activeTab, setActiveTab] = useState(1);

  console.log(activeTab);

  return (
    <div className={styles.TabController}>
      <h2 style={{ fontSize: "2rem" }}>Tabs Controller</h2>
      <section className={styles.TabController_nav}>
        <button
          className={
            activeTab === 1
              ? `${styles.TabController_nav_btn} ${styles.active}`
              : styles.TabController_nav_btn
          }
          onClick={() => setActiveTab(1)}
        >
          {labels[0]}
        </button>
        <button
          className={
            activeTab === 2
              ? `${styles.TabController_nav_btn} ${styles.active}`
              : styles.TabController_nav_btn
          }
          onClick={() => setActiveTab(2)}
        >
          {labels[1]}
        </button>
        <button
          className={
            activeTab === 3
              ? `${styles.TabController_nav_btn} ${styles.active}`
              : styles.TabController_nav_btn
          }
          onClick={() => setActiveTab(3)}
        >
          {labels[2]}
        </button>
        <button
          className={
            activeTab === 4
              ? `${styles.TabController_nav_btn} ${styles.active}`
              : styles.TabController_nav_btn
          }
          onClick={() => setActiveTab(4)}
        >
          {labels[3]}
        </button>
        <button
          className={
            activeTab === 5
              ? `${styles.TabController_nav_btn} ${styles.active}`
              : styles.TabController_nav_btn
          }
          onClick={() => setActiveTab(5)}
        >
          {labels[4]}
        </button>
      </section>
      <section className={styles.TabController_container}>
        <Tab tabIndex={1} isActive={activeTab === 1 ? true : false}>
          <h2>{labels[1 - 1]} Section</h2>
        </Tab>
        <Tab tabIndex={2} isActive={activeTab === 2 ? true : false}>
          <h2>{labels[2 - 1]}</h2>
        </Tab>
        <Tab tabIndex={3} isActive={activeTab === 3 ? true : false}>
          <h2> {labels[3 - 1]}</h2>
        </Tab>
        <Tab tabIndex={4} isActive={activeTab === 4 ? true : false}>
          <h2>{labels[4 - 1]}</h2>
        </Tab>
        <Tab tabIndex={5} isActive={activeTab === 5 ? true : false}>
          <h2>{labels[5 - 1]}</h2>
        </Tab>
      </section>
    </div>
  );
};
export default TabController;
