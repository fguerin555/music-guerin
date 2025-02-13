import React from "react";
import { useRef } from "react";
import "../../Global.css";
import styles from "./Jazz.module.css";
import AudioPlayer from "../../components/AudioPlayer";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import DontCryJanet from "../../assets/musicJazz/Don'tCryJanet.mp3";
import Faraway from "../../assets/musicJazz/Faraway.mp3";
import JuanlesPins from "../../assets/musicJazz/JuanlesPins.mp3";
import MangoTambo from "../../assets/musicJazz/MangoTambo.mp3";
import LaFrecciaAzzura from "../../assets/musicJazz/LaFrecciaAzzura.mp3";

const Jazz = () => {
  const audioRef = useRef(null);
  return (
    <div>
      <div className={styles.JazzPage}>
        <p>Jazz Ambiance</p>

        <ScrollToTop />
        <BackButton />
        <div className={styles.LecteursContainer}>
          <AudioPlayer
            className={styles.Player}
            src={DontCryJanet}
            title="Don't Cry Janet"
            depositNumber="123456"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={DontCryJanet}
            />
          </AudioPlayer>
          <AudioPlayer
            className={styles.Player}
            src={Faraway}
            title="Faraway"
            depositNumber="123456"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Faraway} />
          </AudioPlayer>
          <AudioPlayer
            className={styles.Player}
            src={JuanlesPins}
            title="Juan les Pins"
            depositNumber="123456"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={JuanlesPins}
            />
          </AudioPlayer>
          <AudioPlayer
            className={styles.Player}
            src={MangoTambo}
            title="Mango Tambo"
            depositNumber="123456"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={MangoTambo}
            />
          </AudioPlayer>
          <AudioPlayer
            className={styles.Player}
            src={LaFrecciaAzzura}
            title="La Freccia Azzura"
            depositNumber="123456"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={LaFrecciaAzzura}
            />
          </AudioPlayer>
        </div>
      </div>
    </div>
  );
};

export default Jazz;
