import React from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import Subscription from "../../../components/Subscription";
import Image from "../../../components/Image";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <div className={styles.col}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/download-pic@2x.png 2x"
              srcSetDark="/images/content/download-pic-dark@2x.png 2x"
              src="/images/content/download-pic.png"
              srcDark="/images/content/download-pic-dark.png"
              alt="Download bg"
            />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.wrap}>
            <div className={cn("stage", styles.stage)}>
              time to get fitness pro
            </div>
            <h1 className={cn("h1", styles.title)}>
              Fitness Pro for any device.
            </h1>
            <div className={styles.text}>
              Track your workouts, get better results, and be the best version
              of you. Less thinking, more lifting.
            </div>
            <Subscription
              className={styles.subscription}
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
