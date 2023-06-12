import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
const MainLayout = ({ children, headerBg = "dark" }) => {
  return (
    <React.Fragment>
      <Header headerBg={headerBg} />
      <main>{children}</main>
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
