import React, { ReactChild } from "react";
import { colorPallete } from "../constant/color";
import Head from "next/head";

interface LayoutManagerInterface {
  children: ReactChild | ReactChild[];
  htmlHeadTitle: string;
  footerColor?: string;
}

const LayoutManager: React.FC<LayoutManagerInterface> = props => {
  return (
    <React.Fragment>
      <Color />
      <Head>
        <title>{props.htmlHeadTitle} | USX Labo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      {props.children}
      <div className="on-foot">© {new Date().getFullYear()} Untung So Andryanto</div>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css?family=Karla:400,700&display=swap");
        * {
          margin: 0;
          padding: 0;
          font-family: "Karla", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        }
        .on-foot {
          position: fixed;
          bottom: 16px;
          margin-top: 16px;
          font-size: 10px;
          width: 100%;
          text-align: center;
          color: ${!props.footerColor ? "var(--white)" : ""};
        }
      `}</style>
    </React.Fragment>
  );
};

const Color = () => {
  const technicolor = colorPallete.map(i => `--${i.color}: ${i.hexadecimal};`).join(" ");
  return (
    <React.Fragment>
      <style jsx global>{`
        :root {
          ${technicolor}
        }
      `}</style>
    </React.Fragment>
  );
};

export { LayoutManager };
