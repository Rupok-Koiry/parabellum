import React from "react";
import Challenge from "../components/Challenge/Challenge";
import desert from "../assets/images/desert.jpg";
import MainLayout from "./MainLayout";
import { Link } from "react-router-dom";

const Desert = () => {
  return (
    <MainLayout>
      <Challenge
        type="page"
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
              <Link
                to="/espionage-challenge"
                className="link d-flex gap-3 align-items-center"
              >
                <i class="fa-light fa-less-than"></i> Espionage Challenge
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

export default Desert;
