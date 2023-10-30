import React from "react";
import MetricTile from "./MetricTile";
import { css } from "@emotion/css";
import { MediaQuery as mq} from "@/lib/utils/Constants";

interface MetricTileWrapperProps {
  metricTileList: {
    icon: string;
    subject: string;
    stats: string;
  }[];
}
const MetricTileWrapper = ({ metricTileList }: MetricTileWrapperProps) => {

  const metricTileWrapperStyle = css({
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
    gridRowGap: "20px",
    gridColumnGap: "50px",
    [mq.mobile]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
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
