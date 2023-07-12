import { Footer } from "../../components/Footer/Footer";
import { Form } from "../../components/Form/Form";
import { NavBar } from "../../components/NavBar/NavBar";
import styles from "./Join.module.css";

export const Join = () => {
  return (
    <>
      <div className={styles.layout}>
        <NavBar />
        <div className={styles.joinContainer}>
          <div className={styles.joinContainerLeft}>
          <h1 className={styles.title}>
              Join the <h2>fun.</h2>
            </h1>
          </div>

          <div className={styles.joinContainerRight}>
            <Form />
          </div>

          <Footer />
        </div>
      </div>

      <div className={styles.background}></div>
      <div className={styles.circles}>
        <div className={styles.circlePink}></div>
        <div className={styles.circlePurpleSmall}></div>
      </div>
    </>
  );
};
