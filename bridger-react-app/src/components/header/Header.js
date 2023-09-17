import React from "react";
import Navigation from "../navigation/Navigation";
import styles from "./Header.module.css";
import headerBackground from "../../assets/images/headerBackground.jpg";

export default function Header() {
  return (
    <div
      className={styles.headerContainer}
      style={{ backgroundImage: `url(${headerBackground})` }}
    >
      <h1 className={styles.name}>Bridger</h1>
      <Navigation />
    </div>
  );
}
