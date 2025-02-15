import React from "react";

import "../Global.css";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.Footer}>
        <div className={styles.FooterContactInfo}>
          <span className={styles.FooterEmail}>
            mail: &nbsp; fguerin555@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer; //
