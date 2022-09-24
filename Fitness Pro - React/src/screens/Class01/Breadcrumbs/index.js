import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Breadcrumbs.module.sass";

const items = [
  {
    url: "/",
    text: "Class",
  },
  {
    text: "Program",
  }
];

const Breadcrumbs = () => {
  return (
    <div className={styles.breadcrumbs}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>Find a class to achieve your goals</h2>
          <div className={styles.info}>Build your perfect workout with our pro trainers</div>
          <div className={styles.list}>
            {items.map((x,index) => (
              <div className={styles.item} key={index}>
                {x.url ? (
                  <Link
                    className={styles.link}
                    to={x.url}
                  >
                    {x.text}
                  </Link>
                ) : (
                  <>
                    {x.text}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
