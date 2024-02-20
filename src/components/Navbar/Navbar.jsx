import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <img style={{
          height: "60px",
          width: "60px",
          borderRadius: "50%",
          cursor: "pointer"
        }} src="../../../assets/hero/log.png" className={styles.title} onClick={() => { window.location.href = "/"; }} />
        <div onClick={() => { window.location.href = "/"; }} style={{
          color: 'white',
          fontSize: "30px",
          marginLeft: "25px",
          cursor: "pointer"
        }}>NitianBit</div>
      </div>

      <div className={styles.menu}>

        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">Services</a>
          </li >
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul >
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div >
    </nav >
  );
};
