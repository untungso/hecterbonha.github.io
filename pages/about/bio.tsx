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
          <Link href="about">
            <div className="back-button">.back</div>
          </Link>
          NodeJS and typescript are everywhere these days. At big tech companies and small startups.
          Always bet on Javascript. Javascript will not go away in the next 10 to 20 years. Getting
          people to update their browsers will not be easy. Maybe we will not write directly
          Javascript but in the end, it will be vanilla javascript after some transformation steps.
          Setting up a new nodejs project is hard. Only configuring webpack and babeljs can be a big
          pain point. Not speaking about all the other stuff like coming up with a structure for a
          new project. Frameworks like Ruby on Rails are often very opinionated about things like
          that and are easy to use and project you never touched are easy to understand because you
          know the skeleton of the project. This is why this year I want to start a hobby project
          and work on it. It should be as easy to use and understand as Ruby on Rails but it should
          be based on node js. Also, it should use modern Javascript and for example avoid this as
          much as possible.NodeJS and typescript are everywhere these days. At big tech companies
          and small startups. Always bet on Javascript. Javascript will not go away in the next 10
          to 20 years. Getting people to update their browsers will not be easy. Maybe we will not
          write directly Javascript but in the end, it will be vanilla javascript after some
          transformation steps. Setting up a new nodejs project is hard. Only configuring webpack
          and babeljs can be a big pain point. Not speaking about all the other stuff like coming up
          with a structure for a new project. Frameworks like Ruby on Rails are often very
          opinionated about things like that and are easy to use and project you never touched are
          easy to understand because you know the skeleton of the project. This is why this year I
          want to start a hobby project and work on it. It should be as easy to use and understand
          as Ruby on Rails but it should be based on node js. Also, it should use modern Javascript
          and for example avoid this as much as possible.NodeJS and typescript are everywhere these
          days. At big tech companies and small startups. Always bet on Javascript. Javascript will
          not go away in the next 10 to 20 years. Getting people to update their browsers will not
          be easy. Maybe we will not write directly Javascript but in the end, it will be vanilla
          javascript after some transformation steps. Setting up a new nodejs project is hard. Only
          configuring webpack and babeljs can be a big pain point. Not speaking about all the other
          stuff like coming up with a structure for a new project. Frameworks like Ruby on Rails are
          often very opinionated about things like that and are easy to use and project you never
          touched are easy to understand because you know the skeleton of the project. This is why
          this year I want to start a hobby project and work on it. It should be as easy to use and
          understand as Ruby on Rails but it should be based on node js. Also, it should use modern
          Javascript and for example avoid this as much as possible.
        </div>
      </FullScreenFix>
      <style jsx>{`
        .bio {
          margin: 72px 8px 16px 8px;
        }
        .back-button {
          padding: 8px 16px;
        }
      `}</style>
    </LayoutManager>
  );
};

export default AboutBio;
