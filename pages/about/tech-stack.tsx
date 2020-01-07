import React from "react";
import { LayoutManager } from "../../components/LayoutManager";
import Link from "next/link";
import { FullScreenFix } from "../../components/FullScreenFix";

const TechStack: React.FC = () => {
  return (
    <LayoutManager htmlHeadTitle="About">
      <FullScreenFix
        backgroundColor="var(--darkGreen)"
        textColor="var(--white)"
        borderColor="var(--blue)"
      >
        <div className="inner">
          <h1>My Stack 📚</h1>
          <div style={{ height: "16px" }}></div>
          <p>
            This is my go-to stack to handle both{" "}
            <span style={{ fontWeight: "bolder" }}>Professionals</span> and Hobby task
          </p>
          <div style={{ height: "16px" }}></div>
          <h5 style={{ color: "var(--darkBlue)" }}>Lang :</h5>
          <p>Javascript, Typescript, Go, Dart</p>
          <h5 style={{ color: "var(--darkBlue)" }}>Framework :</h5>
          <p>React, NextJS, Express, Echo, Flutter</p>
          <h5 style={{ color: "var(--darkBlue)" }}>Utils :</h5>
          <p>Jest, Cypress, Git</p>
          <div style={{ display: "flex", flexDirection: "row", marginTop: "16px" }}>
            <Link href="/about">
              <div className="link">.whoami</div>
            </Link>
            <Link href="/about/machine-setup">
              <div className="link">.hwinfo</div>
            </Link>
          </div>
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
