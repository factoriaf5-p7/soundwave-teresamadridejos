import { Outlet } from "react-router-dom";
import { NavBar } from "../../../components/NavBar/NavBar";
import styles from "./LayoutJoin.module.css";

export const LayoutJoin = () => {
  const {
    layout,
    content,
    outlet,
    background,
    circles,
    circlePink,
    circlePurpleSmall,
  } = styles;

  return (
    <div className={layout}>
      <div className={content}>
        <NavBar />
        <div className={outlet}>
          <Outlet />
        </div>
      </div>
      <div className={background}></div>
      <div className={circles}>
        <div className={circlePink}></div>
        <div className={circlePurpleSmall}></div>
      </div>
    </div>
  );
};
