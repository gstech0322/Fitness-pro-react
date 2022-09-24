import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Hero.module.sass";
import Image from "../../../components/Image";
import ScrollButton from "../../../components/ScrollButton";
import ScrollParallax from "../../../components/ScrollParallax";

const Hero = ({ scrollToRef }) => {
  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
            Train smarter. get stronger
          </div>
          <h1 className={cn("h1", styles.title)}>
            If you workout, Fitness Pro is made for you
          </h1>
          <div className={styles.text}>
            Track your workouts, get better results, and be the best version of
            you. Less thinking, more lifting.
          </div>
          <Link className={cn("button", styles.button)} to="/class02-details">
            Book a class
          </Link>
        </div>
        <ScrollButton
          onScroll={() =>
            scrollToRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className={styles.scroll}
        />
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/main-pic-1@2x.png 2x"
              srcSetDark="/images/content/main-pic-dark-1@2x.png 2x"
              src="/images/content/main-pic-1.png"
              srcDark="/images/content/main-pic-dark-1.png"
              alt="Main Pic"
            />
          </div>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={300}
          >
            <img
              srcSet="/images/content/ball@2x.png 2x"
              src="/images/content/ball.png"
              alt="Ball"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={600}
          >
            <img
              srcSet="/images/content/ball-black@2x.png 2x"
              src="/images/content/ball-black.png"
              alt="Ball"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={900}
          >
            <img
              srcSet="/images/content/dumbbells@2x.png 2x"
              src="/images/content/dumbbells.png"
              alt="Dumbbells"
            />
          </ScrollParallax>
        </div>
      </div>
    </div>
  );
};

export default Hero;
