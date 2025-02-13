import React from "react";
import { useRef } from "react";
import "../../Global.css";
import styles from "./Orchestral.module.css";
import AudioPlayer from "../../components/AudioPlayer";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import Fragile from "../../assets/music/Arte-Rubata/Fragile.mp3";
import Collezione from "../../assets/music/Arte-Rubata/La-Collezione.mp3";
import DansedesVoleurs from "../../assets/music/Arte-Rubata/La-Danse-des-voleurs.mp3";
import LesLoups from "../../assets/music/Arte-Rubata/Les-Loups.mp3";
import Nascondigli from "../../assets/music/Arte-Rubata/Nascondigli.mp3";
import PiecesRares from "../../assets/music/Arte-Rubata/Pieces-rares.mp3";
import OliosuTela from "../../assets/music/Arte-Rubata/Olio-su-tela.mp3";
import Volunteers from "../../assets/music/Arte-Rubata/Volunteers.mp3";

const Orchestral = () => {
  const audioRef = useRef(null);
  return (
    <div>
      <div className={styles.OrchestralPage}>
        <p>Orchestral Symphonic</p>
        <div className={styles.LecteursContainer}>
          <AudioPlayer
            className={styles.Player}
            src={Fragile}
            title="Fragile"
            depositNumber="123456"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Fragile} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Collezione}
            title="La Collezione"
            depositNumber="123456"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={Collezione}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={DansedesVoleurs}
            title="La Danse des Voleurs"
            depositNumber="123456"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={DansedesVoleurs}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={LesLoups}
            title="Les Loups"
            depositNumber="123456"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={LesLoups} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Nascondigli}
            title="Nascondigli"
            depositNumber="123456"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={Nascondigli}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            title="Pièces Rares"
            depositNumber="123456"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={PiecesRares}
            />
          </AudioPlayer>
          <AudioPlayer
            className={styles.Player}
            src={OliosuTela}
            title="Olio su Tela"
            depositNumber="123456"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={OliosuTela}
            />
          </AudioPlayer>
          <AudioPlayer
            className={styles.Player}
            src={Volunteers}
            title="Volunteers"
            depositNumber="123456"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={Volunteers}
            />
          </AudioPlayer>
        </div>

        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default Orchestral;
