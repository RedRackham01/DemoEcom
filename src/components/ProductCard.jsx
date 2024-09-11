import { Paper } from "@mui/material";
import { styled } from "@mui/material";

const ProductCard = styled(Paper)({
  padding: "16px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  transition: "transform 0.3s, box-shadow 0.3s",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  justifyContent:"space-between",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
  },
  color:"#afafad",
  backgroundColor:"transparent",
  border:"1px solid #b3c7ff"
});

export default ProductCard;
