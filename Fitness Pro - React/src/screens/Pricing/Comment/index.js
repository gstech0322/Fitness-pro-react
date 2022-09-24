import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import Slider from "react-slick";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";
import styles from "./Comment.module.sass";

const items = [
  {
    title: "Fitness",
    url: "/class02-details",
    image: "/images/content/plates.png",
    image2x: "/images/content/plates@2x.png",
    content: "Great physique",
  },
  {
    title: "Gymnastic",
    url: "/class02-details",
    image: "/images/content/yoga-mat.png",
    image2x: "/images/content/yoga-mat@2x.png",
    content: "Enhanced strength",
  },
  {
    title: "Basketball",
    url: "/class02-details",
    image: "/images/content/ball.png",
    image2x: "/images/content/ball@2x.png",
    content: "Relax $ work efficiently",
  },
  {
    title: "Yoga",
    url: "/class02-details",
    image: "/images/content/yoga-mat.png",
    image2x: "/images/content/yoga-mat@2x.png",
    content: "Perfect physique",
  },
  {
    title: "Fitness",
    url: "/class02-details",
    image: "/images/content/plates.png",
    image2x: "/images/content/plates@2x.png",
    content: "Great physique",
  },
  {
    title: "Gymnastic",
    url: "/class02-details",
    image: "/images/content/yoga-mat.png",
    image2x: "/images/content/yoga-mat@2x.png",
    content: "Enhanced strength",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Comment = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
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
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <div className={styles.head}>
            <h2 className={cn("h2", styles.title)}>Find what moves you</h2>
            <div className={styles.info}>
              Whether you’re a complete beginner or you want to step up your
              routine, get the full studio experience at home with thousands of
              classes for body, mind, and spirit.
            </div>
          </div>
          <div className={styles.wrap}>
            <Slider className="comment-slider" {...settings}>
              {items.map((x, index) => (
                <ScrollParallax className={styles.slide} key={index}>
                  <Link className={cn("comment-item", styles.item)} to={x.url}>
                    <div className={styles.preview}>
                      <img
                        srcSet={`${x.image2x} 2x`}
                        src={x.image}
                        alt={x.title}
                      />
                    </div>
                    <div className={styles.subtitle}>{x.title}</div>
                    <div className={styles.content}>{x.content}</div>
                  </Link>
                </ScrollParallax>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
