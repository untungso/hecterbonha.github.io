import React from "react";
import { LayoutManager } from "../components/LayoutManager";

export default () => {
  const name: string = "Untung So Andryanto";
  return (
    <LayoutManager htmlHeadTitle="Home">
      <div className="wrapper">
        <div className="nav-wrapper">
          <div className="nav-button">.about</div>
          <div className="nav-button">.blog</div>
          <div className="nav-button">.labo</div>
        </div>
        <div className="inner">
          <p className="p-class">Build. Experiment. Grow.</p>
          <h1>USX ラボラトリー</h1>
          <h3>by {name}</h3>
        </div>
      </div>
      <style jsx>{`
        .usx-icon {
          width: 240px;
        }
        .wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - 16px);
          min-width: calc(100vw - 16px);
          background-color: var(--darkPurple);
          color: var(--white);
          border: 8px solid var(--white);
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
        .nav-wrapper {
          display: flex;
          flex-direction: row;
        }
        .nav-button {
          margin: 16px;
          background-color: var(--black);
          padding: 8px;
          border: 2px solid var(--white);
        }
        .nav-button:hover {
          cursor: pointer;
        }
        .nav-button:active {
          background-color: var(--white);
          color: var(--black);
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
