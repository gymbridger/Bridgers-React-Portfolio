import React from "react";
import styles from "./AboutMe.module.css";
import ProfileImage from "../../assets/images/ProfileImage.jpg";

export default function AboutMe() {
  return (
    <div className={styles.aboutMeContainer}>
      <h1 className={styles.aboutMeHeader}>About Me</h1>
      <img className={styles.aboutMeImage} src={ProfileImage} alt="profile" />
      <p className={styles.aboutMeText}>
        I am a passionate coder with a diverse skill set encompassing both
        front-end and back-end development. Proficient in modern web
        technologies such as HTML, CSS, JavaScript, React, and Node.js, I thrive
        on creating efficient and user-friendly digital solutions. My
        collaborative nature and commitment to growth drive my success in team
        settings. Currently pursuing a degree in psychology while actively
        participating in a full-stack coding boot camp, I embrace challenges
        with unwavering enthusiasm. I aspire to contribute my technical
        expertise and collaborative spirit to innovative development endeavors.
      </p>
    </div>
  );
}
