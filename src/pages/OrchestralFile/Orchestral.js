import React from "react";
import "../../Global.css";
import styles from "./Orchestral.module.css";
import AudioPlayer from "../../components/AudioPlayer";

const Orchestral = () => {
  return (
    <div>
      <div className={styles.OrchestralPage}>
        <h1>Orchestral music</h1>
      </div>
      <AudioPlayer />
    </div>
  );
};

export default Orchestral;
