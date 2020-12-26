import React from "react";
import { useRouter } from "next/router";
import styles from "./topic.module.css";

function Topic() {
  const router = useRouter();
  const { topic } = router.query;
  return (
    <div className="container single">
      <div className="row">
        <div className={styles.mainContainer + " col-md-8 p-4 mr-12 col-sm-12"}>
          <h2 className={styles.title}>
            Image Preview Before Upload In VueJS Project
          </h2>
          <div id={styles.tagsContainer} className="d-flex">
            <span className={styles.tagContainer}>#javascript</span>
            <span className={styles.tagContainer}>#webdev</span>
            <span className={styles.tagContainer}>#beginners</span>
          </div>

          <p>Hi Everyone, Hope you are doing well and staying safe,</p>

          <p>
            Today I will be sharing with you the small snippet of code that can
            help you to preview the image the user before it gets uploaded
          </p>

          <p>Create a Directory and File. </p>

          <p>mixins/ImagePreviewMixin.vue</p>
        </div>
        <div className={styles.rightSidebar + " col-md-4 col-sm-12"}></div>
      </div>
    </div>
  );
}

export default Topic;
