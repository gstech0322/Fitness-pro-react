import React from "react";
import cn from "classnames";
import styles from "./Post.module.sass";
import Icon from "../../../components/Icon";

const Post = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h1 className={cn("h1", styles.title)}>
            Stories from Fitness Pro community.
          </h1>
          <button className={cn("button-circle-stroke", styles.button)}>
            <Icon name="download" size="22" />
          </button>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.preview}>
              <img src="/images/content/history-pic.png" alt="People" />
            </div>
          </div>
          <div className={styles.col}>
            <h2 className={cn("h2", styles.title)}>As easy as hitting play</h2>
            <div className={styles.info}>
              The Stacks series of products: Stacks: Landing Page Kit, Stacks:
              Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
              production-ready library of stackable content blocks built in
              React Native.{" "}
            </div>
            <div className={styles.preview}>
              <img src="/images/content/post-pic.png" alt="Post pic" />
            </div>
            <div className={styles.content}>
              <p>
                The Stacks series of products: Stacks: Landing Page Kit, Stacks:
                Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                production-ready library of stackable content blocks built in
                React Native.
              </p>
              <p>
                Mix-and-match dozens of responsive elements to quickly configure
                your favorite landing page layouts or hit the ground running
                with 10 pre-built templates, all in light or dark mode."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
