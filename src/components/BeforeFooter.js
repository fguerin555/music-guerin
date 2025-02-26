import React from "react";
import "../Global.css";
import styles from "./BeforeFooter.module.css";

const BeforeFooter = () => {
  return (
    <div>
      <div className={styles.BeforeFooter}>
        <p>Do you want to use one of these works?</p>
        <p>Do you need originals scores?</p>
        <p>Contact me at :</p>{" "}
        <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
      </div>
    </div>
  );
};
export default BeforeFooter;
