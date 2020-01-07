import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation: React.FC = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const router = useRouter();

  return (
    <React.Fragment>
      <div className="navigation-bar">
        <div className="nav-mobile">
          <div className="nav-button" onClick={() => setToggleNav(!toggleNav)}>
            三
          </div>
        </div>
        <div className="nav-wrapper">
          <Link href="/">
            <div className={`nav-button darkPurple ${router.pathname === "/" ? "nav-active" : ""}`}>
              .root
            </div>
          </Link>
          <Link href="/about">
            <div
              className={`nav-button darkGray ${
                router.pathname === "/about" || "/about/tech-stack" || "/about/machine-setup"
                  ? "nav-active"
                  : ""
              }`}
            >
              .about
            </div>
          </Link>
          <Link href="/blog">
            <div className={`nav-button indigo ${router.pathname === "/blog" ? "nav-active" : ""}`}>
              .blog
            </div>
          </Link>
          <Link href="/labo">
            <div className={`nav-button pink ${router.pathname === "/labo" ? "nav-active" : ""}`}>
              .labo
            </div>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .navigation-bar {
          position: fixed;
          top: 8px;
          width: 100%;
        }
        .nav-mobile {
          display: none;
          flex-direction: row;
          justify-content: flex-end;
          margin-right: 8px;
        }
        .nav-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          margin-right: 8px;
        }
        .nav-button {
          margin: 16px;
          background-color: var(--black);
          color: var(--white);
          padding: 8px;
          border: 2px solid var(--white);
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        .nav-button:hover {
          cursor: pointer;
        }
        .nav-button:active {
          background-color: var(--white);
          color: var(--black);
        }
        .darkPurple {
          background-color: var(--darkPurple);
        }
        .darkGray {
          background-color: var(--darkGray);
        }
        .indigo {
          background-color: var(--indigo);
        }
        .pink {
          background-color: var(--pink);
        }
        .nav-active {
          text-decoration-line: underline;
        }
        @media only screen and (max-width: 600px) {
          .nav-wrapper {
            display: ${toggleNav ? "flex" : "none"};
            flex-direction: column;
            margin: 0 16px;
            background: var(--darkBlue);
            border: 4px solid var(--white);
          }
          .nav-mobile {
            display: flex;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export { Navigation };
