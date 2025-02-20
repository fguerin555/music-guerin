import React from "react";
import { useRef } from "react";
import "../../Global.css";
import styles from "./West.module.css";
import AudioPlayer from "../../components/AudioPlayer";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

import AdiosAmigos from "../../assets/music/WestSpaghetti/AdiosAmigos.mp3";
import Caravans from "../../assets/music/WestSpaghetti/Caravans.mp3";
import GoodTimeBadTime from "../../assets/music/WestSpaghetti/GoodTimeBadTime.mp3";
import GoWest from "../../assets/music/WestSpaghetti/GoWest.mp3";
import InTown from "../../assets/music/WestSpaghetti/InTown.mp3";
import PampaSunrise from "../../assets/music/WestSpaghetti/PampaSunrise.mp3";
import RioGrande from "../../assets/music/WestSpaghetti/RioGrande.mp3";
import Sombreros from "../../assets/music/WestSpaghetti/Sombreros.mp3";
import TheCavalry from "../../assets/music/WestSpaghetti/TheCavalry.mp3";
import TheRider from "../../assets/music/WestSpaghetti/TheRider.mp3";

const West = () => {
  const audioRef = useRef(null);
  return (
    <div>
      <div className={styles.WestPage}>
        <p>Western Spaghetti </p>
        <div className={styles.LecteursContainer}>
          <AudioPlayer
            className={styles.Player}
            src={GoWest}
            title="Go West"
            depositNumber="20329071800"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={GoWest} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={AdiosAmigos}
            title="Adios Amigos"
            depositNumber="20329075200"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={AdiosAmigos}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={InTown}
            title="In Town"
            depositNumber="20329072600"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={InTown} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={TheRider}
            title="The Rider"
            depositNumber="20329074100"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={TheRider} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={TheCavalry}
            title="The Cavalry"
            depositNumber="20329074700"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={TheCavalry}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Sombreros}
            title="Sombreros"
            depositNumber="20329074900"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={Sombreros}
            />
          </AudioPlayer>
          <AudioPlayer
            className={styles.Player}
            src={Caravans}
            title="Caravans"
            depositNumber="20329073900"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Caravans} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={RioGrande}
            title="Rio Grande"
            depositNumber="20329073500"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={RioGrande}
            />
          </AudioPlayer>
          <AudioPlayer
            className={styles.Player}
            src={GoodTimeBadTime}
            title="Good Time Bad Time"
            depositNumber="20329073000"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={GoodTimeBadTime}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={PampaSunrise}
            title="Pampa Sunrise"
            depositNumber="20329072200"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={PampaSunrise}
            />
          </AudioPlayer>
        </div>

        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default West;
