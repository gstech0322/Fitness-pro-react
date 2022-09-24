import React from "react";
import styles from "./Class02Details.module.sass";
import Hero from "./Hero";
import Programs from "../../components/Programs";

const Class02Details = () => {
  return (
    <>
      <Hero />
      <Programs
        classNameSection="section-pb"
        classNameTitle="h2"
        title="You may interested"
      />
    </>
  );
};

export default Class02Details;
