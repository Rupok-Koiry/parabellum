import React from "react";
import Banner from "../components/Banner/Banner";
import AboutUs from "../components/AboutUs/AboutUs";
import Video from "../components/Video/Video";
import Challenge from "../components/Challenge/Challenge";
import Contact from "../components/Contact/Contact";
import MainLayout from "./MainLayout";
const Home = () => {
  return (
    <MainLayout headerBg="light">
      <Banner />
      <AboutUs />
      <Video />
      <Challenge />
      <Contact />
    </MainLayout>
  );
};

export default Home;
