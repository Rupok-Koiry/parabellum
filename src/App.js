import "./App.css";
import React from "react";
import Banner from "./components/Banner/Banner";
import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Challenge from "./components/Challenge/Challenge";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <AboutUs />
      <Video />
      <Challenge />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
