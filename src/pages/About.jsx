import React from "react";
import Challenge from "../components/Challenge/Challenge";
import about from "../assets/images/about.png";
import MainLayout from "./MainLayout";

const About = () => {
  return (
    <MainLayout>
      <Challenge
        type="page"
        bgImg={about}
        className="espionage"
        content={{
          upper: (
            <React.Fragment>
              <h2 className="about-page-title">
                ABOUT <br /> PARABELLUM
              </h2>
            </React.Fragment>
          ),
          lower: (
            <React.Fragment>
              <p className="about-page-text">
                Ultimate capability. Calm in adversity.Parabellum offers
                tailored training programmes and unique, intelligent experiences
                to equip elite individuals with the skills, intuition and
                preparation they require to function professionally at the
                highest level.
              </p>
              <p className="about-page-text">
                Founded by members of Israeli intelligence communities and elite
                special forces, Parabellum’s philosophy and services are based
                on advanced knowledge of espionage, survival, anti-terrorism,
                hostage negotiation, combat and psychological warfare methods.
              </p>
              <p className="about-page-text">
                The Parabellum experience is designed to challenge physically,
                emotionally and intellectually. Tailor-made to each client’s
                capabilities and resulting in better focus, preparation and
                ability to deal with extreme stress and unconventional,
                highly-charged situations
              </p>
            </React.Fragment>
          ),
        }}
        order={{
          lg: [0, 1],
          sm: [0, 1],
        }}
      />
    </MainLayout>
  );
};

export default About;
