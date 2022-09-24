import React from "react";
import cn from "classnames";
import styles from "./About.module.sass";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Intuitive and clean design",
    content:
      "Track your workouts, get better results, and be the best version of you.",
    color: "#9757D7",
  },
  {
    title: "An exercise in simplicity",
    content:
      "Track your workouts, get better results, and be the best version of you.",
    color: "#EF466F",
  },
  {
    title: "The most popular workouts",
    content:
      "Track your workouts, get better results, and be the best version of you.",
    color: "#45B26B",
  },
];

const About = () => {
  return (
    <div className={cn("section-border-top", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={cn("stage", styles.stage)}>fitness pro</div>
          </div>
          <div className={styles.col}>
            <h2 className={cn("h2", styles.title)}>
              Simple, powerful, <br></br>easy-to-use
            </h2>
            <div className={styles.info}>
              Track your workouts, get better results, and be the best version
              of you. Less thinking, more lifting.
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.list}>
              {items.map((x, index) => (
                <ScrollParallax className={styles.item} key={index}>
                  <div
                    className={styles.number}
                    style={{ backgroundColor: x.color }}
                  >
                    0{index + 1}
                  </div>
                  <div className={styles.subtitle}>{x.title}</div>
                  <div className={styles.content}>{x.content}</div>
                </ScrollParallax>
              ))}
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.bg}>
              <img
                srcSet="/images/content/about-pic@2x.png 2x"
                src="/images/content/about-pic.png"
                alt="About pic"
              />
              <ScrollParallax className={styles.preview} animateIn="fadeInUp">
                <img
                  srcSet="/images/content/plate@2x.png 2x"
                  src="/images/content/plate.png"
                  alt="Plate"
                />
              </ScrollParallax>
              <button className={cn("play", styles.play)}>
                <Icon name="play" size="21" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
