import { Outlet } from "react-router-dom";
import { NavBar } from "../../../components/NavBar/NavBar";
import styles from "./LayoutJoin.module.css";

export const LayoutJoin = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <NavBar />
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>
      <div className={styles.background}></div>
      <div className={styles.circles}>
        <div className={styles.circlePink}></div>
        <div className={styles.circlePurpleSmall}></div>
      </div>
    </div>
  );
};
