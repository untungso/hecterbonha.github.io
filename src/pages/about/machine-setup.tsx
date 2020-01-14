import React from "react";
import { LayoutManager } from "../../components/LayoutManager";
import Link from "next/link";
import { FullScreenFix } from "../../components/FullScreenFix";

const MachineSetup: React.FC = () => {
  return (
    <LayoutManager htmlHeadTitle="About">
      <FullScreenFix
        backgroundColor="var(--darkBlue)"
        textColor="var(--white)"
        borderColor="var(--red)"
      >
        <div className="inner">
          <h1>Machine Setup 💻</h1>
          <div style={{ height: "16px" }}></div>
          <p>My current development setup for hobby and weekend project</p>
          <div style={{ height: "16px" }}></div>
          <h5 style={{ color: "var(--darkGreen)" }}>Machine :</h5>
          <p>Thiccc Thonkpad E450</p>
          <h5 style={{ color: "var(--darkGreen)" }}>OS :</h5>
          <p>SolusOS</p>
          <h5 style={{ color: "var(--darkGreen)" }}>IDE :</h5>
          <p>VSCode, Atom, nano</p>
          <h5 style={{ color: "var(--darkGreen)" }}>Tools :</h5>
          <p>Hyper, zsh, Notion</p>
          <div style={{ display: "flex", flexDirection: "row", marginTop: "16px" }}>
            <Link href="/about">
              <div className="link">.whoami</div>
            </Link>
            <Link href="/about/tech-stack">
              <div className="link">.techstack</div>
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

export default MachineSetup;
