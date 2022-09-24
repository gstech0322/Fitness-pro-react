import React from "react";
import cn from "classnames";
import styles from "./Advantages.module.sass";
import ScrollParallax from "../ScrollParallax";

const items = [
  {
    title: "Intuitive and clean design",
    image: "/images/content/hand-grip-circle.png",
    image2x: "/images/content/hand-grip-circle@2x.png",
  },
  {
    title: "Track your progress easily",
    image: "/images/content/gloves-circle.png",
    image2x: "/images/content/gloves-circle@2x.png",
  },
  {
    title: "Syncs with Apple Health",
    image: "/images/content/bottle-circle.png",
    image2x: "/images/content/bottle-circle@2x.png",
  },
];

const Advantages = () => {
  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={cn("h2", styles.title)}>
            For any space, at any pace
          </div>
          <div className={styles.info}>
            From the comfort of your living room to a hotel room across the
            globe, we put the best classes at your fingertips. No WiFi? Download
            videos offline for a practice that moves with you.
          </div>
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div className={styles.preview}>
                <img srcSet={`${x.image2x} 2x`} src={x.image} alt="Equipment" />
              </div>
              <div className={styles.subtitle}>{x.title}</div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
