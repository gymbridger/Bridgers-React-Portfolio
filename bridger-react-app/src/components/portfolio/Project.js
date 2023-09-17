import React from "react";
import styles from "./Project.module.css";
import githubImage from "../../assets/images/githubImage.png";

export default function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className={styles.project}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.projectImage} />
        <div className={styles.overlay}>
          <div className={styles.projectDetails}>
            <a
              href={deployedLink}
              className={styles.titleLink}
              target="_blank"
              rel="noreferrer"
            >
              {title}
            </a>
            <a
              href={githubLink}
              className={styles.githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={githubImage}
                alt="GitHub"
                className={styles.githubImage}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
