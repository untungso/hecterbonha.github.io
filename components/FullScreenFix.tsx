import React, { useEffect, useState, ReactChild } from "react";

interface FullscreenFixInterface {
  children: ReactChild | ReactChild[];
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
}

const FullScreenFix: React.FC<FullscreenFixInterface> = props => {
  const [fullScreenHeight, setFullScreenHeight] = useState<any>("100vh");
  const [fullScreenWidth, setFullScreenWidth] = useState<any>("100vw");

  useEffect(() => {
    if (process.browser) {
      setFullScreenHeight(`${window.innerHeight}px`);
      setFullScreenWidth(`${document.body.clientWidth}px`);
    }
  }, []);
  return (
    <React.Fragment>
      <div className="wrapper">{props.children}</div>
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: calc(${fullScreenHeight} - 16px);
          min-width: calc(${fullScreenWidth} - 16px);
          background-color: ${props.backgroundColor ? props.backgroundColor : "var(--darkPurple)"};
          color: ${props.textColor ? props.textColor : "var(--white)"};
          border: 8px solid ${props.borderColor ? props.borderColor : "var(--white)"};
        }
      `}</style>
    </React.Fragment>
  );
};

export { FullScreenFix };
