import { Avatar } from "@material-ui/core";
import React from "react";
import styles from "./post-item.module.css";
import { FavoriteBorderOutlined, ChatBubbleOutline } from "@material-ui/icons";
import Link from "next/link";

function PostItem({ title }) {
  return (
    <div id={styles.postItem} className="col">
      <div className="col-md-12">
        <div id={styles.user_meta} className="d-flex">
          <Avatar src="https://res.cloudinary.com/practicaldev/image/fetch/s--IRg7BHb_--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/443240/50a350f7-8199-4912-9add-bb54336cf107.jpg" />
          <div className={styles.metaContainer}>
            <p className={styles.username}>right7ctrl</p>
            <p className={styles.date}>12 Aralık</p>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <Link href="/login">
            <h5 className={styles.title}>{title}</h5>
          </Link>
          <div id={styles.tagsContainer} className="d-flex">
            <span className={styles.tagContainer}>#javascript</span>
            <span className={styles.tagContainer}>#webdev</span>
            <span className={styles.tagContainer}>#beginners</span>
          </div>
          <div id={styles.statsContainer} className="d-flex">
            <span className={styles.statItem}>
              <FavoriteBorderOutlined className={styles.statIcon} />
              <p>3 Beğeni</p>
            </span>
            <span className={styles.statItem}>
              <ChatBubbleOutline className={styles.statIcon} />
              <p>29 Yorum</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
