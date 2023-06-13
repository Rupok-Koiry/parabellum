import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="banner">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CSSTransition
          in={!isHovered}
          timeout={1000}
          classNames="fade"
          unmountOnExit
        >
          <h1>
            SI VIS <span>PACEM</span> PARA BELLUM
          </h1>
        </CSSTransition>
        <CSSTransition
          in={isHovered}
          timeout={1000}
          classNames="fade"
          unmountOnExit
        >
          <h1>
            IF YOU
            <span>WANT PEACE</span>
            PREPARE FOR WAR
          </h1>
        </CSSTransition>
      </div>
    </div>
  );
};
export default Banner;
