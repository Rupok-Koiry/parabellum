import React from "react";
import Banner from "../components/Banner/Banner";
import AboutUs from "../components/AboutUs/AboutUs";
import Video from "../components/Video/Video";
import Challenge from "../components/Challenge/Challenge";
import MainLayout from "./MainLayout";
import espionage from "../assets/images/espionage-02.png";
import desert from "../assets/images/desert.jpg";
const Home = () => {
  return (
    <MainLayout headerBg="light">
      <Banner />
      <AboutUs />
      <Video />
      <Challenge
        type="section"
        bgImg={espionage}
        className="espionage"
        content={{
          upper: (
            <React.Fragment>
              <h2>
                ESPIONAGE <br />
                CHALLENGE
              </h2>
              <h3>Challenge 0001/2018</h3>
            </React.Fragment>
          ),
          lower: (
            <React.Fragment>
              <h4>You are undercover.</h4>
              <p>
                Your mission is conducted under real-life conditions. Tailored
                to your capabilities and personal profile, our Espionage
                experience challenges you across all areas and stretches the
                limits of both your skill set and your imagination.
              </p>
            </React.Fragment>
          ),
        }}
        order={{
          lg: [0, 1],
          sm: [0, 1],
        }}
      />
      <Challenge
        type="section"
        bgImg={desert}
        className="desert"
        content={{
          upper: (
            <React.Fragment>
              <h2>
                DESERT <br />
                CHALLENGE
              </h2>
              <h3>Challenge 0002/2018</h3>
            </React.Fragment>
          ),
          lower: (
            <React.Fragment>
              <h4>
                Dropped into desert conditions, this is a mission where
                preparation is key.
              </h4>
              <p>
                Combining a variety of techniques and real-life circumstances,
                you will need to understand your survival skills and
                capabilities to escape in order to save your life, and others.
                As you are pursued by elite special forces veterans you will
                encounter extreme events and deal with uncertain situations and
                a loss of control in order to learn mental and physical
                techniques for you to remain in control.
              </p>
            </React.Fragment>
          ),
        }}
        order={{
          lg: [1, 0],
          sm: [0, 1],
        }}
      />
      {/* <section className="challenges">
        <div className="row m-0 p-0">
          <div className="col-md-6 col-12 p-0 order-1">
            <div className="espionage challenge">
              <h2>
                ESPIONAGE <br />
                CHALLENGE
              </h2>
              <h3>Challenge 0001/2018</h3>
            </div>
          </div>
          <div className="col-md-6 col-12 p-0 order-2">
            <div className="challenge-content espionage-content">
              <h4>You are undercover.</h4>
              <p>
                Your mission is conducted under real-life conditions. Tailored
                to your capabilities and personal profile, our Espionage
                experience challenges you across all areas and stretches the
                limits of both your skill set and your imagination.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 p-0 order-md-3 order-4">
            <div className="challenge-content desert-content">
              <h4>
                Dropped into desert conditions, this is a mission where
                preparation is key.
              </h4>
              <p>
                Combining a variety of techniques and real-life circumstances,
                you will need to understand your survival skills and
                capabilities to escape in order to save your life, and others.
                As you are pursued by elite special forces veterans you will
                encounter extreme events and deal with uncertain situations and
                a loss of control in order to learn mental and physical
                techniques for you to remain in control.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 p-0 order-md-4 order-3">
            <div className="desert challenge">
              <h2>
                DESERT <br />
                CHALLENGE
              </h2>
              <h3>Challenge 0001/2018</h3>
            </div>
          </div>
        </div>
      </section> */}
    </MainLayout>
  );
};

export default Home;
