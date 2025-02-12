// BackButton.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./BackButton.module.css";

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button className={Styles["back-button"]} onClick={handleClick}>
      X
    </button>
  );
};
export default BackButton;
