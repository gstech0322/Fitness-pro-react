import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Program.module.sass";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Program Videos",
    url: "/class01",
    color: "#45B26B",
    images: "/images/content/lightning.svg",
    alt: "lightning",
  },
  {
    title: "Premium Class",
    url: "/class02",
    color: "#9757D7",
    images: "/images/content/lightning.svg",
    alt: "lightning",
  },
  {
    title: "Exclusive Trainers",
    url: "/class02",
    color: "#3772FF",
    images: "/images/content/lightning.svg",
    alt: "lightning",
  },
];

const Program = () => {
  return (
    <div className={cn("section-bg", styles.book)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={styles.col}>
            <div className={cn("stage-small", styles.stage)}>
              explore fitness pro program
            </div>
            <div className={styles.list}>
              {items.map((x, index) => (
                <ScrollParallax className={styles.item} key={index}>
                  <Link className={styles.link} to={x.url}>
                    <div
                      className={styles.icon}
                      style={{ backgroundColor: x.color }}
                    >
                      <img src={x.images} alt={x.alt} />
                    </div>
                    <div className={styles.subtitle}>{x.title}</div>
                    <div className={styles.arrow}>
                      <Icon name="arrow-right-empty" size="14" />
                    </div>
                  </Link>
                </ScrollParallax>
              ))}
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.preview}>
              <img
                srcSet="/images/content/bottle-2@2x.png 2x"
                src="/images/content/bottle-2.png"
                alt="Bottle"
              />
            </div>
            <div className={styles.info}>
              Stacks is a production-ready library of stackable content blocks
              built in React Native
            </div>
            <Link className={cn("button", styles.button)} to="/class02-details">
              Book a class
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
