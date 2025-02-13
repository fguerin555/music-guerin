import { useRef, useState, useEffect } from "react";
import styles from "./AudioPlayer.module.css";
import "./../Global.css";

function AudioPlayer({ src, title, depositNumber, artist }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;
    const updateTime = () => setCurrentTime(audio.currentTime);
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const handleForward = () => {
    audioRef.current.currentTime += 10;
  };

  const handleRewind = () => {
    audioRef.current.currentTime -= 10;
  };

  const handleSeek = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className={styles.Player}>
      <div className={styles.AudioPlayer}>
        <h3>{title}</h3>

        <h4>Num.SIAE : {depositNumber}</h4>

        <audio ref={audioRef} src={src}></audio>

        {/* Barre de progression */}
        <div className={styles.ProgressContainer}>
          <input
            type="range"
            className={styles.ProgressBar}
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
          />

          <div
            className={styles.Progress}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h5>© Frédéric Guérin</h5>
            <span>
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          {/* Boutons de contrôle */}
          <div className={styles.AudioControls}>
            <button
              className={styles.Play}
              onClick={handlePlay}
              disabled={isPlaying}
            >
              <i className="fas fa-play"></i>
            </button>
            <button
              className={styles.Pause}
              onClick={handlePause}
              disabled={!isPlaying}
            >
              <i className="fas fa-pause"></i>
            </button>
            <button className={styles.Stop} onClick={handleStop}>
              <i className="fas fa-stop"></i>
            </button>
            <button className={styles.Rewind} onClick={handleRewind}>
              <i className="fas fa-fast-backward"></i>
            </button>
            <button className={styles.Forward} onClick={handleForward}>
              <i className="fas fa-fast-forward"></i>
            </button>
          </div>

          {/* Contrôle du volume */}
          <div className={styles.VolumeContainer}>
            <label>🔊</label>
            <input
              className={styles.VolumeSlider}
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
