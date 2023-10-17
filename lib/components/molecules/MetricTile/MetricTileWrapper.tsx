import React from "react";
import MetricTile from "./MetricTile";
import { css } from "@emotion/css";

interface MetricTileWrapperProps {
  metricTileList: {
    icon: string;
    subject: string;
    stats: string;
  }[];
}
const MetricTileWrapper = ({ metricTileList }: MetricTileWrapperProps) => {
  console.log(metricTileList);

  const metricTileWrapperStyle = css({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "40px",
  });

  return (
    <div className={metricTileWrapperStyle}>
      {metricTileList.map((metricTile, index) => (
        <MetricTile key={index} metricTile={metricTile}></MetricTile>
      ))}
    </div>
  );
};

export default MetricTileWrapper;
