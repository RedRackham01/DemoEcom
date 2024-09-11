import React from "react";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: "85vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
