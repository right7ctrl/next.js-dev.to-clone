import Head from "next/head";
import Header from "../components/header";
import styles from "../styles/Index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftSidebar from "../components/left-sidebar/left-sidebar";

export default function Index() {
  return (
    <div className={styles.container}>
      <Header />
      <LeftSidebar />
    </div>
  );
}
