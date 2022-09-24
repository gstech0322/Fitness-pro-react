import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import Icon from "../Icon";
import styles from "./Review.module.sass";

const items = [
  {
    author: "Dorthy Runolfsdottir",
    position: "Lead Visual Designer at UI8",
    logo: "./images/content/velocity9.svg",
    comment:
      "The greatest fitness app. It's clear the makers behind this thing use it every week, because it is so perfect.",
  },
  {
    author: "Dorthy Runolfsdottir",
    position: "Lead Visual Designer at UI8",
    logo: "./images/content/travelers.svg",
    comment:
      "The best of all the workout apps I have tried on iOS. I have used Fitness Pro for more than a year now. It is intuitive and clean, awesome app.",
  },
  {
    author: "Dorthy Runolfsdottir",
    position: "Lead Visual Designer at UI8",
    logo: "./images/content/goldlines.svg",
    comment:
      "The greatest fitness app. It's clear the makers behind this thing use it every week, because it is so perfect.",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Review = ({ className }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
  };

  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <Slider className="review-slider" {...settings}>
            {items.map((x, index) => (
              <div className={styles.slide} key={index}>
                <div className={cn("review-item", styles.item)}>
                  <div className={styles.logo}>
                    <img src={x.logo} alt="Logo" />
                  </div>
                  <div className={styles.title}>{x.comment}</div>
                  <div className={styles.author}>{x.author}</div>
                  <div className={styles.position}>{x.position}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;
