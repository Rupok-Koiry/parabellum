import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

// Custom hook for window size
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

const Challenge = ({ type, bgImg, className, link, content, order }) => {
  const windowSize = useWindowSize();

  const isLargeScreen = useMemo(() => windowSize > 768, [windowSize]);

  const lowerContentDesktop = useMemo(
    () => (
      <p>
        {content.lower.props.children[0].props.children}
        {content.lower.props.children[1].props.children}
      </p>
    ),
    [content.lower]
  );

  return (
    <section className={`${type}-challenges challenges`}>
      <div className="row m-0 p-0">
        <div
          className={`col-md-6 col-12 p-0 order-${
            order[isLargeScreen ? "lg" : "sm"][0]
          } ${className} challenge`}
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          {(!isLargeScreen || type === "section") && content.upper}
        </div>
        <div
          className={`col-md-6 col-12 p-0 order-${
            order[isLargeScreen ? "lg" : "sm"][1]
          }`}
        >
          <div className={`challenge-content ${className}-content`}>
            {type === "page" && isLargeScreen && content.upper}
            {type === "page" && isLargeScreen
              ? lowerContentDesktop
              : content.lower}
            {type === "page" && <Link to={link}>Details</Link>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
