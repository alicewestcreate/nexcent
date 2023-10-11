import React from "react";
import BuildingIcon from "../../atoms/Icons/BuildingIcon";
import IconBackground from "../../atoms/IconBackground/IconBackground";
import { css } from "@emotion/css";
import PeopleIcon from "../../atoms/Icons/PeopleIcon";
import HandsIcon from "../../atoms/Icons/HandsIcon";
import dynamic from "next/dynamic";

interface Props {
  icon: "HandsIcon" | "PeopleIcon" | "BuildingIcon";
}

const IconBadge: React.FC<Props> = ({ icon }) => {
  const badgeWrapperStyle = css({
    position: "relative",
    "& > :last-child": {
      position: "absolute",
      left: "-15px",
      bottom: "10px",
    },
  });

  const DynamicIcon = dynamic(
    () => import(`../../atoms/Icons/${icon}`).then((module) => module.default),
    { ssr: false, loading: ()=> <div>loading</div>,
     }
  );

  return (
    <div className={badgeWrapperStyle}>
      <IconBackground></IconBackground>
      <DynamicIcon/>
    </div>
  );
};

export default IconBadge;
