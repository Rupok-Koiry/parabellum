import React, { useEffect, useState, useMemo } from "react";

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

  return useMemo(() => windowSize, [windowSize]);
};

const Challenge = ({ type, bgImg, className, content, order }) => {
  const windowSize = useWindowSize();
  const isLargeScreen = useMemo(() => windowSize > 768, [windowSize]);
  const isPageAndLargeScreen = type === "page" && isLargeScreen;

  let modifiedChildren = React.Children.toArray(content.lower.props.children);

  if (isPageAndLargeScreen) {
    let h4Content = "";
    let h4Removed = false;

    modifiedChildren = modifiedChildren.map((child, index, arr) => {
      // Use optional chaining and destructuring assignment
      const { type, props: { children } = {} } = child;

      if (React.isValidElement(child) && type === "h4") {
        h4Content = children;
        h4Removed = true;
        return null; // Will remove h4 tag later
      }

      // If previous tag was h4, merge this content with h4 content
      if (h4Removed && index > 0 && arr[index - 1]?.type === "h4") {
        return React.cloneElement(child, {}, h4Content + " " + children);
      }

      return child;
    });

    // Remove null entries (removed h4 tags)
    modifiedChildren = modifiedChildren.filter((child) => child !== null);
  }

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
            {isPageAndLargeScreen && content.upper}
            {modifiedChildren}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
