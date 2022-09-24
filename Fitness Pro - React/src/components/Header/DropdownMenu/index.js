import React, { useState } from "react";
import { Link, NavLink, withRouter, useLocation } from "react-router-dom";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./DropdownMenu.module.sass";
import Icon from "../../Icon";

const DropdownMenu = ({ item, className, setValue }) => {
  const [visible, setVisible] = useState(false);

  const { pathname } = useLocation();

  const handleClick = () => {
    setValue(false);
    setVisible(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={cn(styles.group, className)}>
        <div
          className={cn(
            styles.head,
            { [styles.open]: visible },
            { [styles.active]: pathname.startsWith("/class") }
          )}
          onClick={() => setVisible(!visible)}
        >
          {item.title}
          <Icon name="arrow-bottom" size="9" />
        </div>
        {visible && (
          <div className={styles.body}>
            <div className={styles.inner}>
              <div className={styles.row}>
                <div className={styles.col}>
                  <Link
                    className={styles.direction}
                    to="/class01"
                    onClick={() => handleClick()}
                  >
                    <div className={styles.info}>
                      Find a class to achieve your goals 🔥
                    </div>
                    <div className={styles.preview}>
                      <img
                        srcSet="/images/content/ball@2x.png 2x"
                        src="/images/content/ball.png"
                        alt="Ball"
                      />
                    </div>
                  </Link>
                  <div className={styles.menu}>
                    {item.content.menu.map((item, index) => (
                      <NavLink
                        className={styles.box}
                        activeClassName={styles.active}
                        to={item.url}
                        key={index}
                        onClick={() => handleClick()}
                      >
                        <div className={styles.icon}>
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className={styles.subtitle}>{item.title}</div>
                      </NavLink>
                    ))}
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.line}>
                    <div className={styles.cell}>
                      {item.content.links.map(
                        (item, index) =>
                          index === 0 && (
                            <Link
                              className={styles.card}
                              to={item.url}
                              key={index}
                              onClick={() => handleClick()}
                            >
                              <div className={styles.photo}>
                                <img
                                  srcSet={`${item.image2x} 2x`}
                                  src={item.image}
                                  alt={item.status}
                                />
                                <div
                                  className={cn(
                                    {
                                      "status-black": item.category === "black",
                                    },
                                    {
                                      "status-green": item.category === "green",
                                    },
                                    {
                                      "status-red": item.category === "red",
                                    },
                                    {
                                      "status-purple":
                                        item.category === "purple",
                                    },
                                    styles.category
                                  )}
                                >
                                  {item.categoryText}
                                </div>
                              </div>
                              <div className={styles.top}>
                                <div className={styles.user}>
                                  <div className={styles.avatar}>
                                    <img src={item.avatar} alt="Avatar" />
                                  </div>
                                  <div className={styles.details}>
                                    <div className={styles.title}>
                                      {item.title}
                                    </div>
                                    <div className={styles.trainer}>
                                      {item.trainer}
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className={cn(
                                    {
                                      "status-stroke-green":
                                        item.level === "green",
                                    },
                                    styles.level
                                  )}
                                >
                                  {item.levelText}
                                </div>
                              </div>
                              <div className={styles.content}>
                                {item.content}
                              </div>
                            </Link>
                          )
                      )}
                    </div>
                    <div className={styles.cell}>
                      {item.content.links.map(
                        (item, index) =>
                          index > 0 && (
                            <Link
                              className={styles.item}
                              to={item.url}
                              key={index}
                              onClick={() => handleClick()}
                            >
                              <div className={styles.photo}>
                                <img
                                  srcSet={`${item.image2x} 2x`}
                                  src={item.image}
                                  alt={item.category}
                                />
                              </div>
                              <div className={styles.description}>
                                <div
                                  className={cn(
                                    {
                                      "status-black": item.category === "black",
                                    },
                                    {
                                      "status-green": item.category === "green",
                                    },
                                    {
                                      "status-red": item.category === "red",
                                    },
                                    {
                                      "status-purple":
                                        item.category === "purple",
                                    },
                                    styles.category
                                  )}
                                >
                                  {item.categoryText}
                                </div>
                                <div className={styles.user}>
                                  <div className={styles.avatar}>
                                    <img src={item.avatar} alt="Avatar" />
                                  </div>
                                  <div className={styles.details}>
                                    <div className={styles.title}>
                                      {item.title}
                                    </div>
                                    <div className={styles.trainer}>
                                      {item.trainer}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          )
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.foot}>
                <div className={styles.stage}>Pro Trainers</div>
                <div className={styles.list}>
                  {item.content.trainer.map((item, index) => (
                    <div className={styles.user} key={index}>
                      <div className={styles.avatar}>
                        <img src={item.avatar} alt="Avatar" />
                      </div>
                      <div className={styles.details}>
                        <div className={styles.title}>{item.title}</div>
                        <div className={styles.trainer}>{item.type}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default withRouter(DropdownMenu);
