import React, { useRef } from "react";
import styles from "./Class02.module.sass";
import Hero from "./Hero";
import Trainers from "./Trainers";
import Community from "../../components/Community";
import Programs from "../../components/Programs";

const Class02 = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero scrollToRef={scrollToRef} />
      <Programs
        scrollToRef={scrollToRef}
        classNameTitle="h4"
        title="A special 1-on-1 workout program that gives you complete control
            over the volume for a perfect physique"
      />
      <Trainers />
      <Community />
    </>
  );
};

export default Class02;
