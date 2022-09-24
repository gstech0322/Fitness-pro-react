import React, { useState } from "react";
import cn from "classnames";
import styles from "./Trainers.module.sass";
import Item from "./Item";
import Dropdown from "../../../components/Dropdown";
import ScrollParallax from "../../../components/ScrollParallax";

// data
import { trainersList } from "../../../mocks/trainers";

const Trainers = () => {
  const options = [];
  trainersList.map((x) => options.push(x.title));

  const [direction, setDirection] = useState(options[0]);

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <h2 className={cn("h2", styles.title)}>Professional trainers</h2>
        <div className={styles.info}>
          Stacks is a production-ready library of stackable content blocks built
          in React Native.
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
        <div className={styles.list}>
          {trainersList
            .find((x) => x.title === direction)
            .courses.map((x, index) => (
              <ScrollParallax key={index} className={styles.box}>
                <Item className={styles.item} item={x} />
              </ScrollParallax>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
