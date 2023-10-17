import React from "react";
import Typography from "../../atoms/Typography/Typography";
import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { CustomTheme } from "@/app/theme";
import { getDynamicIcon } from "@/lib/utils/utilityFunc/getDynamicIcon";

interface MetricTileProps {
  metricTile: {
    icon: string;
    subject: string;
    stats: string;
  };
}

const MetricTile: React.FC<MetricTileProps> = ({ metricTile }) => {
  const theme = useTheme() as CustomTheme;

  const DynamicIcon = getDynamicIcon(metricTile?.icon, theme.colors.primary);

  const gridStyle = css({
    display: "flex",
    alignItems: "center",
    gap: "16px",
    "& *": {
      margin: 0,
    },
  });

  return (
    <div className={gridStyle}>
      <div>{metricTile?.icon ? <DynamicIcon></DynamicIcon> : null}</div>
      <div>
        <Typography
          type="h3"
          variant="h3"
          text={metricTile?.stats}
        ></Typography>
        <Typography text={metricTile?.subject}></Typography>
      </div>
    </div>
  );
};

export default MetricTile;
