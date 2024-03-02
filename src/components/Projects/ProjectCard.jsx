import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>
      {description.slice(0,100)}{description.length > 100 ? "..." : ""}
      </p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            
            <li key={id} className="h-10 block py-2 px-4 flex items-center justify-center text-white font-medium  rounded-lg shadow-lg hover:shadow-none"
          style={{
            border: "1px solid white",
            backgroundColor: "rgba(25, 55, 109, 0.2)"
          }}
        >
          {skill}
        </li>
          );
        })}
      </ul>
      <div className="mt-5">
        <a href={demo} className="block py-2 px-4 text-center text-white font-medium  duration-150  active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none hover:bg-blue-900 bg-blue-800"
          style={{
            border: "1px solid white",
          }}
        >
          Demo
        </a>
        
        {/* <a href={source} className={styles.link}>
          Source
        </a> */}
      </div>
    </div>
  );
};
