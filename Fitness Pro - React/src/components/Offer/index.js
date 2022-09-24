import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Offer.module.sass";

const Offer = ({ className }) => {
  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={cn("stage", styles.stage)}>
          try it free for 14 days 🎾
        </div>
        <h2 className={cn("h1", styles.title)}>
          Anywhere you want. Anytime you want.
        </h2>
        <div className={styles.text}>
          Get started with two free weeks of unlimited yoga, fitness, and
          meditation classes. Cancel anytime.
        </div>
        <Link className={cn("button", styles.button)} to="/download">
          Start free trial
        </Link>
      </div>
    </div>
  );
};

export default Offer;
