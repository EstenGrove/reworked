import React from "react";
import styles from "../css/ResidentDetails.module.scss";
import { useSliced } from "../utils/useSliced";
import resImage from "../assets/resImage.png";

const placeholderText =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quibusdam enim magni ullam tempora,exercitationem nulla distinctio illum officiis.Atque cum est sed ullam rem dolorum laboriosam magnam aliquid iusto dignissimos";

const ResidentDetails = ({ resident }) => {
  const sliced = useSliced(placeholderText, 50);

  return (
    <section className={styles.ResidentDetails}>
      <div className={styles.ResidentDetails_imgWrapper}>
        <img
          src={resident ? `${resImage}` : "No photo available"}
          alt="Details shot of resident"
          className={styles.ResidentDetails_imgWrapper_img}
        />
      </div>
      {/* Resident Info Section */}
      <div className={styles.ResidentDetails_resInfo}>
        <h3 className={styles.ResidentDetails_resInfo_name}>{resident.name}</h3>
        <h5 className={styles.ResidentDetails_resInfo_age}>
          Age: {resident.age}
        </h5>
        <h3 className={styles.ResidentDetails_resInfo_unit}>
          Unit: {resident.unit}
        </h3>
      </div>

      {/* MAIN WRAPPER FOR DATA */}
      <section className={styles.ResidentWrapper}>
        {/* Resident's Height & Weight Section */}
        <div className={styles.ResidentWrapper_resStats}>
          <h5 className={styles.ResidentDetails_title}>Height/Weight</h5>
          <p className={styles.ResidentWrapper_resStats_value}>
            <b>Height:</b> &nbsp;
            {resident.height} inches
          </p>
          <p className={styles.ResidentWrapper_resStats_value}>
            <b>Weight:</b>&nbsp;
            {resident.weight} lbs.
          </p>
        </div>

        {/* Resident Due Dates Section */}
        <div className={styles.ResidentWrapper_resDueDates}>
          <h5 className={styles.ResidentDetails_title}>Due Dates</h5>
          <p className={styles.ResidentWrapper_resDueDates_item}>
            Annual ISP: <b>{resident.dueDates.ISP}</b>
          </p>
          <p className={styles.ResidentWrapper_resDueDates_item}>
            Svc. Plan: <b>{resident.dueDates.SVC}</b>
          </p>
          <p className={styles.ResidentWrapper_resDueDates_item}>
            Med Review: <b>{resident.dueDates.MED_Review}</b>
          </p>
          <p className={styles.ResidentWrapper_resDueDates_item}>
            MD Report:<b> {resident.dueDates.MD_Report}</b>
          </p>
        </div>

        {/* CARE NOTES */}
        <div className={styles.ResidentDetails_resCareNotes}>
          <h4 className={styles.ResidentDetails_title}>Care Notes:</h4>
          <p className={styles.ResidentDetails_resCareNotes_notes}>{sliced}</p>
        </div>
      </section>
    </section>
  );
};

export default ResidentDetails;
