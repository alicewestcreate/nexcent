import { css } from "@emotion/css";
import React from "react";

interface TwoColumnProps {
  firstChild: React.ReactNode,
  secondChild: React.ReactNode,
}

const TwoColumn = ({firstChild, secondChild} : TwoColumnProps) => {
  const gridStyling = css({
    display: "grid",
    gridTemplateColumns: "2fr 3.5fr",
    alignItems:"center",
    // gridTemplateRows: '1fr',
    "& div": {
      // border: "1px solid black",
    },
  });

  return (
    <div className={gridStyling}>
      <div>{firstChild}</div>
      <div>{secondChild}</div>
      </div>
  );
}

export default TwoColumn;
