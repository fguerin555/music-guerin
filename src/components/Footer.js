import React from "react";
import "../Global.css";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.Footer}>
        <p>All Rights Reserved for All Countries</p>
        <p>©Frédéric Guérin</p>
        <p>Società Italiana Autori ed Editori S.I.A.E.</p>
      </div>
    </div>
  );
};
export default Footer;
