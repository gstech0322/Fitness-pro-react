import React from "react";
import styles from "./Class01.module.sass";
import Breadcrumbs from "./Breadcrumbs";
import Catalog from "./Catalog";
import Testimonials from "../../components/Testimonials";

const Class01 = () => {
  return (
    <>
      <Breadcrumbs />
      <Catalog />
      <Testimonials className="section-pb" />
    </>
  );
};

export default Class01;
