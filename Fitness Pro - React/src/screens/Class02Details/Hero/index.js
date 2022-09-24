import React from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import Icon from "../../../components/Icon";
import Image from "../../../components/Image";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Time",
    content: "7 days",
    icon: "calendar",
    size: "16",
  },
  {
    title: "Average duration",
    content: "20 minutes",
    icon: "clock",
    size: "16",
  },
  {
    title: "Difficulty",
    content: "Beginner",
    color: "#45B26B",
    icon: "scoreboard",
    size: "20",
  },
  {
    title: "Intensity",
    content: "Level 2",
    icon: "candlesticks",
    size: "18",
  },
];

const date = ["07:00 AM", "11:00 AM", "More"];

const Hero = () => {
  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={cn("status-green", styles.status)}>
            limited premium class
          </div>
          <h1 className={cn("h1", styles.title)}>Premium Class</h1>
          <div className={styles.info}>
            A 7-days training program designed to boost your strength &
            endurance over the course of a week.
          </div>
        </div>
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/watch@2x.png 2x"
              srcSetDark="/images/content/watch-dark@2x.png 2x"
              src="/images/content/watch.png"
              srcDark="/images/content/watch-dark.png"
              alt="Watch"
            />
          </div>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={600}
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
            delay={300}
          >
            <img
              srcSet="/images/content/bottle@2x.png 2x"
              src="/images/content/bottle.png"
              alt="Bottle"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={900}
          >
            <img
              srcSet="/images/content/ball-black@2x.png 2x"
              src="/images/content/ball-black.png"
              alt="Ball black"
            />
          </ScrollParallax>
        </div>
        <div className={styles.row}>
          <div className={styles.trainer}>
            <div className={cn("status-green", styles.status)}>
              exclusive trainer
            </div>
            <div className={styles.avatar}>
              <img src="/images/content/avatar-3.png" alt="Avatar" />
            </div>
            <div className={styles.man}>Dariana Hammes</div>
            <div className={styles.position}>Yoga Master</div>
          </div>
          <div className={styles.wrap}>
            <div className={styles.list}>
              {items.map((x, index) => (
                <div className={styles.item} key={index}>
                  <div className={styles.icon}>
                    <Icon name={x.icon} size={x.size} />
                  </div>
                  <div className={styles.parameter}>{x.title}</div>
                  <div className={styles.content} style={{ color: x.color }}>
                    {x.content}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.note}>
              A seven-day bodyweight training program designed to boost your
              strength and endurance over the course of a week.
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.head}>
              <Icon name="calendar" size="26" />
              <div>Work-out time</div>
            </div>
            <div className={styles.body}>
              <div className={styles.control}>
                <button className={styles.prev}>
                  <Icon name="arrow-prev" size="14" />
                </button>
                <div className={styles.date}>Friday, March 5, 2021</div>
                <button className={styles.next}>
                  <Icon name="arrow-next" size="14" />
                </button>
              </div>
              <div className={styles.variants}>
                {date.map((x, index) => (
                  <button className={styles.variant} key={index}>
                    {x}
                  </button>
                ))}
              </div>
              <div className={styles.btns}>
                <button className={cn("button-circle-stroke", styles.button)}>
                  <Icon name="lock" size="22" />
                </button>
                <button className={cn("button", styles.button)}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
