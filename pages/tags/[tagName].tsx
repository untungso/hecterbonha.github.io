import React from "react";
import { LayoutManager } from "../../components/LayoutManager";
import { FullScreenFix } from "../../components/FullScreenFix";
import { BlogPost } from "../../components/BlogPost";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const { tagName } = router.query;
  return (
    <LayoutManager htmlHeadTitle={`${tagName}`} noFootman={true}>
      <FullScreenFix
        backgroundColor="var(--indigo)"
        textColor="var(--white)"
        borderColor="var(--lightGray)"
      >
        <div className="blog-post-wrapper">
          <h1 style={{ textAlign: "center", width: "100%" }}>#{tagName}</h1>
          <BlogPost
            title="Make websites work offline - Part 1: What are Service Workers and How to get a custom App Install button on the website."
            author="Untung So Andryanto"
            datePublished="1 January 2020"
            tags={["jsx", "wow"]}
            alt={1}
          />
          {/* <BlogPost
            title="Make websites work offline - Part 1: What are Service Workers and How to get a custom App Install button on the website."
            author="Untung So Andryanto"
            datePublished="1 January 2020"
            tags={["jsx", "wow"]}
            alt={2}
          />
          <BlogPost
            title="Make websites work offline - Part 1: What are Service Workers and How to get a custom App Install button on the website."
            author="Untung So Andryanto"
            datePublished="1 January 2020"
            tags={["jsx", "wow"]}
            alt={3}
          />
          <BlogPost
            title="Make websites work offline - Part 1: What are Service Workers and How to get a custom App Install button on the website."
            author="Untung So Andryanto"
            datePublished="1 January 2020"
            tags={["jsx", "wow"]}
            alt={4}
          /> */}
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
