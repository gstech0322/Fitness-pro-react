import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./ModalTrainer.module.sass";
import Icon from "../Icon";
import Modal from "../Modal";
import Subscription from "../Subscription";

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const ModalTrainer = ({ item, visible, onClose }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
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
  };

  return (
    <Modal
      containerClassName={styles.container}
      visible={visible}
      onClose={onClose}
    >
      <div className={styles.avatar}>
        <img src={item.image} alt={item.name} />
      </div>
      <div className={cn("h3", styles.trainer)}>{item.name}</div>
      <div className={styles.position}>{item.position}</div>
      <div className={styles.socials}>
        {item.socials.map((x, index) => (
          <a
            className={styles.social}
            href={x.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <Icon name={x.type} size={x.type === "twitter" ? 22 : 20} />
          </a>
        ))}
      </div>
      <Subscription
        className={styles.subscription}
        placeholder="Find a class"
      />
      <div className={styles.wrap}>
        <Slider className="trainer-slider" {...settings}>
          {item.courses.map((x, index) => (
            <div className={styles.slide} key={index} onClick={onClose}>
              <Link className={cn("trainer-item", styles.item)} to={x.url}>
                <div className={styles.preview}>
                  <img
                    srcSet={x.image}
                    src={`${x.image2x} 2x`}
                    alt="Card pic"
                  />
                  <div
                    className={cn(
                      { "status-white": x.category === "white" },
                      styles.category
                    )}
                  >
                    {x.categoryText}
                  </div>
                </div>
                <div className={styles.head}>
                  <div className={styles.title}>{x.title}</div>
                  <div
                    className={cn(
                      {
                        "status-stroke-green": x.level === "green",
                      },
                      styles.level
                    )}
                  >
                    {x.levelText}
                  </div>
                </div>
                <div className={styles.parameters}>
                  <div className={styles.parameter}>
                    <Icon name="button-play" size="18" />
                    {x.counterVideo}
                  </div>
                  <div className={styles.parameter}>
                    <Icon name="user" size="18" />
                    {x.counterUser}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.btns}>
        <button className={cn("button-small", styles.button)}>
          Browse all class
        </button>
      </div>
    </Modal>
  );
};

export default ModalTrainer;
