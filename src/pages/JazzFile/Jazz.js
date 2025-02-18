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
import BehindtheDoor from "../../assets/musicJazz/BehindtheDoor.mp3";
import WhiteNight from "../../assets/musicJazz/WhiteNight.mp3";
import Auroville from "../../assets/musicJazz/Auroville.mp3";
import IrishWind from "../../assets/musicJazz/IrishWind.mp3";

const Jazz = () => {
  const audioRef = useRef(null);
  return (
    <div>
      <div className={styles.JazzPage}>
        <p>Jazz Ambiance</p>

        <div className={styles.LecteursContainer}>
          <AudioPlayer
            className={styles.Player}
            src={DontCryJanet}
            title="Don't Cry Janet"
            depositNumber="18123032900"
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
            depositNumber="20329071500"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Faraway} />
          </AudioPlayer>
          <AudioPlayer
            className={styles.Player}
            src={JuanlesPins}
            title="Juan les Pins"
            depositNumber="18123033000"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={JuanlesPins}
            />
          </AudioPlayer>
          <AudioPlayer
            className={styles.Player}
            src={BehindtheDoor}
            title="Behind the Door"
            depositNumber="18150059300"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={BehindtheDoor}
            />
          </AudioPlayer>
          <AudioPlayer
            className={styles.Player}
            src={WhiteNight}
            title="White Night"
            depositNumber="23102082900"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={WhiteNight}
            />
          </AudioPlayer>
          <AudioPlayer
            className={styles.Player}
            src={MangoTambo}
            title="Mango Tambo"
            depositNumber="20345001400"
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
            depositNumber="20342051300"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={LaFrecciaAzzura}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={IrishWind}
            title="Irish'Wind"
            depositNumber="20"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={IrishWind}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Auroville}
            title="Auroville"
            depositNumber="20"
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

export default Jazz;
