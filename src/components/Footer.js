import React from "react";

import "../Global.css";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.Footer}>
        <div className={styles.FooterContactInfo}>
          <span className={styles.FooterEmail}>
            <p>All Rights Reserved for All Countries</p>
            <p>©Frédéric Guérin</p>
            <p>Società Italiana Autori ed Editori S.I.A.E.</p>
            <div className={styles.DoYouNeed}>
              <p>Do you want to use one of these works?</p>
              <p> Do you need originals scores? contact me at :</p>{" "}
            </div>
            <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer; //
