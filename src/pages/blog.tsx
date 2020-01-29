import React from "react";
import { LayoutManager } from "../components/LayoutManager";
import { FullScreenFix } from "../components/FullScreenFix";
import { BlogPost } from "../components/BlogPost";

interface BlogPageInterface {
  stars: string;
}

const BlogPage: React.FC<BlogPageInterface> = ({ stars }) => {
  console.log(stars);
  return (
    <LayoutManager htmlHeadTitle="Blog" noFootman={true}>
      <FullScreenFix
        backgroundColor="var(--indigo)"
        textColor="var(--peach)"
        borderColor="var(--yellow)"
      >
        <div className="blog-post-wrapper">
          <h1 style={{ textAlign: "center", width: "100%" }}>Blog</h1>
          <BlogPost
            title="Make websites work offline - Part 1: What are Service Workers and How to get a custom App Install button on the website."
            author="Untung So Andryanto"
            datePublished="1 January 2020"
            tags={["ID", "wow"]}
            alt={3}
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

export default BlogPage;
