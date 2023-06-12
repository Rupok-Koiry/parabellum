import React from "react";
import Challenge from "../components/Challenge/Challenge";
import espionage from "../assets/images/espionage-02.png";
import MainLayout from "./MainLayout";
import { Link } from "react-router-dom";

const Espionage = () => {
  return (
    <MainLayout>
      <Challenge
        type="page"
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
              <Link
                to="/desert-challenge"
                className="link text-white d-flex gap-3 align-items-center"
              >
                Desert Challenge <i class="fa-light fa-greater-than"></i>
              </Link>
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

export default Espionage;
