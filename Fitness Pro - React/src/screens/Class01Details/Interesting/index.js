import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./Interesting.module.sass";
import Icon from "../../../components/Icon";
import Card from "../../../components/Card";

const items = [
  {
    title: "Power Yoga Sculpt",
    url: "/class01-details",
    image: "/images/content/card-pic-1.png",
    image2x: "/images/content/card-pic-1@2x.png",
    category: "green",
    categoryText: "yoga",
    avatar: "/images/content/avatar-1.png",
    trainer: "First name Last name",
    level: "green",
    levelText: "beginner",
    counterVideo: "7",
    counterUser: "160",
  },
  {
    title: "Sweet and tone",
    url: "/class01-details",
    image: "/images/content/card-pic-2.png",
    image2x: "/images/content/card-pic-2@2x.png",
    category: "red",
    categoryText: "fitness",
    avatar: "/images/content/avatar-2.png",
    trainer: "First name Last name",
    level: "green",
    levelText: "beginner",
    counterVideo: "7",
    counterUser: "160",
    play: true,
  },
  {
    title: "Power Yoga Sculptt",
    url: "/class01-details",
    image: "/images/content/card-pic-3.png",
    image2x: "/images/content/card-pic-3@2x.png",
    category: "green",
    categoryText: "yoga",
    avatar: "/images/content/avatar-3.png",
    trainer: "First name Last name",
    level: "green",
    levelText: "beginner",
    counterVideo: "7",
    counterUser: "160",
  },
  {
    title: "Power Yoga Sculpt",
    url: "/class01-details",
    image: "/images/content/card-pic-4.png",
    image2x: "/images/content/card-pic-4@2x.png",
    category: "green",
    categoryText: "yoga",
    avatar: "/images/content/avatar-1.png",
    trainer: "First name Last name",
    level: "green",
    levelText: "beginner",
    counterVideo: "7",
    counterUser: "160",
  },
  {
    title: "Sweet and tone",
    url: "/class01-details",
    image: "/images/content/card-pic-5.png",
    image2x: "/images/content/card-pic-5@2x.png",
    category: "red",
    categoryText: "fitness",
    avatar: "/images/content/avatar-2.png",
    trainer: "First name Last name",
    level: "green",
    levelText: "beginner",
    counterVideo: "7",
    counterUser: "160",
    play: true,
  },
  {
    title: "Power Yoga Sculptt",
    url: "/class01-details",
    image: "/images/content/card-pic-6.png",
    image2x: "/images/content/card-pic-6@2x.png",
    category: "green",
    categoryText: "yoga",
    avatar: "/images/content/avatar-3.png",
    trainer: "First name Last name",
    level: "green",
    levelText: "beginner",
    counterVideo: "7",
    counterUser: "160",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Interesting = () => {
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
        breakpoint: 1180,
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
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <h2 className={cn("h2", styles.title)}>You may interested</h2>
          <div className={styles.wrap}>
            <Slider className="interesting-slider" {...settings}>
              {items.map((x, index) => (
                <div className={styles.slide} key={index}>
                  <Card className={styles.card} item={x} />
                </div>
              ))}
            </Slider>
          </div>
          <div className={styles.btns}>
            <button className={cn("button-stroke", styles.button)}>
              Browse more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interesting;
