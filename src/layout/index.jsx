import React from "react";
import Footer from "./footer";
import TopBar from "./top-bar";

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
