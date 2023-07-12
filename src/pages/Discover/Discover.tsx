import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import styles from "./Discover.module.css";
import Albums from "../../assets/covers.jpg";
import Button from "@mui/material/Button";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import MicExternalOnOutlinedIcon from "@mui/icons-material/MicExternalOnOutlined";
import LayersIcon from "@mui/icons-material/Layers";

export const Discover = () => {
  return (
    <>
      <NavBar />
      <div className={styles.discoverContainer}>
        <div className={styles.discoverContainerLeft}>
          <div>
            <h1 className={styles.title}>Discover new music</h1>
          </div>
          <div className={styles.buttons}>
            <Button
              sx={{
                backgroundColor: "#211F27",
                borderRadius: "0",
              }}
              variant="contained"
              className={styles.buttonContainer}
            >
              <div>
                <MicExternalOnOutlinedIcon
                  sx={{
                    fontSize: "30px",
                  }}
                />
              </div>
              <div className={styles.buttonText}>Charts</div>
            </Button>
            <Button
              sx={{
                backgroundColor: "#211F27",
                borderRadius: "0",
              }}
              variant="contained"
              className={styles.buttonContainer}
            >
              <div>
                <LayersIcon
                  sx={{
                    fontSize: "30px",
                  }}
                />
              </div>
              <div className={styles.buttonText}>Albums</div>
            </Button>
            <Button
              sx={{
                backgroundColor: "#211F27",
                borderRadius: "0",
              }}
              variant="contained"
              className={styles.buttonContainer}
            >
              <div>
                <ExpandCircleDownOutlinedIcon
                  sx={{
                    fontSize: "30px",
                  }}
                  className={styles.moreIcon}
                />
              </div>
              <div className={styles.buttonText}>More</div>
            </Button>
          </div>

          <p>
            By joining you can benefit by listening to the latest albums
            released.
          </p>
        </div>

        <div className={styles.discoverContainerRight}>
          <img src={Albums} className={styles.albums} alt="Albums" />
        </div>

        <Footer />
      </div>
    </>
  );
};
