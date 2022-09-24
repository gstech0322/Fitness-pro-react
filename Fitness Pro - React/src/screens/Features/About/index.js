import React from "react";
import cn from "classnames";
import styles from "./About.module.sass";
import Image from "../../../components/Image";
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
    <div className={cn("section", styles.book)}>
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
                srcSet="/images/content/about-pic-1@2x.png 2x"
                src="/images/content/about-pic-1.png"
                alt="About pic"
              />
              <div>
                <ScrollParallax className={styles.preview} animateIn="fadeInUp">
                  <Image
                    srcSet="/images/content/racket@2x.png 2x"
                    srcSetDark="/images/content/racket-dark@2x.png 2x"
                    src="/images/content/racket.png"
                    srcDark="/images/content/racket-dark.png"
                    alt="Rocket"
                  />
                </ScrollParallax>
                <ScrollParallax className={styles.preview} animateIn="fadeInUp">
                  <img
                    srcSet="/images/content/ball-red@2x.png 2x"
                    src="/images/content/ball-red.png"
                    alt="Ball"
                  />
                </ScrollParallax>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
