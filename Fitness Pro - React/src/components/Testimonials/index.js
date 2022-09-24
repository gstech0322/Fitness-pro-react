import React, { useState } from "react";
import cn from "classnames";
import styles from "./Trainer.module.sass";
import Item from "./Item";

const items = [
  {
    name: "Jazmin Grady",
    type: "Personal Trainer",
    avatar: "/images/content/avatar-5.png",
    review: [
      {
        author: "Megane Schumm",
        description: "Legacy Data Coordinator",
        logo: "/images/content/goldlines.svg",
        image: "/images/content/trainer-pic.png",
        image2x: "/images/content/trainer-pic@2x.png",
        comment:
          "Fitness Pro is the greatest fitness app. It's clear the makers behind this thing use it every week, because it is so perfect.",
      },
    ],
  },
  {
    name: "Kaylah Botsford",
    type: "Personal Trainer",
    avatar: "/images/content/avatar-1.png",
    review: [
      {
        author: "Megane Schumm",
        description: "Legacy Data Coordinator",
        logo: "/images/content/velocity9.svg",
        image: "/images/content/trainer-pic.png",
        image2x: "/images/content/trainer-pic@2x.png",
        comment:
          "Fitness Pro is the greatest fitness app. ",
      },
    ],
  },
  {
    name: "Reinhold Ullrich",
    type: "Personal Trainer",
    avatar: "/images/content/avatar-2.png",
    review: [
      {
        author: "Megane Schumm",
        description: "Legacy Data Coordinator",
        logo: "/images/content/goldlines.svg",
        image: "/images/content/trainer-pic.png",
        image2x: "/images/content/trainer-pic@2x.png",
        comment:
          "Fitness Pro is the greatest fitness app. It's clear the makers behind this thing use it every week, because it is so perfect.",
      },
    ],
  },
  {
    name: "Josh Bartoletti",
    type: "Personal Trainer",
    avatar: "/images/content/avatar-3.png",
    review: [
      {
        author: "Megane Schumm",
        description: "Legacy Data Coordinator",
        logo: "/images/content/goldlines.svg",
        image: "/images/content/trainer-pic.png",
        image2x: "/images/content/trainer-pic@2x.png",
        comment:
          "Fitness Pro is the greatest fitness app. It's clear the makers behind this thing use it every week, because it is so perfect.",
      },
    ],
  },
];

const Trainer = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={cn(styles.section, className)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.list}>
          {items[activeIndex].review.map((x, index) => (
            <Item item={x} key={index} />
          ))}
        </div>
        <div className={styles.nav}>
          {items.map((x, index) => (
            <div
              className={cn(styles.link, {
                [styles.active]: index === activeIndex,
              })}
              onClick={() => setActiveIndex(index)}
              key={index}
            >
              <div className={styles.avatar}>
                <img src={x.avatar} alt="Avatar" />
              </div>
              <div className={styles.details}>
                <div className={styles.man}>{x.name}</div>
                <div className={styles.position}>{x.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainer;
