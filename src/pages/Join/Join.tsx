import { Footer } from "../../components/Footer/Footer";
import { Form } from "../../components/Form/Form";
import { NavBar } from "../../components/NavBar/NavBar";
import styles from "./Join.module.css";

export const Join = () => {
  const {
    layout,
    joinContainer,
    joinContainerLeft,
    joinContainerRight,
    title,
    titlePink,
    background,
    circles,
    circlePink,
    circlePurpleSmall,
  } = styles;

  return (
    <>
      <div className={layout}>
        <NavBar />
        <main className={joinContainer}>
          <section className={joinContainerLeft}>
            <h1 className={title}>Join the </h1>
            <h1 className={titlePink}>fun.</h1>
          </section>

          <section className={joinContainerRight}>
            <Form />
          </section>

          <Footer />
        </main>
      </div>

      <div className={background}></div>
      <div className={circles}>
        <div className={circlePink}></div>
        <div className={circlePurpleSmall}></div>
      </div>
    </>
  );
};
