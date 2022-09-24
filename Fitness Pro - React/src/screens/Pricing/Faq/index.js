import React, { useState } from "react";
import cn from "classnames";
import styles from "./Faq.module.sass";
import Item from "./Item";
import Dropdown from "../../../components/Dropdown";

const items = [
  {
    title: "General",
    items: [
      {
        title: "How do I register for an in-person class?",
      },
      {
        title: "What is the status of my Fitness Pro membership?",
      },
      {
        title: "How old does my child need to be to participate in class?",
      },
      {
        title: "Do I have to be a member to take class?",
      },
      {
        title: "Can I join a class once it’s in session?",
      },
      {
        title: "Do I need to buy a yoga mat, towel, or equipment? ",
      },
    ],
  },
  {
    title: "Trainers",
    items: [
      {
        title: "How do I register for an in-person class?",
      },
      {
        title: "What is the status of my Fitness Pro membership?",
      },
      {
        title: "Can I join a class once it’s in session?",
      },
      {
        title: "Do I need to buy a yoga mat, towel, or equipment? ",
      },
    ],
  },
  {
    title: "Subscription",
    items: [
      {
        title: "How do I register for an in-person class?",
      },
      {
        title: "What is the status of my Fitness Pro membership?",
      },
      {
        title: "How old does my child need to be to participate in class?",
      },
      {
        title: "Do I have to be a member to take class?",
      },
      {
        title: "Can I join a class once it’s in session?",
      },
      {
        title: "Do I need to buy a yoga mat, towel, or equipment? ",
      },
    ],
  },
  {
    title: "Class",
    items: [
      {
        title: "How do I register for an in-person class?",
      },
      {
        title: "What is the status of my Fitness Pro membership?",
      },
      {
        title: "How old does my child need to be to participate in class?",
      },
      {
        title: "Do I have to be a member to take class?",
      },
      {
        title: "Can I join a class once it’s in session?",
      },
      {
        title: "Do I need to buy a yoga mat, towel, or equipment? ",
      },
    ],
  },
];

const Team = () => {
  const options = [];
  items.map((x) => options.push(x.title));

  const [category, setCategory] = useState(options[0]);

  return (
    <div className={cn("section-border-top", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={cn("stage-small", styles.stage)}>
            learn how to get started
          </div>
          <h2 className={cn("h2", styles.title)}>Frequently Asked Questions</h2>
          <div className={styles.info}>
            Join Fitness Pro community now to get free updates and also alot of
            freebies are waiting for you or <a href="/#">Contact Support</a>
          </div>
          <div className={styles.nav}>
            {items.map((x, index) => (
              <button
                className={cn(styles.btn, {
                  [styles.active]: x.title === category,
                })}
                onClick={() => setCategory(x.title)}
                key={index}
              >
                {x.title}
              </button>
            ))}
          </div>
          <Dropdown
            className={styles.dropdown}
            value={category}
            setValue={setCategory}
            options={options}
          />
        </div>
        <div className={styles.list}>
          {items
            .find((x) => x.title === category)
            .items.map((x, index) => (
              <Item item={x} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
