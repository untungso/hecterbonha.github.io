import React from "react";

interface BlogPostInterface {
  title: string;
  excerp: string;
  author: string;
  datePublished: string;
}

const BlogPost: React.FC<BlogPostInterface> = props => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div>{props.title}</div>
        <div>{props.author}</div>
        <div>{props.datePublished}</div>
        <div>{props.excerp}</div>
      </div>
      <style jsx>{`
        .wrapper {
          background-color: var(--darkGray);
          border: 2px solid var(--peach);
          margin: 16px 0;
        }
      `}</style>
    </React.Fragment>
  );
};

export { BlogPost };
