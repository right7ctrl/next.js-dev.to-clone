import React from "react";

import styles from "../styles/Index.module.css";
import Layout from "../components/layout/layout";
import LeftSidebar from "../components/left-sidebar/left-sidebar";
import PostItem from "../components/post-item/post-item";
import RightSidebar from "../components/right-sidebar/right-sidebar";

export default function Index() {
  return (
    <div className={styles.container}>
      <Layout>
        <div className="container">
          <div className="row">
            <LeftSidebar />
            <div className="col-md-7 col-sm-8">
              <div className="row">
                <h5 style={{ textAlign: "left" }}>Posts</h5>
              </div>
              <PostItem title="My Advice to New Programmers After Coding for the Last 3 Years" />
              <PostItem title="3 ways to empty an Array in JavaScript" />
              <PostItem title="Responsive Website using CSS Grid" />
              <PostItem title="My Advice to New Programmers After Coding for the Last 3 Years" />
              <PostItem title="My Advice to New Programmers After Coding for the Last 3 Years" />
              <PostItem title="My Advice to New Programmers After Coding for the Last 3 Years" />
              <PostItem title="My Advice to New Programmers After Coding for the Last 3 Years" />
              <PostItem title="My Advice to New Programmers After Coding for the Last 3 Years" />
              <PostItem title="My Advice to New Programmers After Coding for the Last 3 Years" />
              <PostItem title="My Advice to New Programmers After Coding for the Last 3 Years" />
              <PostItem title="My Advice to New Programmers After Coding for the Last 3 Years" />
              <PostItem title="My Advice to New Programmers After Coding for the Last 3 Years" />
            </div>

            <RightSidebar />
          </div>
        </div>
      </Layout>
    </div>
  );
}
