import React from "react";
import Header from "../components/header";
import styles from "../styles/Index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftSidebar from "../components/left-sidebar/left-sidebar";
import PostItem from "../components/post-item/post-item";
import RightSidebar from "../components/right-sidebar/right-sidebar";

export default function Index() {
  return (
    <div className={styles.container}>
      <Header />
      <div style={{ paddingTop: 84 }} className="container">
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
      <footer>Footer</footer>
    </div>
  );
}
