import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, We are nitianbits</h1>
        <p className={styles.description}>
          Pioneeringg innovation int tech solutions. From sleek mobile apps to robust web 
          platforms, we craft digital experience that redefine excellence. Join us on our
          journey to transform ideas into reality.
        </p>
        <a href="mailto:nitianbit@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hacker.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
