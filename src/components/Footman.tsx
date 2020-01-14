import React from "react";

interface FootmanInterface {
  footerColor?: string;
}

const Footman: React.FC<FootmanInterface> = props => {
  return (
    <React.Fragment>
      <div className="on-foot">© {new Date().getFullYear()} Untung So Andryanto</div>
      <style jsx>{`
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

export { Footman };
