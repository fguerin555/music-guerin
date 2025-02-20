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
            <p>Works Protected by :</p>
            <p>Società Italiana Autori ed Editori S.I.A.E.</p>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer; //
