import React from "react";
import cn from "classnames";
import styles from "./Platform.module.sass";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Fitness Pro for Mac OS",
    description: "We realize ideas from simple.",
    color: "#FF592C",
    image: "/images/content/apple.svg",
    status: "black",
    statusContent: "updated",
  },
  {
    title: "Fitness Pro for Windows",
    description: "We realize ideas from simple.",
    color: "#45B26B",
    image: "/images/content/windows.svg",
    status: "green",
    statusContent: "coming soon",
  },
  {
    title: "Fitness Pro for Mac OS",
    description: "We realize ideas from simple.",
    color: "#EF466F",
    image: "/images/content/mouse.svg",
    status: "green",
    statusContent: "coming soon",
  },
  {
    title: "Fitness Pro for Mac OS",
    description: "We realize ideas from simple.",
    color: "#3772FF",
    image: "/images/content/apple.svg",
    status: "green",
    statusContent: "coming soon",
  },
  {
    title: "Fitness Pro for Android",
    description: "We realize ideas from simple.",
    color: "#9757D7",
    image: "/images/content/android.svg",
  },
];

const Platform = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <h2 className={cn("h2", styles.title)}>Choose the plaform</h2>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div
                className={styles.preview}
                style={{ backgroundColor: x.color }}
              >
                <img src={x.image} alt="Logo" />
              </div>
              <div className={styles.details}>
                {x.status && (
                  // <div className={cn(x.status, styles.status)}>{x.statusContent}</div>
                  <div
                    className={cn(
                      { "status-stroke-black": x.status === "black" },
                      { "status-green": x.status === "green" },
                      styles.status
                    )}
                  >
                    {x.statusContent}
                  </div>
                )}
                <div className={styles.subtitle}>{x.title}</div>
                <div className={styles.description}>{x.description}</div>
                <a
                  href="/#"
                  className={cn("button-small", styles.button)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Download</span>
                  <Icon name="arrow-down" size="10" />
                </a>
              </div>
            </ScrollParallax>
          ))}
        </div>
        <div className={styles.btns}>
          <button className={cn("button-stroke", styles.button)}>
            See the plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Platform;
