import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import styles from "./BackButton.module.css";

const BackButton = () => {
  const navigate = useNavigate();

  const closeWindow = () => {
    navigate(-1);
  };

  return (
    <button className={styles["close-button"]} onClick={closeWindow}>
      <FaTimes />
    </button>
  );
};

export default BackButton;
