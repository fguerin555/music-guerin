import React from "react";
import { useRef } from "react";
import "../../Global.css";
import styles from "./Jazz.module.css";
import AudioPlayer from "../../components/AudioPlayer";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import BeforeFooter from "../../components/BeforeFooter";
import DontCryJanet from "../../assets/music/Jazz/Don'tCryJanet.mp3";
import Faraway from "../../assets/music/Jazz/Faraway.mp3";
import JuanlesPins from "../../assets/music/Jazz/JuanlesPins.mp3";
import MuseoInfinito1 from "../../assets/music/Jazz/MuseoInfinito1.mp3";
import MuseoInfinito2 from "../../assets/music/Jazz/MuseoInfinito2.mp3";

import LaFrecciaAzzura from "../../assets/music/Jazz/LaFrecciaAzzura.mp3";
import BehindtheDoor from "../../assets/music/Jazz/BehindtheDoor.mp3";
import WhiteNight from "../../assets/music/Jazz/WhiteNight.mp3";
import Auroville from "../../assets/music/Jazz/Auroville.mp3";
import IrishWind from "../../assets/music/Jazz/IrishWind.mp3";
import Alambra from "../../assets/music/Jazz/Alambra.mp3";

const Jazz = () => {
  const audioRef = useRef(null);
  return (
    <div>
      <div className={styles.JazzPage}>
        <p>Jazz/Ethnic</p>

        <div className={styles.LecteursContainer}>
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
            src={MuseoInfinito1}
            title="Museo Infinito Uno"
            depositNumber="251090777"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={MuseoInfinito1}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={MuseoInfinito2}
            title="Museo Infinito Due"
            depositNumber="251090785"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={MuseoInfinito2}
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
            depositNumber="22367001400"
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
            depositNumber="22367001700"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={Auroville}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Alambra}
            title="Alambra"
            depositNumber="251100626"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Alambra} />
          </AudioPlayer>
        </div>
        <BeforeFooter />
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default Jazz;
