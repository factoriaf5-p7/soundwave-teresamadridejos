import styles from "./Footer.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { ReactElement } from "react";

type FooterElements = {
  name: string;
  icon?: ReactElement;
}[];

export const Footer = () => {
  const footerElements: FooterElements = [
    { name: "About Us" },
    { name: "Contact" },
    { name: "Twitter", icon: <TwitterIcon className={styles.icon} /> },
    { name: "Facebook", icon: <FacebookIcon className={styles.icon} /> },
  ];

  return (
    <div className={styles.footer}>
      <div className={styles.footerLeft}>
        <ul>
          {footerElements.map(({ name, icon }) => {
            if (!icon) {
              return <li>{name}</li>;
            }
          })}
        </ul>
      </div>

      <div className={styles.footerRight}>
        <ul>
          {footerElements.map(({ name, icon }) => {
            if (icon) {
              return (
                <li>
                  {icon}
                  {name}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};
