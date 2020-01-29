import React from "react";
import { LayoutManager } from "../components/LayoutManager";
import { FullScreenFix } from "../components/FullScreenFix";

const TechStack: React.FC = () => {
  return (
    <LayoutManager htmlHeadTitle="Labo" noFootman={true}>
      <FullScreenFix
        backgroundColor="var(--pink)"
        textColor="var(--black)"
        borderColor="var(--indigo)"
      >
        <div className="inner">
          <h1>Labo</h1>
          <div style={{ height: "16px" }}></div>
          <p>Showcase of experiment</p>
          <div style={{ height: "16px" }}></div>
        </div>
      </FullScreenFix>
      <style jsx>{`
        .inner {
          padding: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .usx {
          width: 180px;
          border: 2px solid var(--white);
          margin-bottom: 32px;
        }
        .link {
          color: var(--black);
          margin: 4px 8px 0px 0px;
          border: 2px solid var(--black);
          background-color: var(--white);
          padding: 8px 16px;
        }
        .link:hover {
          cursor: pointer;
        }
      `}</style>
    </LayoutManager>
  );
};

export default TechStack;
