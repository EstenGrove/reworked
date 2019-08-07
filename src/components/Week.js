import React, { useState, useContext, useRef } from "react";
import styles from "../css/Week.module.scss";
import { useFormController } from "../utils/useFormController";
import { StateContext, ActiveContext } from "../state/StateContext";
import ADL from "./ADL";
import Sunday from "./days/Sunday";
import Monday from "./days/Monday";
import Tuesday from "./days/Tuesday";
import Wednesday from "./days/Wednesday.js";
import Thursday from "./days/Thursday.js";
import Friday from "./days/Friday.js";
import Saturday from "./days/Saturday";
import OtherTasksSection from "./OtherTasksSection";
import Modal from "./Modal";
import Dropdown from "./Dropdown";
import TextInput from "./TextInput";
import Textarea from "./Textarea";
import Checkbox from "./Checkbox";
import StatefulButton from "./StatefulButton";
import PlusButton from "./PlusButton";

const Week = () => {
  const { state, dispatch } = useContext(StateContext);
  const { active, setActive } = useContext(ActiveContext);
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef();
  const { handleChange, handleCheckbox, handleSubmit } = useFormController();

  // handles opening the modal
  const modalHandler = (e, shift) => {
    console.log(e, shift);

    return setIsOpen(!isOpen);
  };

  const submitHandler = e => {
    console.log("Submitted!");
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
      <OtherTasksSection />

      {/* Other tasks list */}
      <section className={styles.Week_OtherTasksList}>
        {/* sdf */}
        {/* sdfsd */}
      </section>

      {/* MODAL COMPONENT */}
      <Modal
        isOpen={isOpen}
        handleClose={modalHandler}
        modalTitle="Task Status"
      >
        <form onSubmit={handleSubmit} ref={formRef}>
          <Dropdown
            htmlFor="task-status"
            id="task-status"
            name="STATUS"
            label="Choose a status:"
            options={[
              "PENDING",
              "COMPLETE",
              "MISSED-EVENT",
              "NOT-COMPLETE",
              "IN-PROGRESS"
            ]}
            handleChange={handleChange}
            placeholder="URGENT, COMPLETE..."
          />
          <TextInput
            name="SIGNATURE"
            label="Sign your name:"
            required={true}
            handleChange={handleChange}
            placeholder="Sara Forts..."
          />
          <Checkbox
            label="Re-assess"
            name="REASSESS"
            id="reassess"
            handleCheckbox={handleCheckbox}
            margins="2rem 0"
          />
          <Textarea
            name="TaskStatus_notes"
            label="Notes/Description"
            placeholder="Notes..."
            handleChange={handleChange}
            wrap="soft"
            minLength={0}
            maxLength={250}
            required={true}
          />

          <StatefulButton
            margins="2rem 0"
            bgcolor="hsl(222, 49%, 64%)"
            text="Save"
            action="Saving..."
            callback={e => submitHandler(e)}
          />
        </form>
      </Modal>
    </>
  );
};

export default Week;
