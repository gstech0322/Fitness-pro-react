import React from "react";
import cn from "classnames";
import styles from "./Community.module.sass";
import Subscription from "../Subscription";
import Image from "../Image";

const Community = () => {
  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.preview}>
          <Image
            srcSet="/images/content/dumbbell@2x.png 2x"
            srcSetDark="/images/content/dumbbell-dark@2x.png 2x"
            src="/images/content/dumbbell.png"
            srcDark="/images/content/dumbbell-dark.png"
            alt="Dumbbell"
          />
        </div>
        <div className={cn("stage-small", styles.stage)}>
          Save your time with Stacks
        </div>
        <h2 className={cn("h2", styles.title)}>Join Fitness Pro Community</h2>
        <div className={styles.text}>
          Join Stacks community now to get free updates and also alot of
          freebies are waiting for you.
        </div>
        <Subscription
          className={styles.subscription}
          placeholder="Enter your email"
        />
        <div className={styles.note}>
          By click sign in you, you agree with Stacks <a href="/#">terms</a> and{" "}
          <a href="/#">policy</a>
        </div>
      </div>
    </div>
  );
};

export default Community;
