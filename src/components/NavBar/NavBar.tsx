import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";

type PageRoutes = {
  name?: string;
  link: string;
  className: string;
  leftSide?: boolean;
}[];

export const NavBar = () => {
  const pageRoutes: PageRoutes = [
    { name: "Discover", link: "/discover", className: "discover" },
    { name: "Join", link: "/join", className: "join" },
  ];

  return (
    <div className={styles.navBar}>
      <div className={styles.navBarLeft}>
        <img src={logo} alt="Logo" />
        <Link to="/" className={styles.soundwave}>
          Soundwave
        </Link>
      </div>

      <div className={styles.navLinks}>
        {pageRoutes.map(({ name, link, className }) => (
          <Link
            key={name}
            to={link}
            className={`${styles.navLink} ${styles[className]}`}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};
