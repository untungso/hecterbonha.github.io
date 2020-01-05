import React from "react";
import { LayoutManager } from "../../components/LayoutManager";
import Link from "next/link";

const AboutIndex = () => {
  return (
    <LayoutManager htmlHeadTitle="About">
      <div className="wrapper">
        <div className="inner">
          <img src="/UUe46eY5_400x400.jpg" alt="Untung So Andryanto" className="usx" />
          <h1>Hallo! 👋</h1>
          <h4>My name is</h4>
          <h2>Untung So Andryanto</h2>
          <h4>and I build solution stack for people, web, application, and server.</h4>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Link href="/about/tech-stack">
              <div className="link">Tech Stack</div>
            </Link>
            <Link href="/about/machine-setup">
              <div className="link">Machine Setup</div>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - 16px);
          min-width: calc(100vw - 16px);
          background-color: var(--darkGray);
          color: var(--white);
          border: 8px solid var(--white);
        }
        .inner {
          padding: 8px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .usx {
          width: 180px;
          border: 2px solid var(--white);
          margin-bottom: 32px;
        }
        .link {
          color: var(--orange);
          margin: 4px 8px 0px 0px;
        }
      `}</style>
    </LayoutManager>
  );
};

export default AboutIndex;
