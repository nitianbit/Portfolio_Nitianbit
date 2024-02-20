import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about" >
      <h2 className={styles.title}>Services</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <div style={{
          overflowY: 'scroll',
          maxHeight: "500px",
          // scrollbarColor: '#5fbcff',
          // WebkitScrollbarTrack: {
          //   background: '#f1f1f1'
          // },
          // WebkitScrollbarThumb: {
          //   background: '#5fbcff'
          // }
          scrollbarWidth: 'thin',
          scrollbarColor: '#5fbcff ',
          WebkitOverflowScrolling: 'touch',
          '&::-webkit-scrollbar': {
            width: '12px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#5fbcff',
            borderRadius: '20px',
          },
        }}>
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
              <div className={styles.aboutItemText}>
                <h3>Web Development</h3>
                <p style={{
                  fontWeight: '0px'
                }}>
                  We create stunning, responsive websites that captivate audiences and drive business growth.
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
              <div className={styles.aboutItemText}>
                <h3>App Development</h3>
                <p>
                  Unlock the full potential of your business with our  App development services.
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
              <div className={styles.aboutItemText}>
                <h3>Hybrid App Development</h3>
                <p>
                  Apps that works on Android and IOS Device.
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
              <div className={styles.aboutItemText}>
                <h3>AWS</h3>
                <p>
                  Transforming businesses with scalable cloud solutions, revolutionizing infrastructure for sustainable growth
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
              <div className={styles.aboutItemText}>
                <h3>Frontend Development</h3>
                <p>
                  Crafting intuitive interfaces for seamless user experiences
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
              <div className={styles.aboutItemText}>
                <h3>Backend Development</h3>
                <p>
                  Powering applications with scalable, efficient server-side solutions
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
