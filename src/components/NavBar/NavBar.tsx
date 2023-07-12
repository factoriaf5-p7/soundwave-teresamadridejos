import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";

type PageRoute = {
  name: string;
  link: string;
  className: string;
};

type PageRoutes = PageRoute[];

export const NavBar = () => {
  const { navBar, navBarLeft, navLinks, soundwave, navLink, discover, join } =
    styles;

  const pageRoutes: PageRoutes = [
    { name: "Discover", link: "/discover", className: discover },
    { name: "Join", link: "/join", className: join },
  ];

  return (
    <nav className={navBar}>
      <div className={navBarLeft}>
        <img src={logo} alt="Logo" />
        <Link to="/" className={soundwave}>
          Soundwave
        </Link>
      </div>

      <ul className={navLinks}>
        {pageRoutes.map(({ name, link, className }) => (
          <li key={name}>
            <Link to={link} className={`${navLink} ${styles[className]}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
