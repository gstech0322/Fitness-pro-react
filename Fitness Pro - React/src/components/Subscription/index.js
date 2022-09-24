import React, { useState } from "react";
import cn from "classnames";
import styles from "./Subscription.module.sass";
import Icon from "../Icon";

const Subscription = ({ className, placeholder }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <form
      className={cn(styles.form, className)}
      action=""
      onSubmit={() => handleSubmit()}
    >
      <input
        className={styles.input}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        placeholder={placeholder}
        required
      />
      <button className={styles.btn}>
        <Icon name="arrow-right" size="14" />
      </button>
    </form>
  );
};

export default Subscription;
