import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import { Box, Card, Typography, CardActionArea, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ColorLensOutlined } from "@mui/icons-material";
import "../styles/Card.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Layout >
      <Box className="card-container">
        <Card className="home-page-card">
          <CardActionArea sx={{ width: "300px", p: "40px 40px" }} onClick={() => navigate("/multiform")}>
            <CardContent>
              <Typography variant="h5" component="div">
                Form Submission
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="home-page-card">
          <CardActionArea sx={{ width: "300px", p: "40px 60px" }} onClick={() => navigate("/productpage")}>
            <CardContent>
              <Typography variant="h5" component="div">
                ProductPage
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Layout>
  );
};

export default HomePage;
