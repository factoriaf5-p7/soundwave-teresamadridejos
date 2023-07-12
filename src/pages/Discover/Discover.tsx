import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import styles from "./Discover.module.css";
import Albums from "../../assets/covers.jpg";
import Button, { ButtonProps } from "@mui/material/Button";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import MicExternalOnOutlinedIcon from "@mui/icons-material/MicExternalOnOutlined";
import LayersIcon from "@mui/icons-material/Layers";

type DiscoverButtonProps = {
  icon: React.ReactNode;
  text: string;
};

const DiscoverButton = ({ icon, text }: DiscoverButtonProps) => {
  return (
    <Button
      sx={{
        backgroundColor: "#211F27",
        borderRadius: "0",
      }}
      variant="contained"
      className={styles.buttonContainer}
    >
      <div>{icon}</div>
      <div className={styles.buttonText}>{text}</div>
    </Button>
  );
};

export const Discover = () => {
  const {
    discoverContainer,
    discoverContainerLeft,
    discoverContainerRight,
    title,
    buttons,
    albums,
  } = styles;

  return (
    <>
      <NavBar />
      <main className={discoverContainer}>
        <section className={discoverContainerLeft}>
          <div>
            <h1 className={title}>Discover new music</h1>
          </div>
          <div className={buttons}>
            <DiscoverButton
              icon={<MicExternalOnOutlinedIcon sx={{ fontSize: "30px" }} />}
              text="Charts"
            />
            <DiscoverButton
              icon={<LayersIcon sx={{ fontSize: "30px" }} />}
              text="Albums"
            />
            <DiscoverButton
              icon={
                <ExpandCircleDownOutlinedIcon
                  sx={{ fontSize: "30px" }}
                  className={styles.moreIcon}
                />
              }
              text="More"
            />
          </div>

          <p>
            By joining you can benefit by listening to the latest albums
            released.
          </p>
        </section>

        <section className={discoverContainerRight}>
          <img src={Albums} className={albums} alt="Albums" />
        </section>

        <Footer />
      </main>
    </>
  );
};
