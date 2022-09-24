import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Item.module.sass";

const Item = ({ item, className }) => {
  return (
    <Link className={cn(styles.item, className)} to={item.url}>
      <div className={styles.preview}>
        <img srcSet={`${item.image2x} 2x`} src={item.image} alt={item.status} />
      </div>
      <div
        className={cn(
          { "status-red": item.category === "red" },
          { "status-green": item.category === "green" },
          { "status-pink": item.category === "pink" },
          { "status-black": item.category === "black" },
          styles.category
        )}
      >
        {item.categoryContent}
      </div>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.foot}>
        <div className={styles.user}>
          <div className={styles.avatar}>
            <img src={item.avatar} alt="Avatar" />
          </div>
          <div className={styles.author}>{item.author}</div>
        </div>
        <div className={styles.date}>{item.date}</div>
      </div>
    </Link>
  );
};

export default Item;
