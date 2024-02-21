import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title} style={{
          fontFamily: "Raleway, sans-serif",
          lineHeight: "1.25"
        }}>Tailoring solutions for your success</h1>
        <p style={{
          fontFamily: "Raleway, sans-serif",
          lineHeight: "1.25"
        }} className={styles.description}>
          We tailor seamless solutions to your vision, surpassing your business goals with precision and expertise.
        </p>
        
        <a href="#about" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
          Let's get started
        </a>
      </div>
      <img
        src={getImageUrl("hero/hacker.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section >
  );
};
