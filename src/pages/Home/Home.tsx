import Girl from "../../assets/landing-page-girl.png";
import { JoinBtn } from "../../components/JoinBtn/JoinBtn";
import { NavBar } from "../../components/NavBar/NavBar";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <div className={styles.layout}>
        <NavBar />

        <div className={styles.homeContainer}>
          <div className={styles.homeContainerLeft}>
            <img
              src={Girl}
              className={styles.girlBackground}
              alt="Landing page girl"
            />
          </div>

          <div className={styles.homeContainerRight}>
            <div className={styles.homeContainerContentRight}>
              <h1 className={styles.title}>Feel The Music</h1>
              <div className={styles.subtitleContainer}>
                <h3 className={styles.subtitle}>
                  Stream over 20 thousand songs with one click
                </h3>
              </div>
              <JoinBtn />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.background}></div>
      <div className={styles.circles}>
        <div className={styles.circlePink}></div>
        <div className={styles.circlePurpleSmall}></div>
        <div className={styles.circlePurpleBig}></div>
      </div>
    </>
  );
};
