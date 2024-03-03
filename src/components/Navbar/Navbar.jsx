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
          className={`${styles.menuItems} `}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#description">About</a>
          </li>
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

        </ul>
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
      </div>
      {
        menuOpen && <div className="">
        <ul
          className={`absolute right-8 bg-white text-black font-bold py-6 px-4 rounded-lg text-2xl space-y-2 shadow-lg`}
        >
          <li className="hover:bg-gray-200 px-5 rounded-lg py-1">
            <a href="#description">About</a>
          </li>
          <li className="hover:bg-gray-200 px-5 rounded-lg py-1">
            <a href="#about">Services</a>
          </li >
          <li className="hover:bg-gray-200 px-5 rounded-lg py-1">
            <a href="#experience">Experience</a>
          </li>
          <li className="hover:bg-gray-200 px-5 rounded-lg py-1">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:bg-gray-200 px-5 rounded-lg py-1">
            <a href="#contact">Contact</a>
          </li>

        </ul>
      </div>
      }
    </nav>
  );
};

