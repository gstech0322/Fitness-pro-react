import React from "react";
import cn from "classnames";
import styles from "./Clients.module.sass";
import ScrollParallax from "../ScrollParallax";

const list = [
  {
    title: "rotashow",
    url: "/images/content/rotashow.svg",
  },
  {
    title: "waves",
    url: "/images/content/waves.svg",
  },
  {
    title: "rotashow",
    url: "/images/content/rotashow.svg",
  },
  {
    title: "travelers",
    url: "/images/content/travelers.svg",
  },
  {
    title: "goldlines",
    url: "/images/content/goldlines.svg",
  },
  {
    title: "velocity9",
    url: "/images/content/velocity9.svg",
  },
];

const Clients = () => {
  return (
    <div className={styles.clients}>
      <div className={cn("container", styles.container)}>
        <ScrollParallax className={styles.title}>
          Trusted by more than 2M users worldwide
        </ScrollParallax>
        <div className={styles.list}>
          {list.map((x, index) => (
            <div className={styles.logo} key={index}>
              <img src={x.url} alt={x.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
