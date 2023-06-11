import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const MainLayout = ({ children, headerBg = "dark" }) => {
  return (
    <React.Fragment>
      <Header headerBg={headerBg} />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
