import React from "react";
import { useLocation } from "react-router-dom";

import "../Global.css";
import styles from "./Footer.module.css";

const Footer = () => {
  const location = useLocation();

  return (
    <div>
      <div className={styles.Footer}>
        <div className={styles.FooterContactInfo}>
          <span className={styles.FooterEmail}>
            {location.pathname === "/music-guerin" ||
            location.pathname === "/" ? (
              <div>
                <p>All Rights Reserved for All Countries</p>
                <p>©Frédéric Guérin</p>
                <p>Società Italiana Autori ed Editori S.I.A.E.</p>
              </div>
            ) : (
              <div>
                <p>All Rights Reserved for All Countries</p>
                <p>©Frédéric Guérin</p>
                <p>Società Italiana Autori ed Editori S.I.A.E.</p>
                <div className={styles.DoYouNeed}>
                  <p>Do you want to use one of these works?</p>
                  <p>Do you need originals scores?</p>
                  <p>Contact me at :</p>{" "}
                </div>
                <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
              </div>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
