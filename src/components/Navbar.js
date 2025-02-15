import React from "react";
import { Link } from "react-router-dom";
import "../Global.css";
import styles from "./navbar.module.css"; // Décommentez cette ligne

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Chamber">Orchestral</Link>
        </li>
        <li>
          <Link to="/Orchestral">Symphonic</Link>
        </li>
        <li>
          <Link to="/Urban">Urban</Link>
        </li>
        <li>
          <Link to="/Etnic">Ethnic</Link>
        </li>
        <li>
          <Link to="/Jazz">Jazz</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
