import React from "react";
import { useRouter } from "next/router";
import styles from "./topic.module.css";
import Layout from "../../components/layout/layout";
import { Form } from "react-bootstrap";
import {
  FavoriteBorderOutlined,
  BookmarkBorderOutlined,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

function Topic() {
  const router = useRouter();
  const { topic } = router.query;

  const leftBarItem = () => {
    return (
      <div className={styles.leftBarItem}>
        <FavoriteBorderOutlined className={styles.leftBarIcon} />
        <p>12</p>
      </div>
    );
  };

  return (
    <Layout>
      <div className="container single">
        <div className={styles.mainRow + " row"}>
          <div className="col-md-1 col-sm-1">
            {leftBarItem()}
            {leftBarItem()}
            {leftBarItem()}
            {leftBarItem()}
            {leftBarItem()}
          </div>
          <div className={styles.mainContainer + " col-md-8 mr-12 col-sm-12"}>
            <div className={styles.mainChild + " col"}>
              <h2 className={styles.title}>
                Image Preview Before Upload In VueJS Project
              </h2>
              <div id={styles.tagsContainer} className="d-flex">
                <span className={styles.tagContainer}>#javascript</span>
                <span className={styles.tagContainer}>#webdev</span>
                <span className={styles.tagContainer}>#beginners</span>
              </div>
              <div className={styles.content}>
                <p>Hi Everyone, Hope you are doing well and staying safe,</p>

                <p>
                  Today I will be sharing with you the small snippet of code
                  that can help you to preview the image the user before it gets
                  uploaded
                </p>

                <p>Create a Directory and File. </p>

                <p>mixins/ImagePreviewMixin.vue</p>
              </div>
              <hr style={{ margin: "48px 0" }} />
              <h5 className={styles.title}>Tartışma (16)</h5>
              <div className={styles.discussonContainer + " row d-flex"}>
                <Avatar src="https://res.cloudinary.com/practicaldev/image/fetch/s--IRg7BHb_--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/443240/50a350f7-8199-4912-9add-bb54336cf107.jpg" />
                <Form.Group
                  className={styles.formGroup}
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    placeholder="Ne düşünüyorsun"
                    as="textarea"
                    rows={1}
                  />
                </Form.Group>

                <div className={styles.commentContainer}>
                  <div className="d-flex">
                    <Avatar src="https://res.cloudinary.com/practicaldev/image/fetch/s--IRg7BHb_--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/443240/50a350f7-8199-4912-9add-bb54336cf107.jpg" />
                    <p>asdadasd</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.mainChild + " col"}>
              <h5 className={styles.title}>Read Next</h5>
            </div>
          </div>
          <div className={styles.rightSidebar + " col-md-3 col-sm-12"}></div>
        </div>
      </div>
    </Layout>
  );
}

export default Topic;
