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
import AnnidiPiombo from "../../assets/music/Bologna/AnnidiPiombo.mp3";
import Avanti from "../../assets/music/Bologna/Avanti.mp3";
import PiccheeCuori from "../../assets/music/Bologna/PiccheeCuori.mp3";
import StrategiadellaTensione from "../../assets/music/Bologna/StrategiadellaTensione.mp3";
import Arman from "../../assets/music/Bologna/Arman.mp3";
import DieuetmonRoi from "../../assets/music/Symphonic/DieuetmonRoi.mp3";
import EnglandWind from "../../assets/music/Symphonic/EnglandWind.mp3";
import GunsandRoses from "../../assets/music/Symphonic/GunsandRoses.mp3";
import PlumbandGold from "../../assets/music/Symphonic/PlumbandGold.mp3";

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
            depositNumber="18123026100"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Fragile} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Collezione}
            title="La Collezione"
            depositNumber="18123025600"
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
            depositNumber="18123025200"
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
            depositNumber="18123024700"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={LesLoups} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Nascondigli}
            title="Nascondigli"
            depositNumber="18123027600"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={Nascondigli}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={PiecesRares}
            title="Pièces Rares"
            depositNumber="18123024000"
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
            depositNumber="18123024400"
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
            depositNumber="18123027900"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={Volunteers}
            />
          </AudioPlayer>
          <AudioPlayer
            className={styles.Player}
            src={StrategiadellaTensione}
            title="Strategia della Tensione"
            depositNumber="17006025600"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={StrategiadellaTensione}
            />
          </AudioPlayer>
          <AudioPlayer
            className={styles.Player}
            src={PiccheeCuori}
            title="Picche e Cuori"
            depositNumber="17006024900"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={PiccheeCuori}
            />
          </AudioPlayer>
          <AudioPlayer
            className={styles.Player}
            src={Avanti}
            title="Avanti"
            depositNumber="17006024700"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Avanti} />
          </AudioPlayer>
          <AudioPlayer
            className={styles.Player}
            src={AnnidiPiombo}
            title="Anni di Piombo"
            depositNumber="17006024800"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={AnnidiPiombo}
            />
          </AudioPlayer>
          <AudioPlayer
            className={styles.Player}
            src={Arman}
            title="Arman"
            depositNumber="18123026600"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Arman} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={DieuetmonRoi}
            title="Dieu et mon Roi"
            depositNumber="18"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={DieuetmonRoi}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={EnglandWind}
            title="England's Wind"
            depositNumber="18"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={EnglandWind}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={GunsandRoses}
            title="Guns and Roses"
            depositNumber="18"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={GunsandRoses}
            />
          </AudioPlayer>
          <AudioPlayer
            className={styles.Player}
            src={PlumbandGold}
            title="Plumb and Gold"
            depositNumber="18"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={PlumbandGold}
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
