import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const JoinBtn = () => {
  return (
    <Link to="/join">
      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          borderRadius: 2,
          paddingRight: 3,
          paddingLeft: 3,
          paddingTop: 1,
          paddingBottom: 1,
        }}
      >
        Join Now
      </Button>
    </Link>
  );
};
