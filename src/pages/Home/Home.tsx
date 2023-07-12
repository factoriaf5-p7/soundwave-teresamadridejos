import Girl from "../../assets/landing-page-girl.png";
import { JoinBtn } from "../../components/JoinBtn/JoinBtn";
import { NavBar } from "../../components/NavBar/NavBar";
import styles from "./Home.module.css";


export const Home = () => {
  const {
    layout,
    homeContainer,
    homeContainerLeft,
    homeContainerRight,
    girlBackground,
    homeContainerContentRight,
    title,
    subtitleContainer,
    subtitle,
    background,
    circles,
    circlePink,
    circlePurpleSmall,
    circlePurpleBig,
  } = styles;

  return (
    <>
      <div className={layout}>
        <NavBar />

        <main className={homeContainer}>
          <section className={homeContainerLeft}>
            <img
              src={Girl}
              className={girlBackground}
              alt="Landing page girl"
            />
          </section>

          <section className={homeContainerRight}>
            <div className={homeContainerContentRight}>
              <h1 className={title}>Feel The Music</h1>
              <div className={subtitleContainer}>
                <h3 className={subtitle}>
                  Stream over 20 thousand songs with one click
                </h3>
              </div>
              <JoinBtn />
            </div>
          </section>
        </main>
      </div>
      <div className={background}></div>
      <div className={circles}>
        <div className={circlePink}></div>
        <div className={circlePurpleSmall}></div>
        <div className={circlePurpleBig}></div>
      </div>
    </>
  );
};
