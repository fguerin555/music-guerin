import React from "react";
import { useRef } from "react";
import "../../Global.css";
import styles from "./Etnic.module.css";
import AudioPlayer from "../../components/AudioPlayer";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

import Auroville from "../../assets/musicJazz/Auroville.mp3";
const Etnic = () => {
  const audioRef = useRef(null);
  return (
    <div>
      <div className={styles.UrbanPage}>
        <p>Ethnic </p>
        <div className={styles.LecteursContainer}>
          <AudioPlayer
            className={styles.Player}
            src={Auroville}
            title="Auroville"
            depositNumber="1235467"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={Auroville}
            />
          </AudioPlayer>
        </div>

        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default Etnic;
