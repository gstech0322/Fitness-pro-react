import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Book.module.sass";
import Icon from "../../../components/Icon";
import Image from "../../../components/Image";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "For the beginners",
    color: "#45B26B",
    images: "/images/content/user.svg",
    alt: "user",
    content: "You never workout before, it’s now a good start",
  },
  {
    title: "Advanced classes",
    color: "#9757D7",
    images: "/images/content/medal-1.svg",
    alt: "medal",
    content: "You never workout before, it’s now a good start",
  },
  {
    title: "Premium (limited)",
    color: "#3772FF",
    images: "/images/content/lightning.svg",
    alt: "lightning",
    content: "You never workout before, it’s now a good start",
  },
];

const Book = () => {
  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/book-pic@2x.png 2x"
              srcSetDark="/images/content/book-pic-dark@2x.png 2x"
              src="/images/content/book-pic.png"
              srcDark="/images/content/book-pic-dark.png"
              alt="Book pic"
            />
          </div>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            offset={300}
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
            offset={300}
          >
            <img
              srcSet="/images/content/ball-green@2x.png 2x"
              src="/images/content/ball-green.png"
              alt="Ball"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            offset={300}
          >
            <img
              srcSet="/images/content/dumbbells@2x.png 2x"
              src="/images/content/dumbbells.png"
              alt="Dumbbells"
            />
          </ScrollParallax>
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>Book a class</h2>
          <div className={styles.info}>
            Track your workouts, get better results, and be the best version of
            you. Less thinking, more lifting.
          </div>
          <div className={styles.list}>
            {items.map((x, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.icon}
                  style={{ backgroundColor: x.color }}
                >
                  <img src={x.images} alt={x.alt} />
                </div>
                <div className={styles.details}>
                  <div className={styles.subtitle}>{x.title}</div>
                  <div className={styles.content}>{x.content}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.note}>
            <strong className={styles.green}>10% Discount</strong> if you’re
            already using the{" "}
            <strong className={styles.black}>Fitness Pro</strong> on App Store
          </div>
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="/class02-details">
              <span>Book a class</span>
              <Icon name="arrow-right" size="10" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
