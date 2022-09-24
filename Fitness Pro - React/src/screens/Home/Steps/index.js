import React from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Download",
    color: "#3772FF",
    images: "/images/content/download.svg",
    content:
      "Fitness Pro tracks your workouts, get better results, and be the best version of you.",
  },
  {
    title: "Choose your trainner",
    color: "#9757D7",
    images: "/images/content/whistle.svg",
    content:
      "Fitness Pro tracks your workouts, get better results, and be the best version of you.",
  },
  {
    title: "Set the goals",
    color: "#EF466F",
    images: "/images/content/medal.svg",
    content:
      "Fitness Pro tracks your workouts, get better results, and be the best version of you.",
  },
  {
    title: "Workout time",
    color: "#45B26B",
    images: "/images/content/stopwatch.svg",
    content:
      "Fitness Pro tracks your workouts, get better results, and be the best version of you.",
  },
];

const Steps = ({ scrollToRef }) => {
  return (
    <div className={cn("section", styles.section)} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>How it works</h2>
          <div className={styles.info}>
            Stacks is a production-ready library of stackable content blocks
            built in React Native.
          </div>
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div
                className={styles.preview}
                style={{ backgroundColor: x.color }}
              >
                <img src={x.images} alt={`Step ${index}`} />
              </div>
              <div className={styles.number}>Step {index + 1}</div>
              <div className={styles.subtitle}>{x.title}</div>
              <div className={styles.content}>{x.content}</div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
