import React from "react";
import styles from "../css/OtherTasksSection.module.scss";
import Dropdown from "./Dropdown";

const OtherTasksSection = ({ name1, name2, id1, id2, handleSubmit }) => {
  return (
    <section className={styles.Other}>
      <h3 className={styles.Other_heading}>Other Tasks</h3>
      <hr className={styles.border} />

      {/* LEFT SIDE DESCRIPTION */}
      <div className={styles.Other_main}>
        <div className={styles.Other_left}>
          <h5 className={styles.Other_left_subheading}>Category</h5>
          <span className={styles.Other_left_desc}>
            Choose a category or ADL for the unscheduled task. Apply an optional
            priority and follow-up date.
          </span>

          <h5 className={`${styles.Other_left_subheading} ${styles.last}`}>
            Required Signature
          </h5>
          <span className={styles.Other_left_desc}>
            Employees must sign their name upon entering any unscheduled tasks.
          </span>

          <h5 className={`${styles.mobile_heading} ${styles.hide}`}>
            Unscheduled
          </h5>
          <span className={`${styles.mobile_desc} ${styles.hide}`}>
            This section is for entering tasks that were either unscheduled or
            do not fall under an existing ADL category yet need to be tracked
            accordingly.
          </span>
        </div>
        {/* RIGHT SIDE FORM */}
        <div className={styles.Other_right}>
          <h5 className={styles.Other_right_subheading}>ADL</h5>
          <Dropdown
            type="text"
            name="other-adl"
            id="other-adl"
            options={[
              "Grooming",
              "Mental",
              "Health",
              "Shower",
              "Meds",
              "Dressing",
              "Bathing",
              "Laundry",
              "Toileting",
              "Meals"
            ]}
            className={styles.Other_right_input}
            customWidth="100%"
            hideLabel={true}
            borderCol="#c9c7cb"
          />
          <h5 className={styles.Other_right_subheading}>Priority</h5>
          <input
            type="text"
            name="adl"
            id="adl"
            className={styles.Other_right_input}
          />
          <h5 className={styles.Other_right_subheading}>Follow-Up Date</h5>
          <input
            type="datetime-local"
            name="followUP"
            id="followUP"
            className={styles.Other_right_input}
          />
          <h5 className={`${styles.Other_right_subheading} ${styles.spacing}`}>
            Employee Signature
          </h5>
          <input
            type="text"
            name="sign"
            id="sign"
            className={styles.Other_right_input}
          />
          <div className={styles.btnWrapper}>
            <button className={styles.Other_right_btn} onClick={handleSubmit}>
              Create Task
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherTasksSection;
