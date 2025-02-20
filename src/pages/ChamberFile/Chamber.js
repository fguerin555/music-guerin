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

import Alessandrino from "../../assets/music/Orchestral/Alessandrino.mp3";
import Anima from "../../assets/music/Orchestral/Anima.mp3";
import Arancione from "../../assets/music/Orchestral/Arancione.mp3";
import Azzurro from "../../assets/music/Orchestral/Azzurro.mp3";
import BambolanellaNeve from "../../assets/music/Orchestral/BambolanellaNeve.mp3";
import BlackTime from "../../assets/music/Orchestral/BlackTime.mp3";
import BronzodiRiace from "../../assets/music/Orchestral/BronzodiRiace.mp3";
import Carminio from "../../assets/music/Orchestral/Carminio.mp3";
import Giostra from "../../assets/music/Orchestral/Giostra.mp3";
import IlBarone from "../../assets/music/Orchestral/IlBarone.mp3";
import Indagine from "../../assets/music/Orchestral/Indagine.mp3";
import Mosca from "../../assets/music/Orchestral/Mosca.mp3";
import OldEagle from "../../assets/music/Orchestral/OldEagle.mp3";
import OvalRoom from "../../assets/music/Orchestral/OvalRoom.mp3";
import Requiem from "../../assets/music/Orchestral/Requiem.mp3";
import SantaAnna from "../../assets/music/Orchestral/SantaAnna.mp3";
import SottoMarini from "../../assets/music/Orchestral/SottoMarini.mp3";
import UnClown from "../../assets/music/Orchestral/UnClown.mp3";
import Viola from "../../assets/music/Orchestral/Viola.mp3";
import WhiskyBaby from "../../assets/music/Orchestral/WhiskyBaby.mp3";
import MangoTambo from "../../assets/music/Orchestral/MangoTambo.mp3";

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
          <AudioPlayer
            className={styles.Player}
            src={UnClown}
            title="Un Clown"
            depositNumber="21162053500"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={UnClown} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={IlBarone}
            title="Il Barone"
            depositNumber="20342052600"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={IlBarone} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Giostra}
            title="Giostra"
            depositNumber="20342052400"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Giostra} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Indagine}
            title="Indagine"
            depositNumber="17006025500"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Indagine} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Alessandrino}
            title="Alessandrino"
            depositNumber="20171011200"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={Alessandrino}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Arancione}
            title="Arancione"
            depositNumber="22329036200"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={Arancione}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Azzurro}
            title="Azzurro"
            depositNumber="22329036100"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Azzurro} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={BambolanellaNeve}
            title="Bambole nella Neve"
            depositNumber="20342052100"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={BambolanellaNeve}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Anima}
            title="Anima"
            depositNumber="20165036400"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Anima} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Carminio}
            title="Carminio"
            depositNumber="22325092600"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Carminio} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={SantaAnna}
            title="Sant'Anna"
            depositNumber="17006024200"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={SantaAnna}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={WhiskyBaby}
            title="Whisky Baby"
            depositNumber="23102085300"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={WhiskyBaby}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Mosca}
            title="Mosca"
            depositNumber="20342051500"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Mosca} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={SottoMarini}
            title="Sotto Marini"
            depositNumber="22369040400"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={SottoMarini}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={BronzodiRiace}
            title="Bronzi di Riace"
            depositNumber="22367002000"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={BronzodiRiace}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Requiem}
            title="Requiem"
            depositNumber="17006024400"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Requiem} />
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
            src={OvalRoom}
            title="Oval Room"
            depositNumber="23102085100"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={OvalRoom} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={BlackTime}
            title="Black Time"
            depositNumber="19164024900"
          >
            <audio
              ref={(audio) => (audioRef.current = audio)}
              src={BlackTime}
            />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={OldEagle}
            title="Old Eagle"
            depositNumber="23102084300"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={OldEagle} />
          </AudioPlayer>

          <AudioPlayer
            className={styles.Player}
            src={Viola}
            title="Viola"
            depositNumber="22329036400"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Viola} />
          </AudioPlayer>
        </div>

        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default Chamber;
