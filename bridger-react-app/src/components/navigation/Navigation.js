import React from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
// NavLink allows for navigation between different routes without needing to page reload
// activeClassName is a CSS prop that will show which navigation youre currently on
// to and exact to are path links
export default function Navigation() {
  return (
    <nav className={styles.navContainer}>
      <NavLink to="/" className={styles.NavLink}>
        About Me
      </NavLink>
      <NavLink to="/portfolio" className={styles.NavLink}>
        Portfolio
      </NavLink>
      <NavLink to="/contact" className={styles.NavLink}>
        Contact Me
      </NavLink>
      <NavLink to="/resume" className={styles.NavLink}>
        Resume
      </NavLink>
    </nav>
  );
}
