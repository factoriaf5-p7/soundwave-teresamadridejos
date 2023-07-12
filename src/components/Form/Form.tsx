import { Box, FormControl, TextField, Typography } from "@mui/material";
import styles from "./Form.module.css";
import { JoinBtnForm } from "./JoinBtnForm/JoinBtnForm";

export const Form = () => {
  const { formContainer, typeName, type } = styles;

  return (
    <div className={formContainer}>
      <Box>
        <Typography variant="body1" className={typeName}>
          Name:
        </Typography>
        <FormControl>
          <TextField
            fullWidth
            variant="standard"
            inputProps={{
              style: {
                border: "1px solid #2C2C55",
                borderRadius: "6px",
                width: "320px",
                color: "white",
              },
            }}
            required
          />
        </FormControl>

        <Typography variant="body1" className={type}>
          Email:
        </Typography>
        <FormControl>
          <TextField
            fullWidth
            variant="standard"
            inputProps={{
              style: {
                border: "1px solid #2C2C55",
                borderRadius: "6px",
                width: "320px",
                color: "white",
              },
            }}
            required
          />
        </FormControl>

        <Typography variant="body1" className={type}>
          Password:
        </Typography>
        <FormControl>
          <TextField
            fullWidth
            type="password"
            variant="standard"
            inputProps={{
              style: {
                border: "1px solid #2C2C55",
                borderRadius: "6px",
                width: "320px",
                color: "white",
              },
            }}
            required
          />
        </FormControl>
      </Box>
      <JoinBtnForm />
    </div>
  );
};
