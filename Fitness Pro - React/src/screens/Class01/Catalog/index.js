import React, { useState } from "react";
import cn from "classnames";
import styles from "./Catalog.module.sass";
import Icon from "../../../components/Icon";
import Card from "../../../components/Card";
import Dropdown from "../../../components/Dropdown";

const navLinks = ["Yoga", "Fitness & Gym", "Mindfulness", "Gymnastics"];

const items = [
  {
    title: "7-days barre body",
    url: "/class01-details",
    image: "/images/content/card-pic-1.png",
    image2x: "/images/content/card-pic-1@2x.png",
    category: "green",
    categoryText: "yoga",
    avatar: "/images/content/avatar-1.png",
    trainer: "First name Last name",
    level: "green",
    levelText: "beginner",
    counterVideo: "7",
    counterUser: "160",
  },
  {
    title: "Sweet and tone",
    url: "/class01-details",
    image: "/images/content/card-pic-2.png",
    image2x: "/images/content/card-pic-2@2x.png",
    category: "red",
    categoryText: "fitness",
    avatar: "/images/content/avatar-2.png",
    trainer: "First name Last name",
    level: "red",
    levelText: "Advanced",
    counterVideo: "7",
    counterUser: "160",
    play: true,
  },
  {
    title: "Baseline Bootcamp",
    url: "/class01-details",
    image: "/images/content/card-pic-3.png",
    image2x: "/images/content/card-pic-3@2x.png",
    category: "red",
    categoryText: "fitness",
    avatar: "/images/content/avatar-3.png",
    trainer: "First name Last name",
    level: "purple",
    levelText: "Intermediate",
    counterVideo: "7",
    counterUser: "160",
  },
  {
    title: "Beach run 7",
    url: "/class01-details",
    image: "/images/content/card-pic-4.png",
    image2x: "/images/content/card-pic-4@2x.png",
    category: "green",
    categoryText: "yoga",
    avatar: "/images/content/avatar-4.png",
    trainer: "First name Last name",
    level: "green",
    levelText: "beginner",
    counterVideo: "7",
    counterUser: "160",
  },
  {
    title: "Train 360",
    url: "/class01-details",
    image: "/images/content/card-pic-5.png",
    image2x: "/images/content/card-pic-5@2x.png",
    category: "red",
    categoryText: "fitness",
    avatar: "/images/content/avatar-5.png",
    trainer: "First name Last name",
    level: "purple",
    levelText: "Intermediate",
    counterVideo: "7",
    counterUser: "160",
  },
  {
    title: "Power Yoga Sculpt",
    url: "/class01-details",
    image: "/images/content/card-pic-6.png",
    image2x: "/images/content/card-pic-6@2x.png",
    category: "green",
    categoryText: "yoga",
    avatar: "/images/content/avatar-6.png",
    trainer: "First name Last name",
    level: "red",
    levelText: "Advanced",
    counterVideo: "7",
    counterUser: "160",
  },
];

const dateOptions = ["Newest", "Olest"];
const sportOptions = ["AcroYoga", "Morning Yoga"];
const timeOptions = ["Morning", "Dinner", "Evening"];
const difficultyOptions = ["Beginner", "Advanced", "Intermediate"];
const levelOptions = ["Level", "Level 1", "Level 2"];

const Catalog = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [date, setDate] = useState(dateOptions[0]);
  const [sport, setSport] = useState(sportOptions[0]);
  const [time, setTime] = useState(timeOptions[0]);
  const [difficulty, setDifficulty] = useState(difficultyOptions[0]);
  const [level, setLevel] = useState(levelOptions[0]);

  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={styles.title}>Find a class that fit with you</div>
          <form
            className={styles.search}
            action=""
            onSubmit={() => handleSubmit()}
          >
            <input
              className={styles.input}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              placeholder="Find a class"
              required
            />
            <button className={styles.result}>
              <Icon name="search" size="16" />
            </button>
          </form>
        </div>
        <div className={styles.wrap}>
          <div className={styles.top}>
            <div className={styles.dropdown}>
              <Dropdown
                className={styles.dropdown}
                value={date}
                setValue={setDate}
                options={dateOptions}
              />
            </div>
            <div className={styles.nav}>
              {navLinks.map((x, index) => (
                <button
                  className={cn(styles.link, {
                    [styles.active]: index === activeIndex,
                  })}
                  onClick={() => setActiveIndex(index)}
                  key={index}
                >
                  {x}
                </button>
              ))}
            </div>
            <div className={styles.filter}>
              <div className={styles.text}>Filter</div>
              <button className={styles.close}>
                <Icon name="close" size="10" />
              </button>
            </div>
          </div>
          <div className={styles.sorting}>
            <div className={styles.cell}>
              <div className={styles.label}>Style</div>
              <Dropdown
                className={styles.dropdown}
                value={sport}
                setValue={setSport}
                options={sportOptions}
              />
            </div>
            <div className={styles.cell}>
              <div className={styles.label}>time of day</div>
              <Dropdown
                className={styles.dropdown}
                value={time}
                setValue={setTime}
                options={timeOptions}
              />
            </div>
            <div className={styles.cell}>
              <div className={styles.label}>DIFFICULTY</div>
              <Dropdown
                className={styles.dropdown}
                value={difficulty}
                setValue={setDifficulty}
                options={difficultyOptions}
              />
            </div>
            <div className={styles.cell}>
              <div className={styles.label}>INTENSITY</div>
              <Dropdown
                className={styles.dropdown}
                value={level}
                setValue={setLevel}
                options={levelOptions}
              />
            </div>
          </div>
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <Card className={styles.card} item={x} key={index} />
          ))}
        </div>
        <div className={styles.btns}>
          <button className={cn("button-stroke", styles.button)}>
            <span>Discover more</span>
            <Icon name="arrow-bottom" size="8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
