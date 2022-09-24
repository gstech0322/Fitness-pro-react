import React from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Icon from "../../Icon";

const Item = ({ item }) => {
  return (
    <div className={styles.item}>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.logo}>
            <img src={item.logo} alt="Logo" />
          </div>
          <div className={styles.content}>“ {item.comment} “</div>
          <div className={styles.details}>
            <div className={styles.icon}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.803847 3C0 4.3923 0 6.26154 0 10C0 13.7385 0 15.6077 0.803847 17C1.33046 17.9121 2.08788 18.6695 3 19.1962C4.3923 20 6.26154 20 10 20C13.7385 20 15.6077 20 17 19.1962C17.9121 18.6695 18.6695 17.9121 19.1962 17C20 15.6077 20 13.7385 20 10C20 6.26154 20 4.3923 19.1962 3C18.6695 2.08788 17.9121 1.33046 17 0.803847C15.6077 0 13.7385 0 10 0C6.26154 0 4.3923 0 3 0.803847C2.08788 1.33046 1.33046 2.08788 0.803847 3ZM5.51181 10.3102C5.25066 9.52679 5.3789 8.40707 6.26771 7.29606C6.75537 6.6865 7.32331 6.21297 7.97154 5.87548C8.16991 5.7722 8.25933 5.52954 8.15716 5.33059C8.06249 5.14624 7.83816 5.0694 7.65424 5.16489C6.4847 5.77215 5.59733 6.54553 4.99212 7.48504C4.33071 8.51182 4 9.67402 4 10.9717C4 12.9701 4.92863 14.7512 6.94804 14.7512C7.83538 14.7512 8.63063 14.2965 9.08347 13.5417C9.62179 12.6445 9.5492 11.2591 8.70551 10.4709C7.87032 9.69062 6.49873 9.52651 5.51181 10.3102ZM12.0882 10.3102C11.827 9.52679 11.9553 8.40707 12.8441 7.29606C13.3318 6.68649 13.8997 6.21296 14.5479 5.87547C14.7463 5.77219 14.8357 5.52953 14.7335 5.33059C14.6389 5.14624 14.4145 5.0694 14.2306 5.16489C13.0611 5.77215 12.1737 6.54553 11.5685 7.48504C10.9071 8.51182 10.5764 9.67402 10.5764 10.9717C10.5764 12.9701 11.505 14.7512 13.5244 14.7512C14.8916 14.7512 16 13.7199 16 12.2756C16 10.7049 14.8831 9.8 13.5244 9.8C13.0079 9.8 12.5291 9.97009 12.0882 10.3102Z"
                  fill="#FF592C"
                />
              </svg>
            </div>
            <div className={styles.author}>{item.author}</div>
            <div className={styles.description}>{item.description}</div>
          </div>
          <button className={cn("button-stroke", styles.button)}>
            Read full story
          </button>
        </div>
        <div className={styles.col}>
          <div className={styles.preview}>
            <img
              srcSet={`${item.image2x} 2x`}
              src={item.image}
              alt="Trainer pic"
            />
            <button className={cn("play", styles.play)}>
              <Icon name="play" size="21" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
