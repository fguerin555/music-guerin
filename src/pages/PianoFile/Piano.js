import React from "react";
import { useRef } from "react";
import "../../Global.css";
import styles from "./Piano.module.css";
import AudioPlayer from "../../components/AudioPlayer";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import BeforeFooter from "../../components/BeforeFooter";

import Animapianosolo from "../../assets/music/Piano/Animapianosolo.mp3";
import Ricordi from "../../assets/music/Piano/Ricordi.mp3";
import FilastrocadAutunno from "../../assets/music/Piano/FilastrocadAutunno.mp3";
import Giocattolo from "../../assets/music/Piano/Giocattolo.mp3";
import Inchiostro from "../../assets/music/Piano/Inchiostro.mp3";
import CeraunaVolta from "../../assets/music/Piano/CeraunaVolta.mp3";
const Piano = () => {
  const audioRef = useRef(null);
  return (
    <div>
      <div className={styles.PianoPage}>
        <p>Piano</p>

        <div className={styles.LecteursContainer}>
          <AudioPlayer
            className={styles.Player}
            src={Ricordi}
            title="Ricordi"
            depositNumber="17016049100"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Ricordi} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Animapianosolo}
            title="Anima Piano Solo"
            depositNumber="20165038100"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={Animapianosolo}
            />
          </AudioPlayer>
          <AudioPlayer
            className={styles.Player}
            src={FilastrocadAutunno}
            title="Filastroca d'Autumno"
            depositNumber="20342051100"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={FilastrocadAutunno}
            />
          </AudioPlayer>
          <AudioPlayer
            className={styles.Player}
            src={Giocattolo}
            title="Giocattolo"
            depositNumber="20342051800"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={Giocattolo}
            />
          </AudioPlayer>
          <AudioPlayer
            className={styles.Player}
            src={Inchiostro}
            title="Inchiostro"
            depositNumber="20168047800"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={Inchiostro}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={CeraunaVolta}
            title="C'Era una Volta"
            depositNumber="20342052000"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={CeraunaVolta}
            />
          </AudioPlayer>
        </div>
        <BeforeFooter />
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default Piano;
