import React from "react";
import { LayoutManager } from "../../components/LayoutManager";
import { FullScreenFix } from "../../components/FullScreenFix";
import { BlogPost } from "../../components/BlogPost";

export default () => {
  return (
    <LayoutManager htmlHeadTitle="Blog" noFootman={true}>
      <FullScreenFix
        backgroundColor="var(--indigo)"
        textColor="var(--white)"
        borderColor="var(--lightGray)"
      >
        <div className="blog-post-wrapper">
          <h1>Blog</h1>
          <BlogPost
            title="JS is fun"
            author="Untung So Andryanto"
            excerp="lorem ipsum dolor sir amet lalala"
            datePublished="1 January 2020"
          />
        </div>
      </FullScreenFix>
      <style jsx>{`
        .blog-post-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 64px 8px;
        }
        @media only screen and (max-width: 600px) {
          .inner {
            padding: 16px 8px;
          }
        }
      `}</style>
    </LayoutManager>
  );
};
