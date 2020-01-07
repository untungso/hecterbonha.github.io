import React from "react";
import { LayoutManager } from "../components/LayoutManager";
import { FullScreenFix } from "../components/FullScreenFix";

export default () => {
  const name: string = "Untung So Andryanto";

  return (
    <LayoutManager htmlHeadTitle="Home">
      <FullScreenFix
        backgroundColor="var(--darkPurple)"
        textColor="var(--white)"
        borderColor="var(--white)"
      >
        <div className="inner">
          <p className="p-class">Build. Experiment. Grow. Learn.</p>
          <h1>USX ラボラトリー</h1>
          <h3>by {name}</h3>
        </div>
      </FullScreenFix>
      <style jsx>{`
        .usx-icon {
          width: 240px;
        }
        .inner {
          max-width: 380px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          border: 2px solid var(--white);
          background-color: var(--black);
          padding: 32px;
        }
        .p-class {
          margin-bottom: 16px;
        }
        @media only screen and (max-width: 600px) {
          .inner {
            padding: 16px 8px;
          }
        }
      `}</style>
    </LayoutManager>
  );
};
