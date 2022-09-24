import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./History.module.sass";

const items = [
  {
    url: "/article",
    title: "Stories From Our Community: Kohaku & Moyo Shiro",
    content:
      "Track your workouts, get better results, and be the best version of you. Less thinking",
    image: "url('/images/content/history-pic.png')",
    status: "pink",
    statusContent: "new",
  },
  {
    url: "/article",
    title: "Stories From Our Community: Kohaku & Moyo Shiro",
    content:
      "Track your workouts, get better results, and be the best version of you. Less thinking",
    image: "url('/images/content/history-pic.png')",
    status: "green",
    statusContent: "yoga",
  },
  {
    url: "/article",
    title: "Stories From Our Community: Kohaku & Moyo Shiro",
    content:
      "Track your workouts, get better results, and be the best version of you. Less thinking",
    image: "url('/images/content/history-pic.png')",
    status: "pink",
    statusContent: "new",
  },
  {
    url: "/article",
    title: "Stories From Our Community: Kohaku & Moyo Shiro",
    content:
      "Track your workouts, get better results, and be the best version of you. Less thinking",
    image: "url('/images/content/history-pic.png')",
    status: "green",
    statusContent: "yoga",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const History = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className={styles.history}>
      <div className={styles.wrap}>
        <Slider className="history-slider" {...settings}>
          {items.map((x, index) => (
            <div className={styles.slide} key={index}>
              <div className={cn("history-item", styles.item)}>
                <div
                  className={styles.preview}
                  style={{ backgroundImage: x.image }}
                ></div>
                <div className={styles.details}>
                  <div
                    className={cn(
                      { "status-pink": x.status === "pink" },
                      { "status-green": x.status === "green" },
                      styles.status
                    )}
                  >
                    {x.statusContent}
                  </div>
                  <div className={styles.title}>{x.title}</div>
                  <div className={styles.content}>{x.content}</div>
                  <Link
                    to={x.url}
                    className={cn("button-small", styles.button)}
                  >
                    Read full story
                  </Link>
                </div>
                <div className={styles.position}>{x.position}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default History;
