import React from "react";
import Project from "./Project";
import portfolio1 from "../../assets/images/portfolio1.jpg";
import portfolio2 from "../../assets/images/portfolio2.jpg";
import portfolio3 from "../../assets/images/portfolio3.jpg";
import portfolio4 from "../../assets/images/portfolio4.jpg";
import portfolio5 from "../../assets/images/portfolio5.jpg";
import portfolio6 from "../../assets/images/portfolio6.jpg";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  const projectData = [
    {
      title: "CSS-portfolio",
      image: portfolio1,
      deployedLink:
        "https://gymbridger.github.io/Advanced-CSS-Portfolio-Module-2-Challenge/",
      githubLink:
        "https://github.com/gymbridger/Advanced-CSS-Portfolio-Module-2-Challenge",
    },
    {
      title: "Social-Network-API",
      image: portfolio2,
      githubLink: "https://github.com/gymbridger/Bridgers-Social-Network-API",
    },
    {
      title: "AgendaX",
      image: portfolio3,
      githubLink: "https://github.com/gymbridger/AgendaX",
    },
    {
      title: "E-Commerce-Back-End",
      image: portfolio4,
      githubLink: "https://github.com/gymbridger/Bridgers-E-Commerce-Back-End",
    },
    {
      title: "Employee-Tracker",
      image: portfolio5,
      githubLink: "https://github.com/gymbridger/Bridgers-Employee-Tracker",
    },
    {
      title: "Note Taker",
      image: portfolio6,
      githubLink: "https://github.com/gymbridger/Bridgers-Note-Taker",
    },
  ];
  return (
    <div>
      <div className={styles.headerDiv}>
        <h1>Portfolio</h1>
      </div>
      <div className={styles.portfolioContainer}>
        {projectData.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}
