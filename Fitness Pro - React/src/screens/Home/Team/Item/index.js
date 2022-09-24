import React, { useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import ModalTrainer from "../../../../components/ModalTrainer";

const Item = ({ item, className }) => {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <>
      <div
        className={cn(styles.item, className)}
        onClick={() => setVisibleModal(true)}
      >
        <div className={styles.avatar}>
          <img src={item.image} alt="Avatar" />
        </div>
        <div className={styles.man}>{item.name}</div>
        <div className={styles.position}>{item.position}</div>
      </div>
      <ModalTrainer
        visible={visibleModal}
        item={item}
        onClose={() => setVisibleModal(false)}
      />
    </>
  );
};

export default Item;
