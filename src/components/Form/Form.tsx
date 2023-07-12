import { Box, FormControl, TextField, Typography } from "@mui/material";
import styles from "./Form.module.css";
import { JoinBtnForm } from "./JoinBtnForm/JoinBtnForm";

export const Form = () => {
  return (
    <div className={styles.formContainer}>
      <Box>
        <Typography className={styles.typeName}>Name:</Typography>
        <FormControl>
          <TextField
            sx={{
              border: "1px solid #2C2C55",
              borderRadius: "6px",
              width: "320px",
            }}
            fullWidth
            variant="standard"
            inputProps={{ style: { color: "white" } }}
          />
        </FormControl>

        <Typography className={styles.type}>Email:</Typography>
        <FormControl>
          <TextField
            sx={{
              border: "1px solid #2C2C55",
              borderRadius: "6px",
              width: "320px",
            }}
            fullWidth
            variant="standard"
            inputProps={{ style: { color: "white" } }}
          />
        </FormControl>

        <Typography className={styles.type}>Password:</Typography>
        <FormControl>
          <TextField
            sx={{
              border: "1px solid #2C2C55",
              borderRadius: "6px",
              width: "320px",
            }}
            fullWidth
            type="password"
            variant="standard"
            inputProps={{ style: { color: "white" } }}
          />
        </FormControl>
      </Box>
      <JoinBtnForm />
    </div>
  );
};
