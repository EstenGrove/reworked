import React, { useState } from "react";
import styles from "../css/AppHeader.module.scss";
import { default as sprite } from "../assets/all.svg";
import Modal from "./Modal";

// Contains the "Help" Question Mark Icon

const AppHeader = () => {
  const [openHelp, setOpenHelp] = useState(false);

  return (
    <>
      <div className={styles.AppHeader}>
        <h1 className={styles.AppHeader_title}>Weekly View</h1>
        <aside className={styles.AppHeader_icons}>
          <svg className={styles.icon} onClick={() => setOpenHelp(!openHelp)}>
            <use xlinkHref={`${sprite}#icon-help-with-circle`} />
          </svg>
        </aside>
      </div>
      <Modal
        isOpen={openHelp}
        handleClose={() => setOpenHelp(false)}
        modalTitle="Help"
      >
        <div className={styles.HelpModal}>
          <h1 className={styles.HelpModal_title}>Color Legend</h1>

          <div className={styles.HelpModal_legend}>
            <div
              className={styles.HelpModal_legend_entry}
              style={{ opacity: ".6" }}
            >
              <p>Red: INCOMPLETE </p>
            </div>
            <div className={styles.HelpModal_legend_entry}>
              <p style={{ color: "#61E294", opacity: ".6" }}>
                Green: COMPLETE{" "}
              </p>
            </div>
            <div className={styles.HelpModal_legend_entry}>
              <p style={{ color: "#ff957d", opacity: ".6" }}>
                Orange: PENDING/IN-PROGRESS{" "}
              </p>
            </div>
            <div className={styles.HelpModal_legend_entry}>
              <p style={{ color: "#5c75ea", opacity: ".6" }}>
                Purple: MEDICAL FOLLOW-UP{" "}
              </p>
            </div>
            <div className={styles.HelpModal_legend_entry}>
              <p
                style={{
                  color: "#333",
                  opacity: ".6",
                  backgroundColor: "#eaecef"
                }}
              >
                Grey: SCHEDULED, BUT UNTOUCHED{" "}
              </p>
            </div>
          </div>
          <hr style={{ opacity: ".4" }} />
          <div className={styles.HelpModal_Tasks}>
            <h4 className={styles.HelpModal_Tasks_title}>Status a Task</h4>
            <ul className={styles.HelpModal_Tasks_desc}>
              <ol>
                <b style={{ opacity: ".8" }}>1.</b> Click on any task. (a pop-up
                box will appear.)
              </ol>
              <ol>
                <b style={{ opacity: ".8" }}>2.</b> Fill out the fields in the
                pop-up box
              </ol>
              <ol>
                <b style={{ opacity: ".8" }}>3.</b> Click Save
              </ol>
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AppHeader;
