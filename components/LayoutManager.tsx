import React, { ReactChild } from "react";
import { colorPallete } from "../constant/color";
import Head from "next/head";
import { Navigation } from "../components/Navigation";
import { Footman } from "../components/Footman";

interface LayoutManagerInterface {
  children: ReactChild | ReactChild[];
  htmlHeadTitle: string;
  noFootman?: boolean;
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
      <Navigation />
      {props.children}
      {props.noFootman ? <React.Fragment /> : <Footman />}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css?family=Karla:400,700&display=swap");
        * {
          margin: 0;
          padding: 0;
          font-family: "Karla", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
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
