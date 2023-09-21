import React from "react";
import styles from "./Footer.module.css";
import githubImage from "../../assets/images/githubImage.png";
import linkedinFooter from "../../assets/images/linkedinFooter.png";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <a
        href="https://github.com/gymbridger"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.imageLink}
      >
        <img src={githubImage} alt="GitHub"></img>
      </a>
      <a
        href="https://www.linkedin.com/in/bridger-daw-66035b271/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.imageLink}
      >
        <img
          src={linkedinFooter}
          alt="LinkedIn"
          className={styles.footerImages}
        ></img>
      </a>
    </div>
  );
}
