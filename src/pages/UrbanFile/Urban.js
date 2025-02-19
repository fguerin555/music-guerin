import React from "react";
import { useRef } from "react";
import "../../Global.css";
import styles from "./Urban.module.css";
import AudioPlayer from "../../components/AudioPlayer";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

import Latetaki from "../../assets/music/Urban/Latetaki.mp3";
import AutumnRapSoda from "../../assets/music/Urban/AutumnRapSoda.mp3";
import BosforeCafé from "../../assets/music/Urban/BosforeCafé.mp3";
import BreakingBars from "../../assets/music/Urban/BreakingBars.mp3";
import ByNight from "../../assets/music/Urban/ByNight.mp3";
import Chains from "../../assets/music/Urban/Chains.mp3";
import Corridor from "../../assets/music/Urban/Corridor.mp3";
import Flowers from "../../assets/music/Urban/Flowers.mp3";
import InsaneforYou from "../../assets/music/Urban/InsaneforYou.mp3";
import LEsprit from "../../assets/music/Urban/LEsprit.mp3";
import LittleWindows from "../../assets/music/Urban/LittleWindows.mp3";
import LostGarden from "../../assets/music/Urban/LostGarden.mp3";
import MorninginMilan from "../../assets/music/Urban/MorninginMilan.mp3";
import NYorElseWhere from "../../assets/music/Urban/NYorElseWhere.mp3";
import Rainbow from "../../assets/music/Urban/Rainbow.mp3";
import Rumenba from "../../assets/music/Urban/Rumenba.mp3";
import Sick from "../../assets/music/Urban/Sick.mp3";
import Skyless from "../../assets/music/Urban/Skyless.mp3";
import TheKeys from "../../assets/music/Urban/TheKeys.mp3";
import Trocadero from "../../assets/music/Urban/Trocadero.mp3";
import Walls from "../../assets/music/Urban/Walls.mp3";
import PrincipessaMargherita from "../../assets/music/Urban/PrincipessaMargherita.mp3";
import WindRewind from "../../assets/music/Urban/WindRewind.mp3";

const Urban = () => {
  const audioRef = useRef(null);
  return (
    <div>
      <div className={styles.UrbanPage}>
        <p>Rock/Urban </p>
        <div className={styles.LecteursContainer}>
          <AudioPlayer
            className={styles.Player}
            src={BreakingBars}
            title="Breaking Bars"
            depositNumber="17"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={BreakingBars}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Chains}
            title="Chains"
            depositNumber="17"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Chains} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={LittleWindows}
            title="Little Windows"
            depositNumber="17"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={LittleWindows}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Corridor}
            title="Corridor"
            depositNumber="17"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Corridor} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={InsaneforYou}
            title="Insane for You"
            depositNumber="17"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={InsaneforYou}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={LostGarden}
            title="Lost Garden"
            depositNumber="17"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={LostGarden}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Sick}
            title="Sick"
            depositNumber="17"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Sick} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Skyless}
            title="Skyless"
            depositNumber="17"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Skyless} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={TheKeys}
            title="The Keys"
            depositNumber="17"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={TheKeys} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Walls}
            title="Walls"
            depositNumber="17"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Walls} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Flowers}
            title="Flowers"
            depositNumber="17"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Flowers} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={NYorElseWhere}
            title="NY or Elsewhere"
            depositNumber="17"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={NYorElseWhere}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={MorninginMilan}
            title="Morning in Milan"
            depositNumber="17"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={MorninginMilan}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Rainbow}
            title="Rainbow"
            depositNumber="17"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Rainbow} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={LEsprit}
            title="L'Esprit"
            depositNumber="17"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={LEsprit} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={AutumnRapSoda}
            title="Automn Rap Soda"
            depositNumber="17"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={AutumnRapSoda}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={ByNight}
            title="By Night"
            depositNumber="17"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={ByNight} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={PrincipessaMargherita}
            title="Principessa Margherita"
            depositNumber="251090797"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={PrincipessaMargherita}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={BosforeCafé}
            title="Bosfore Café"
            depositNumber="17"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={BosforeCafé}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Latetaki}
            title="Latetaki"
            depositNumber="251090796"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Latetaki} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Rumenba}
            title="Rumenba"
            depositNumber=""
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Rumenba} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={WindRewind}
            title="Wind Rewind"
            depositNumber="251090795"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={WindRewind}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Trocadero}
            title="Trocadero"
            depositNumber="17"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={Trocadero}
            />
          </AudioPlayer>
        </div>

        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default Urban;
