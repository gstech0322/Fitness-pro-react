import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "./Lifestyle.module.sass";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "The Fitness Pro Philosophy",
    image: "/images/content/lifestyle-pic-1.png",
    image2x: "/images/content/lifestyle-pic-1@2x.png",
    content:
      "Whether you’re a complete beginner or you want to step up your routine, get the full studio experience at home with thousands of classes for body, mind.",
  },
  {
    title: "Quickly find the class you want",
    image: "/images/content/lifestyle-pic-2.png",
    image2x: "/images/content/lifestyle-pic-2@2x.png",
    content:
      "Whether you’re a complete beginner or you want to step up your routine, get the full studio experience at home with thousands of classes for body, mind.",
  },
  {
    title: "Keep track of calories & macros",
    image: "/images/content/lifestyle-pic-3.png",
    image2x: "/images/content/lifestyle-pic-3@2x.png",
    content:
      "Whether you’re a complete beginner or you want to step up your routine, get the full studio experience at home with thousands of classes for body, mind.",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Lifestyle = () => {
  const settings = {
    infinite: true,
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
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 100000,
        settings: "unslick",
      },
    ],
  };

  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={cn("stage-small", styles.stage)}>explore the app</div>
          <h2 className={cn("h2", styles.title)}>Fit for your life style</h2>
          <div className={styles.info}>
            Get started with two free weeks of unlimited yoga, fitness, and
            meditation classes.{" "}
          </div>
          <Link
            className={cn("button-stroke", styles.button)}
            to="/class02-details"
          >
            <span>Join a class today</span>
            <Icon name="arrow-right" size="10" />
          </Link>
        </div>
        <div className={styles.wrap}>
          <Slider
            className={cn("lifestyle-slider", styles.slider)}
            {...settings}
          >
            {items.map((x, index) => (
              <ScrollParallax className={styles.item} key={index}>
                <div className={styles.row}>
                  <div className={styles.col}>
                    <div className={styles.details}>
                      <div className={styles.number}>0{index + 1}.</div>
                      <div className={styles.category}>{x.title}</div>
                      <div className={styles.content}>{x.content}</div>
                    </div>
                  </div>
                  <div className={styles.col}>
                    <img
                      srcSet={`${x.image2x} 2x`}
                      src={x.image}
                      alt="Lifestyle"
                    />
                  </div>
                </div>
              </ScrollParallax>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Lifestyle;
