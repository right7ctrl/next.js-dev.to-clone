import { TrendingUp, Assignment } from "@material-ui/icons";
import React from "react";
import styles from "./topic-right-sidebar.module.css";

function TopicRightSidebar() {
  return (
    <div className="col-md-3 col-sm-12">
      <div id={styles.rightSidebarSection}>
        <div className={styles.titleContainer}>
          <h5>
            <Assignment />
            Benzer İşler
          </h5>
        </div>
        <div className={styles.sidebarItem}>
          <p>Teknoloji tarihinin en önemli cihazı nedir?</p>
        </div>
        <div className={styles.sidebarItem}>
          <p>How make `ListGroup` clickable with a hyperlink?</p>
        </div>
        <div className={styles.sidebarItem}>
          <p>How make `ListGroup` clickable with a hyperlink?</p>
        </div>
        <div className={styles.sidebarItem}>
          <p>How make `ListGroup` clickable with a hyperlink?</p>
        </div>
      </div>
      <div id={styles.rightSidebarSection}>
        <div className={styles.titleContainer}>
          <h5>
            <TrendingUp />
            Popülerimsi
          </h5>
        </div>
        <div className={styles.sidebarItem}>
          <p>How make `ListGroup` clickable with a hyperlink?</p>
        </div>
        <div className={styles.sidebarItem}>
          <p>How make `ListGroup` clickable with a hyperlink?</p>
        </div>
        <div className={styles.sidebarItem}>
          <p>How make `ListGroup` clickable with a hyperlink?</p>
        </div>
        <div className={styles.sidebarItem}>
          <p>How make `ListGroup` clickable with a hyperlink?</p>
        </div>
      </div>
    </div>
  );
}

export default TopicRightSidebar;
