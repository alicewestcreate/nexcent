import React from "react";
import IconBackground from "../../atoms/IconBackground/IconBackground";
import { css } from "@emotion/css";
import { getDynamicIcon } from "@/lib/utils/utilityFunc/getDynamicIcon";
import { IconType } from "../../atoms/Icons/IconProps";


interface IconsBadgeProps {
  icon: IconType;
}

const IconBadge: React.FC<IconsBadgeProps> = ({ icon }) => {
  const badgeWrapperStyle = css({
    position: "relative",
    zIndex: "-10",
    "& > :last-child": {
      position: "absolute",
      left: "-15px",
      bottom: "10px",
    },
  });

  const DynamicIcon = getDynamicIcon(icon);

  return (
    <div className={badgeWrapperStyle}>
      <IconBackground></IconBackground>
      <DynamicIcon />
    </div>
  );
};

export default IconBadge;
