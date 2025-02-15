import React from "react";
import { useRef } from "react";
import "../../Global.css";
import styles from "./Chamber.module.css";
import AudioPlayer from "../../components/AudioPlayer";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

import Andante from "../../assets/music/Bologna/Andante.mp3";
import Arcate from "../../assets/music/Bologna/Arcate.mp3";
import MarciaClaudicante from "../../assets/music/Bologna/MarciaClaudicante.mp3";
import LeMatin from "../../assets/music/Bologna/LeMatin.mp3";

const Chamber = () => {
  const audioRef = useRef(null);
  return (
    <div>
      <div className={styles.ChamberPage}>
        <p>Orchestral </p>
        <div className={styles.LecteursContainer}>
          <AudioPlayer
            className={styles.Player}
            src={MarciaClaudicante}
            title="Marcia Claudicante"
            depositNumber="17006025100"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={MarciaClaudicante}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={LeMatin}
            title="Le Matin"
            depositNumber="17006024600"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={LeMatin} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Arcate}
            title="Arcate"
            depositNumber="17006025700"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Arcate} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Andante}
            title="Andante"
            depositNumber="17006025400"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Andante} />
          </AudioPlayer>
        </div>

        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default Chamber;
