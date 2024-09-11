import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MultiForm from "./pages/MultiForm.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./styles/theme.js";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/multiform" element={<MultiForm />} />
          <Route path="/productpage" element={<ProductPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
