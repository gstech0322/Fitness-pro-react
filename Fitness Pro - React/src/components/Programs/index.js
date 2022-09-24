import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Programs.module.sass";
import Slider from "react-slick";
import Icon from "../Icon";
import ScrollParallax from "../ScrollParallax";

const items = [
  {
    title: "Beginners",
    url: "/class02-details",
    color: "#45B26B",
    image: "/images/content/user.svg",
    alt: "user",
    content:
      "A 7-days training program designed to boost your strength & endurance over the course of a week.",
  },
  {
    title: "Advanced",
    url: "/class02-details",
    color: "#9757D7",
    image: "/images/content/medal-1.svg",
    alt: "medal",
    content:
      "A 7-days training program designed to boost your strength & endurance over the course of a week.",
  },
  {
    title: "Premium",
    url: "/class02-details",
    color: "#3772FF",
    image: "/images/content/lightning.svg",
    alt: "lightning",
    content:
      "A 7-days training program designed to boost your strength & endurance over the course of a week.",
  },
  {
    title: "Beginners",
    url: "/class02-details",
    color: "#45B26B",
    image: "/images/content/user.svg",
    alt: "user",
    content:
      "A 7-days training program designed to boost your strength & endurance over the course of a week.",
  },
  {
    title: "Advanced",
    url: "/class02-details",
    color: "#9757D7",
    image: "/images/content/medal-1.svg",
    alt: "medal",
    content:
      "A 7-days training program designed to boost your strength & endurance over the course of a week.",
  },
  {
    title: "Premium",
    url: "/class02-details",
    color: "#3772FF",
    image: "/images/content/lightning.svg",
    alt: "lightning",
    content:
      "A 7-days training program designed to boost your strength & endurance over the course of a week.",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Programs = ({ classNameTitle, title, classNameSection, scrollToRef }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={cn(classNameSection, styles.section)}>
      <div className={styles.anchor} ref={scrollToRef}></div>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={cn(styles.title, classNameTitle)}>{title}</div>
          <div className={styles.info}>
            <strong className={styles.green}>10% Discount</strong> if you’re
            already using the{" "}
            <strong className={styles.black}>Fitness Pro</strong> on App Store
          </div>
        </div>
        <div className={styles.wrap}>
          <Slider className="programs-slider" {...settings}>
            {items.map((x, index) => (
              <ScrollParallax className={styles.slide} key={index}>
                <div className={cn("programs-item", styles.item)}>
                  <div
                    className={styles.icon}
                    style={{ backgroundColor: x.color }}
                  >
                    <img src={x.image} alt={x.alt} />
                  </div>
                  <div className={styles.subtitle}>{x.title}</div>
                  <div className={styles.content}>{x.content}</div>
                  <Link
                    className={cn("button-stroke", styles.button)}
                    to={x.url}
                  >
                    Book a class
                  </Link>
                </div>
              </ScrollParallax>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Programs;
