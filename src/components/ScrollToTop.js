import React from "react";

import { FaArrowUp } from "react-icons/fa";
import styles from "./ScrollToTop.module.css";

const ScrollToTop = () => {
  return (
    <button
      className={styles["scroll-to-top"]}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
