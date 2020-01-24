import React from "react";
import Link from "next/link";

interface BlogPostInterface {
  title: string;
  author: string;
  datePublished: string;
  tags: string[];
  alt: number;
}

const BlogPost: React.FC<BlogPostInterface> = props => {
  const postColorTemplates: any = {
    1: {
      high: "--darkBlue",
      med: "--peach",
      low: "--pink",
    },
    2: {
      high: "--darkPurple",
      med: "--white",
      low: "--peach",
    },
    3: {
      high: "--orange",
      med: "--lightGray",
      low: "--black",
    },
    4: {
      high: "--darkGreen",
      med: "--orange",
      low: "--yellow",
    },
  };
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="date-published">on {props.datePublished}</div>
        <div className="title">{props.title}</div>
        <div className="author">by {props.author}</div>
        <div style={{ marginTop: "16px" }}>
          {props.tags.map(i => {
            return (
              <Link href={`/tags/${i}`} key={i}>
                <span className="tags">#{i}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .tags {
          margin: 0 8px 0 0;
          padding: 4px;
          border: 1px solid var(${postColorTemplates[props.alt].low});
        }
        .tags:hover {
          cursor: pointer;
          padding: 4px;
          background-color: var(${postColorTemplates[props.alt].low});
          color: var(${postColorTemplates[props.alt].high});
        }
        .wrapper {
          max-width: 420px;
          background-color: var(${postColorTemplates[props.alt].high});
          border: 2px solid var(${postColorTemplates[props.alt].med});
          margin: 16px 0;
          padding: 16px;
          color: var(${postColorTemplates[props.alt].low});
        }
        .title {
          font-size: 1.3em;
          font-weight: bolder;
        }
        .title:hover {
          cursor: pointer;
          text-decoration: underline;
        }
        .author {
          font-size: 1em;
          margin: 8px 0;
          border: 1px solid var(${postColorTemplates[props.alt].low});
          padding: 8px;
        }
        .author:hover {
          background-color: var(${postColorTemplates[props.alt].low});
          color: var(${postColorTemplates[props.alt].high});
          cursor: pointer;
        }
        .date-published {
          font-size: 0.8em;
          margin: 8px 0;
        }
      `}</style>
    </React.Fragment>
  );
};

export { BlogPost };
