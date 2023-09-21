import React from "react";
import styles from "./Resume.module.css";
import myResume from "../../assets/images/myResume.pdf";

export default function Resume() {
  return (
    <div className={styles.resumeContainer}>
      <h1 className={styles.resumeHeader}>Resume</h1>
      <p className={styles.resumeLink}>
        Click to download{" "}
        <a href={myResume} target="_blank" rel="noopener noreferrer">
          <em>My Resume</em>
        </a>
      </p>
      <section className={styles.resumeSections}>
        <h2 className={styles.resumeSubHeader}>Front-End Proficiencies</h2>
        <ul className={styles.resumeUl}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Jquery</li>
          <li>Responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </section>
      <section className={styles.resumeSections}>
        <h2 className={styles.resumeSubHeader}>Back-End Proficiencies</h2>
        <ul className={styles.resumeUl}>
          <li>API's</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>Rest</li>
          <li>GraphQL</li>
        </ul>
      </section>
    </div>
  );
}
