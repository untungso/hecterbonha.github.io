import React from "react";
import { LayoutManager } from "../../components/LayoutManager";
import { FullScreenFix } from "../../components/FullScreenFix";
import Link from "next/link";

const AboutBio = () => {
  return (
    <LayoutManager htmlHeadTitle="Untung So Andryanto" noFootman>
      <FullScreenFix
        backgroundColor="var(--darkGray)"
        textColor="var(--white)"
        borderColor="var(--peach)"
      >
        <div className="bio">
          <div style={{ fontSize: "5em", marginBottom: "16px" }}>🃏</div>
          <p>Hi! My name is Untung So Andryanto and I from Jakarta, Indonesia. 🇮🇩</p>
          <br />
          <p>Things I love lately include, but not limited to :</p>
          <ul style={{ marginLeft: "2em" }}>
            <li>Empowering people growth</li>
            <li>Scrum Agile</li>
            <li>Javascript/Typescript</li>
          </ul>
          <br />
          <p>
            Using <span style={{ fontWeight: "bolder", fontSize: "1.2em" }}>LINUX</span> since in my
            high school years for the sake of being different with other kids arround and felt cool.
            Guide me later into programming. Due to nature of configure it by yourself and the
            effort to go meticulously through the documentation.
          </p>
          <br />
          <p>
            Having no IT background doesn't stop me to pursue career in software development,
            because I believe that everyone if they want to they can do anything.
          </p>
          <br />

          <p>
            Currently leading a team of enthusiast{" "}
            <span style={{ fontWeight: "bolder", fontSize: "1.2em" }}>FRONT END ENGINEER</span> in
            some tech based multifinancing company in Jakarta, Indonesia.
          </p>
          <Link href="/about">
            <div className="link">.back</div>
          </Link>
        </div>
      </FullScreenFix>
      <style jsx>{`
        .bio {
          margin: 72px 8px 16px 8px;
          max-width: 640px;
        }
        .link {
          color: var(--black);
          border: 2px solid var(--black);
          background-color: var(--white);
          padding: 8px 16px;
          width: auto;
          margin-top: 32px;
        }
        .link:hover {
          cursor: pointer;
        }
      `}</style>
    </LayoutManager>
  );
};

export default AboutBio;
