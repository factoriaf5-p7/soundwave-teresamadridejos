import styles from "./Footer.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { ReactElement } from "react";

type FooterElement = {
  name: string;
  icon?: ReactElement;
};

const footerElements: FooterElement[] = [
  { name: "About Us" },
  { name: "Contact" },
  { name: "Twitter", icon: <TwitterIcon className={styles.icon} /> },
  { name: "Facebook", icon: <FacebookIcon className={styles.icon} /> },
];

export const Footer = () => {
  const { footer, footerLeft, footerRight} = styles;

  return (
    <footer className={footer}>
      <div className={footerLeft}>
        <ul>
          {footerElements.map(({ name, icon }) => {
            if (!icon) {
              return <li key={name}>{name}</li>;
            }
            return null;
          })}
        </ul>
      </div>

      <div className={footerRight}>
        <ul>
          {footerElements.map(({ name, icon }) => {
            if (icon) {
              return (
                <li key={name}>
                  {icon}
                  {name}
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </footer>
  );
};
