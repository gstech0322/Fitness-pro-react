import React from "react";
import cn from "classnames";
import styles from "./Quality.module.sass";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Happy Users",
    counter: "1m",
    images: "/images/content/user-green.svg",
    alt: "user",
    content:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
  {
    title: "Downloads",
    counter: "1.2m",
    images: "/images/content/electrical-plug.svg",
    alt: "electrical-plus",
    content:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
  {
    title: "Countries",
    counter: "50+",
    images: "/images/content/flag.svg",
    alt: "flag",
    content:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
  {
    title: "Likes on Facebook",
    counter: "900k+",
    images: "/images/content/facebook.svg",
    alt: "facebook",
    content:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
];

const Quality = () => {
  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div className={styles.preview}>
                <img src={x.images} alt={x.alt} />
              </div>
              <div className={styles.counter}>{x.counter}</div>
              <div className={styles.title}>{x.title}</div>
              <div className={styles.content}>{x.content}</div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quality;
