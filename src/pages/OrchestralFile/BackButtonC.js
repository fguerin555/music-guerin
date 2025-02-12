// BackButtonC.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./BackButtonC.module.css";

const BackButtonC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button className={Styles["back-buttonC"]} onClick={handleClick}>
      X
    </button>
  );
};
export default BackButtonC;
