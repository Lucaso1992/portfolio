import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
      <div className="container-fluid">
        <button
          className="navbar-dark navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleClick}
        >
          <span className="navbar-toggler-icon ms-auto"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <a
              className={`${styles.nav_items_one} nav-link`}
              href="#"
              onClick={handleItemClick}
            >
              <strong className={styles.strong_items}>Home</strong>
            </a>
            <a
              className={`${styles.nav_items} nav-link`}
              href="#portfolio"
              onClick={handleItemClick}
            >
              <strong className={styles.strong_items}>Portfolio</strong>
            </a>
            <a
              className={`${styles.nav_items} nav-link`}
              href="#"
              onClick={handleItemClick}
            >
              <strong className={styles.strong_items}>About me</strong>
            </a>
            <a
              className={`${styles.nav_items} nav-link me-4`}
              href="#"
              onClick={handleItemClick}
            >
              <strong className={styles.strong_items}>Contact</strong>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
