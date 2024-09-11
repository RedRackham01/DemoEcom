import { Box, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlexBetween from "../FlexBetween.jsx";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <FlexBetween padding="1rem 6%" backgroundColor={"#23262f"} borderBottom={"1px solid black"}>
      <Box>
        <ShoppingCartIcon fontSize="large" style={{ color: "#b3c7ff" }} />
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" gap="0.5rem">
        <Typography
          fontSize={"2rem"}
          color="#b3c7ff"
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}>
          DemoEcom
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" gap="0.5rem">
        <Button onClick={() => navigate("/")} variant="outlined" color="primary">
          Go Back
        </Button>
      </Box>
    </FlexBetween>
  );
};

export default Navbar;
