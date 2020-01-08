import React from "react";
import { LayoutManager } from "../../components/LayoutManager";
import Link from "next/link";
import { FullScreenFix } from "../../components/FullScreenFix";

const AboutIndex = () => {
  return (
    <LayoutManager htmlHeadTitle="About">
      <FullScreenFix
        backgroundColor="var(--darkGray)"
        textColor="var(--white)"
        borderColor="var(--peach)"
      >
        <div className="inner">
          <img src="/UUe46eY5_400x400.jpg" alt="Untung So Andryanto" className="usx" />
          <h1>Halo! 👋</h1>
          <h4>my name is</h4>
          <h2>Untung So Andryanto</h2>
          <h4>and I build solution stack for people, hybrid apps, and server side.</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "16px",
            }}
          >
            <Link href="/about/tech-stack">
              <div className="link">.techstack</div>
            </Link>
            <Link href="/about/machine-setup">
              <div className="link">.hwinfo</div>
            </Link>
            <Link href="/about/bio">
              <div className="link">.bio</div>
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "row", marginTop: "16px" }}>
            <a href="https://instagram.com/usndrynt" className="social ig" target="_blank">
              .ig
            </a>
            <a href="https://twitter.com/untungso1" className="social tw" target="_blank">
              .tw
            </a>
            <a href="mailto:untungsoandryanto@gmail.com" className="social gm" target="_blank">
              .gmail
            </a>
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
          width: 136px;
          border: 2px solid var(--white);
          margin-bottom: 16px;
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
        .social {
          padding: 4px;
          border: 2px solid var(--black);
          text-decoration: none;
          color: var(--black);
          margin: 0 4px;
        }
        .social:hover {
          cursor: pointer;
        }
        .social:visited {
          color: var(--black);
        }
        .ig {
          background-color: var(--pink);
        }
        .tw {
          background-color: var(--blue);
        }
        .gm {
          background-color: var(--red);
        }
      `}</style>
    </LayoutManager>
  );
};

export default AboutIndex;
