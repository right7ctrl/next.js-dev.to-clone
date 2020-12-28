import React from "react";
import styles from "./comment-item.module.css";
import { Avatar } from "@material-ui/core";
function CommentItem({ content }) {
  return (
    <div className={styles.commentContainer}>
      <div className="d-flex">
        <Avatar
          className={styles.avatar}
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--IRg7BHb_--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/443240/50a350f7-8199-4912-9add-bb54336cf107.jpg"
        />
        <div className={styles.innerCommentContainer}>
          <div className={styles.title}>
            <h6>right7ctrl</h6>
            <span className={styles.date}>28 Kasım</span>
          </div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
