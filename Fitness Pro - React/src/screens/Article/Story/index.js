import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Story.module.sass";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "How it work",
    content:
      "Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts",
  },
  {
    title: "About the trainers",
    content:
      "Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts",
  },
];

const Story = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={cn("stage-small", styles.stage)}>yoga story</div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.preview}>
              <img src="/images/content/story-pic.png" alt="Story Pic" />
            </div>
          </div>
          <div className={styles.col}>
            <h2 className={cn("h2", styles.title)}>What is Sweet and tone</h2>
            <div className={styles.info}>
              The Stacks series of products: Stacks: Landing Page Kit, Stacks:
              Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
              production-ready library of stackable content blocks built in
              React Native.
            </div>
            <div className={styles.list}>
              {items.map((x, index) => (
                <ScrollParallax className={styles.item} key={index}>
                  <div className={styles.category}>{x.title}</div>
                  <div className={styles.content}>{x.content}</div>
                </ScrollParallax>
              ))}
            </div>
            <Link className={cn("button-stroke", styles.button)} to="/class02">
              Go to class
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
