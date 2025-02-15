import React from "react";
import { useRef } from "react";
import "../../Global.css";
import styles from "./Urban.module.css";
import AudioPlayer from "../../components/AudioPlayer";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import Latetaki from "../../assets/music/Urban/Latetaki.mp3";
const Urban = () => {
  const audioRef = useRef(null);
  return (
    <div>
      <div className={styles.UrbanPage}>
        <p>Urban </p>
        <div className={styles.LecteursContainer}>
          <AudioPlayer
            className={styles.Player}
            src={Latetaki}
            title="Latetaki"
            depositNumber="17"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Latetaki} />
          </AudioPlayer>
        </div>

        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default Urban;
