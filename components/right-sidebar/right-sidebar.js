import { ArrowBackIos } from "@material-ui/icons";
import React from "react";
import styles from "./right-sidebar.module.css";
function RightSidebar() {
  return (
    <div className="col-md-3 col-sm-12">
      <div id={styles.rightSidebarSection}>
        <div className={styles.titleContainer}>
          <h5>#teknoloji</h5>
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
          <h5>#bilim</h5>
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

export default RightSidebar;
