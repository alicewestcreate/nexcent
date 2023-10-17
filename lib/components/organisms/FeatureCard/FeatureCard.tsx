import React from "react";
import Typography from "../../atoms/Typography/Typography";
import { css } from "@emotion/css";
import IconBadge from "../../molecules/IconBadge/IconBadge";
import { IconType } from "../../atoms/Icons/IconProps";
import generateSpacingString from "@/lib/utils/utilityFunc/generateSpacingString";

interface FeatureCardProps {
  icon: IconType;
  heading: string;
  copy: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, heading, copy }) => {
  const cardStyle = css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: generateSpacingString(24, 32),
    gap: "16px",
    width: "300px",
    height: "260px",
    borderRadius: "8px",
    boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.05)",
    "& > h3": {
      margin: "0",
    },
    "& > p": {
      margin: "0",
    },
  });

  return (
    <div className={cardStyle}>
      <IconBadge icon={icon}></IconBadge>

      <Typography
        type="h3"
        variant="h3"
        align="center"
        text={heading}
      ></Typography>
      <Typography
        type="p"
        variant="body3"
        align="center"
        text={copy}
      ></Typography>
    </div>
  );
};

export default FeatureCard;
