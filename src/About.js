import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Global.css";
import styles from "./About.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.AboutPage}>
        <div className={styles.Logo2}>
          <img src={logo} alt="Logo Music" />{" "}
        </div>

        <div className={styles.CuricIrma}>
          <Link to="/curicIrma">
            {" "}
            <button>Curriculum</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
