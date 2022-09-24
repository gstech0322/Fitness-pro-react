import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Workouts.module.sass";
import Image from "../Image";
import ScrollParallax from "../ScrollParallax";

const items = [
  "Fitness Pro Cloud",
  "Syncs with Google Fit",
  "Syncs with Apple Health",
  "Track your progress easily",
  "Intuitive and clean design",
];

const Workouts = () => {
  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/phones@2x.png 2x"
              srcSetDark="/images/content/phones-dark@2x.png 2x"
              src="/images/content/phones.png"
              srcDark="/images/content/phones-dark.png"
              alt="Phones"
            />
          </div>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/ball-green-1@2x.png 2x"
              src="/images/content/ball-green-1.png"
              alt="Gloves"
            />
          </ScrollParallax>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/apple@2x.png 2x"
              src="/images/content/apple.png"
              alt="Apple"
            />
          </ScrollParallax>
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>
            All your workouts, <br></br>in your pocket
          </h2>
          <div className={styles.info}>
            Fitness Pro helps track your workouts, get better results, and be
            the best version of you. Less thinking!
          </div>
          <ul className={styles.list}>
            {items.map((x, index) => (
              <li className={styles.item} key={index}>
                {x}
              </li>
            ))}
          </ul>
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="/pricing">
              Choose Plan
            </Link>
            <button className={cn("button-stroke", styles.button)}>
              Request a demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
