import React, { useState } from "react";
import cn from "classnames";
import styles from "./Team.module.sass";
import Slider from "react-slick";
import Item from "./Item";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";
import Dropdown from "../../../components/Dropdown";

// data
import { trainersList } from "../../../mocks/trainers";

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Team = () => {
  const options = [];
  trainersList.map((x) => options.push(x.title));

  const [direction, setDirection] = useState(options[0]);

  const settings = {
    infinite: true,
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
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 100000,
        settings: "unslick",
      },
    ],
  };

  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>Meet our pro trainers</h2>
          <div className={styles.info}>
            From all over the world, we select and provide you a team of
            seasoned trainers. What's more, the 1-on-1 live practice mode helps
            you quickly get great results.
          </div>
          <div className={styles.nav}>
            {trainersList.map((x, index) => (
              <button
                className={cn(styles.btn, {
                  [styles.active]: x.title === direction,
                })}
                onClick={() => setDirection(x.title)}
                key={index}
              >
                {x.title}
              </button>
            ))}
          </div>
          <Dropdown
            className={styles.dropdown}
            value={direction}
            setValue={setDirection}
            options={options}
          />
        </div>
        <div className={styles.wrap}>
          <Slider className={cn("team-slider", styles.slider)} {...settings}>
            {trainersList
              .find((x) => x.title === direction)
              .courses.map((x, index) => (
                <ScrollParallax className={styles.slide} key={index}>
                  <Item className={styles.item} item={x} />
                </ScrollParallax>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Team;
