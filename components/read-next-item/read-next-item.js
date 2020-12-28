import React from "react";
import { Avatar } from "@material-ui/core";
import styles from "./read-next-item.module.css";
function ReadNextItem() {
  return (
    <div className={styles.container}>
      <Avatar
        className={styles.avatar}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      >
        B
      </Avatar>
      <div className={styles.meta}>
        <h6 className={styles.title}>
          Image Preview Before Upload In VueJS Project
        </h6>
        <p className={styles.desc}>Fatih AydoGdu - Kasım 14</p>
      </div>
    </div>
  );
}

export default ReadNextItem;
