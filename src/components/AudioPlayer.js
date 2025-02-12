import { useRef, useState, useEffect } from "react";
import styles from "./AudioPlayer.module.css";

function AudioPlayer({ src, title, artist, depositNumber }) {
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
    <div className={styles["audio-player"]}>
      <h3>
        {title} - {artist}
      </h3>
      <p>
        <strong>Num. SIAE :</strong> {depositNumber}
      </p>

      <audio ref={audioRef} src={src}></audio>

      {/* Barre de progression */}
      <div className="progress-container">
        <input
          type="range"
          className="progress-bar"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
        />
        <div>
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>

      {/* Boutons de contrôle */}
      <div className="audio-controls">
        <button onClick={handlePlay} disabled={isPlaying}>
          ▶
        </button>
        <button onClick={handlePause} disabled={!isPlaying}>
          ⏸
        </button>
        <button onClick={handleStop}>⏹</button>
        <button onClick={handleRewind}>⏪</button>
        <button onClick={handleForward}>⏩</button>
      </div>

      {/* Contrôle du volume */}
      <div className="volume-container">
        <label>🔊</label>
        <input
          type="range"
          className="volume-slider"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}

export default AudioPlayer;
